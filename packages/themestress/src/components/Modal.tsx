import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

export interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1300;
  outline: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const Modal: React.FC<ModalProps> = ({ open, children }) => {
  return open
    ? ReactDOM.createPortal(
        <>
          <Backdrop className="_Modal-Backdrop" />
          <Wrapper className="_Modal-Wrapper">{children}</Wrapper>
        </>,
        document.body,
      )
    : null;
};
