import BaseModal from "./BaseModal";
import { Form, Input } from "antd";

const ModalResetPassword = ({
  title,
  open,
  onOk,
  onCancel,
  okText,
  cancelText,
}) => {
  return (
    <BaseModal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Form layout="vertical">
        <Form.Item label="รหัสผ่านใหม่" name="password">
          <Input.Password
            style={{ border: "none", boxShadow: "0 0 0 1px #d9d9d9" }}
          />
        </Form.Item>
        <Form.Item label="ยืนยันรหัสผ่าน" name="confirmPassword">
          <Input.Password
            style={{ border: "none", boxShadow: "0 0 0 1px #d9d9d9" }}
          />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};

export default ModalResetPassword;
