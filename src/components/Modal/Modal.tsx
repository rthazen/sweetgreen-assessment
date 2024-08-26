import React from "react";
import Button from "../shared/Button";
import * as S from "./Modal.styled";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  transactionID: number;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, transactionID }) => {
  if (!show) return null;

  return (
    <S.ModalContainer>
      <S.ModalWrapper>
        <S.ModalHeader>Order Confirmation</S.ModalHeader>
        <S.ModalCopy>Your order has been placed successfully!</S.ModalCopy>
        <S.ModalTransaction>Transaction ID: {transactionID}</S.ModalTransaction>
        <Button onClick={onClose}>Close</Button>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Modal;
