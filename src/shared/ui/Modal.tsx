import {
  Modal as AdmiralModal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
} from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 20px;
`;

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}

export const Modal = ({ message, onConfirm, onCancel, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AdmiralModal onClose={onCancel} aria-labelledby="modal-title">
      <ModalTitle id="modal-title">Подтверждение действия</ModalTitle>
      <ModalContent>
        <p>{message}</p>
        <Separator />
      </ModalContent>
      <ModalButtonPanel>
        <Button appearance="primary" dimension="m" onClick={onConfirm}>
          Удалить
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onCancel}>
          Отмена
        </Button>
      </ModalButtonPanel>
    </AdmiralModal>
  );
};
