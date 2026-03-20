import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  Row,
  Col,
  Space,
} from "antd";
import "../assets/login.css";
import { showSuccess, showError } from "../utils/sweetalert";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../features/auth/auth.hook";
import useAuthStore from "../stores/auth.store";

const { Text, Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const { login, loading } = useAuth();

  const onFinish = async (values) => {
    try {
      const response = await login(values.userName, values.password);
      setAuth(response.data);
      showSuccess("เข้าสู่ระบบสำเร็จ");
      navigate("/dashboard");
    } catch (error) {
      showError(
        error.response?.data?.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    showError("เข้าสู่ระบบไม่สำเร็จ");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <Row style={{ height: "100%" }}>
          <Col xs={24} md={12} className="login-form-side">
            <div className="login-form-content">
              <div className="login-logo-section">
                <div className="login-logo-title-group">
                  <Text className="login-logo-title">
                    <Col>
                      <Image
                        width={200}
                        className="login-logo-image"
                        src="/bg-logo.png"
                        preview={false}
                      />
                    </Col>
                  </Text>
                </div>
                <Title className="login-logo-subtitle" level={3}>
                  ระบบติดตามโครงการองค์การจัดการน้ำเสีย
                </Title>
              </div>

              <Form
                name="login"
                layout="vertical"
                size="large"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                requiredMark={false}
              >
                <Form.Item
                  name="userName"
                  rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
                  className="login-form-item"
                  style={{ marginBottom: "25px" }}
                >
                  <Input
                    placeholder="ชื่อผู้ใช้"
                    variant="filled"
                    className="login-input"
                    style={{ border: "none" }}
                    prefix={<UserOutlined style={{ color: "#bfbfbf" }} />}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
                  className="login-form-item"
                >
                  <Input.Password
                    placeholder="รหัสผ่าน"
                    variant="filled"
                    className="login-input"
                    style={{ border: "none" }}
                    prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
                  />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  className="login-form-item"
                >
                  <Checkbox style={{ color: "#666" }}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <div className="login-footer">
              <Space orientation="vertical" size={2} align="center">
                <Text className="login-footer-text">
                  @ 2026 | Systeam Moa V0.1
                </Text>
                <Text className="login-footer-text">
                  บริษัท อาร์คติค เทคนิคอล จำกัด
                </Text>
              </Space>
            </div>
          </Col>

          <Col xs={0} md={12} className="login-image-side"></Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
