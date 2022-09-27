import { useEffect } from 'react';
import {
  Overlay,
  ModalWindow,
  CloseBtn,
  IcoClose,
  ModalImage,
} from './Modal.styled';

export const Modal = ({ activeUrl, imgAlt, onClose }) => {
  useEffect(() => {
    const handleEscPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow aria-modal="true">
          <CloseBtn onClick={onClose}>
            <IcoClose />
          </CloseBtn>
          <ModalImage src={activeUrl} alt={imgAlt} />
        </ModalWindow>
      </Overlay>
    </>
  );
};
