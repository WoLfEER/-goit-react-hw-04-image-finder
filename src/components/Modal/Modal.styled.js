import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const CloseBtn = styled.button`
  position: relative;
  top: 51px;
  left: 0px;
  background-color: transparent;
  border: none;
`;

export const IcoClose = styled(GrClose)`
  padding: 10px;
  width: 40px;
  height: 40px;
  opacity: 0.6;
  border-radius: 5px;
  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.2);
    background-color: tomato;
  }
`;

export const ModalImage = styled.img`
  max-width: 90vw;
  height: 30vh;
`;
