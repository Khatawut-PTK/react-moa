import { Modal } from "antd";

const BaseModal = ({ title, open, onCancel, children, okText, cancelText }) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
