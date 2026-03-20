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
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onOk(values.password);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const validateConfirmPassword = (_, value) => {
    const password = form.getFieldValue("password");
    if (password && value && password !== value) {
      return Promise.reject(new Error("รหัสผ่านไม่ตรงกัน"));
    }
    return Promise.resolve();
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <BaseModal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Form form={form} layout="horizontal">
        <Form.Item
          label="รหัสผ่านใหม่"
          name="password"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          rules={[{ required: true, message: "กรุณากรอกรหัสผ่านใหม่" }]}
        >
          <Input.Password
            style={{
              border: "none",
              boxShadow: "0 0 0 1px #d9d9d9",
            }}
          />
        </Form.Item>
        <Form.Item
          label="ยืนยันรหัสผ่าน"
          name="confirmPassword"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          rules={[
            { required: true, message: "กรุณากรอกรหัสผ่านอีกครั้ง" },
            { validator: validateConfirmPassword },
          ]}
        >
          <Input.Password
            style={{
              border: "none",
              boxShadow: "0 0 0 1px #d9d9d9",
            }}
          />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};

export default ModalResetPassword;
