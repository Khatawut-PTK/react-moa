import { Modal } from "antd";

const BaseModal = ({
  title,
  open,
  onCancel,
  children,
  okText,
  cancelText,
  onOk,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
