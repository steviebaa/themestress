import styled from '@emotion/styled';
import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

interface Message {
  content: React.ReactNode;
  duration?: number;
  variant?: 'success' | 'warning' | 'error' | 'info';
  width?: string;
}

interface _Message extends Message {
  id: number;
}

interface MessageQueue {
  main: _Message[];
}

export interface SnackbarContextProps {
  enqueue: (msg: Message) => void;
}

interface SnackbarProviderProps {
  children: React.ReactNode;
  margin?: {left?: number; right?: number; top?: number; bottom?: number};
  minWidth?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Snackbar = styled.div<SnackbarProviderProps>`
  position: fixed;
  top: ${({position, margin}) =>
    position.includes('top') ? margin.top + 'px' : ''};
  bottom: ${({position, margin}) =>
    position.includes('bottom') ? margin.bottom + 'px' : ''};
  left: ${({position, margin}) =>
    position.includes('left') ? margin.left + 'px' : ''};
  right: ${({position, margin}) =>
    position.includes('right') ? margin.right + 'px' : ''};
  flex-direction: ${({position}) =>
    position.includes('top') ? 'column' : 'column-reverse'};
  display: flex;
  min-width: ${({minWidth}) => minWidth};
  min-height: fit-content;
  transition: min-height;
  transition-duration: 500ms;
  z-index: var(--sys-z-index-snackbar);
`;

export const SnackbarContext = React.createContext<SnackbarContextProps>(null);

const addMessageDefaults = (message: Message): _Message => {
  const {content, duration, variant, width} = message;
  return {
    content,
    duration: duration ?? 10000,
    variant: variant ?? null,
    id: Date.now(),
    width: width ?? null,
  };
};

export const SnackbarProvider = ({
  children,
  ...props
}: SnackbarProviderProps) => {
  // Assign defaults
  props.minWidth = props.minWidth ?? '0';
  props.position = props.position ?? 'bottom-left';
  props.margin = props.margin ?? {};
  props.margin = Object.assign(
    {top: 24, bottom: 24, right: 24, left: 24},
    props.margin,
  );

  const [messages, setMessages] = useState<MessageQueue>({
    main: [],
  });

  const addToQueue = (message: Message) => {
    if (message.content === undefined) return null;
    const msg = addMessageDefaults(message);
    setMessages(prev => ({...prev, main: [...prev.main, msg]}));

    // Delete message after duration
    setTimeout(() => {
      setMessages(prev => ({
        ...prev,
        main: prev.main.filter(m => m.id !== msg.id),
      }));
    }, msg.duration + 1000);

    return msg.id;
  };

  return (
    <SnackbarContext.Provider value={{enqueue: addToQueue}}>
      {children}

      {ReactDOM.createPortal(
        <Snackbar {...props}>
          {messages.main.map(msg => (
            <Snack key={msg.id} msg={msg} {...props} />
          ))}
        </Snackbar>,
        document.body,
      )}
    </SnackbarContext.Provider>
  );
};

const StyledSnack = styled.div<Partial<SnackProps>>`
  margin-top: calc(var(--sys-spacing) * 2);
  width: ${({msg}) => msg.width ?? ''};
  overflow: hidden;
  box-sizing: border-box;
  padding: 12px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border-radius: ${({theme}) => `${theme.spacing}px`};
  animation-timing-function: ease-in-out;
  transform: ${({position, margin}) => {
    if (position.includes('left')) {
      return `translateX(calc(-100% - ${margin.left}px))`;
    } else {
      return `translateX(calc(100% + ${margin.right}px))`;
    }
  }};

  background: var(--sys-color-surface);
  color: var(--sys-color-on-surface);
  border-left: 3px solid var(--sys-color-primary);

  ._Snack-Icon {
    margin-right: 4px;
  }
`;

interface SnackProps {
  msg: _Message;
  position?: SnackbarProviderProps['position'];
  margin?: SnackbarProviderProps['margin'];
}
const Snack = ({msg, ...props}: SnackProps) => {
  const slideInTime = 200;
  const slideAwayTime = 200;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current.animate([{transform: 'translateX(0)'}], {
      duration: slideInTime,
      iterations: 1,
      fill: 'forwards',
    });

    const animateTo = props.position.includes('left')
      ? `translateX(calc(-100% - ${props.margin.left}px))`
      : `translateX(calc(100% + ${props.margin.right}px))`;

    setTimeout(() => {
      ref.current.animate(
        [{transform: 'translateX(0)'}, {transform: animateTo}],
        {
          duration: slideAwayTime,
          iterations: 1,
          fill: 'forwards',
        },
      );
    }, msg.duration);

    setTimeout(() => {
      ref.current.animate(
        [
          {height: ref.current.clientHeight + 'px'},
          {height: '0px', padding: '0px', margin: '0px'},
        ],
        {duration: slideAwayTime, iterations: 1, fill: 'forwards'},
      );
    }, slideInTime + msg.duration);
  }, [ref]);

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: '💡',
  };
  return (
    <StyledSnack msg={msg} ref={ref} key={msg.id} {...props}>
      {msg.variant ? (
        <span className="_Snack-Icon">{icons[msg.variant]}</span>
      ) : null}

      <span className="_Snack-Message">{msg.content}</span>
    </StyledSnack>
  );
};
