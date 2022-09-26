import React, { Component } from 'react';
import {
  Overlay,
  ModalWindow,
  CloseBtn,
  IcoClose,
  ModalImage,
} from './Modal.styled';

export class Modal extends Component {
  handleEscPress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
  }

  render() {
    const { activeUrl, imgAlt, onClose } = this.props;
    return (
      <>
        <Overlay onClick={onClose}>
          <ModalWindow aria-modal="true">
            <CloseBtn onClick={onClose}>
              <IcoClose />
            </CloseBtn>
            <ModalImage src={activeUrl} alt={imgAlt} />
          </ModalWindow>
        </Overlay>
      </>
    );
  }
}
