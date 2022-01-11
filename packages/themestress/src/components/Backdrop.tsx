import React from 'react';

export interface BackdropProps {
  onClick: () => void;
  zIndex?: number;
  backgroundColor?: string;
}

const styles = (props: BackdropProps): React.CSSProperties => ({
  position: 'fixed',
  left: '0px',
  top: '0px',
  width: '100vw',
  height: '100vh',
  zIndex: props.zIndex ?? 1400,
  backgroundColor: props.backgroundColor ?? 'transparent',
});

export const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  const classes = styles(props);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <div
      className="_Backdrop"
      onPointerDown={handleClick}
      style={classes}
    ></div>
  );
};
