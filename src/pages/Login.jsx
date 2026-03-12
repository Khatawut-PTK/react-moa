import React from 'react';
import { 
    Button, 
    Checkbox, 
    Form, 
    Input, 
    Typography 
} from 'antd';
import '../assets/login.css';
import { 
    showSuccess, 
    showError 
} from '../utils/sweetalert';
import { 
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        showSuccess('เข้าสู่ระบบสำเร็จ');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        showError('เข้าสู่ระบบไม่สำเร็จ');
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-form-side"> 
                    <div className="login-form-content">
                        <div className="login-logo-section">
                            <div className="login-logo-title-group">
                                <Text className="login-logo-title">
                                    WMA<br/>องค์การจัดการน้ำเสีย 
                                </Text>
                            </div>
                            
                            <Text className="login-logo-subtitle">
                                ระบบติดตามโครงการองค์การจัดการน้ำเสีย
                            </Text>
                        </div>

                        <Form
                            name="login"
                            layout="vertical"
                            size="large"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]}
                                className="login-form-item"
                                style={{ marginBottom: '25px' }}
                            >
                                <Input 
                                    placeholder="ชื่อผู้ใช้" 
                                    variant="filled"
                                    className="login-input"
                                    prefix={<UserOutlined style={{ color: '#bfbfbf' }} />}
                                />
                            </Form.Item>
                            
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
                                className="login-form-item"
                            >
                                <Input.Password
                                    placeholder="รหัสผ่าน"
                                    variant="filled"
                                    className="login-input"
                                    prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
                                />
                            </Form.Item>
                
                            <Form.Item name="remember" valuePropName="checked" className="login-form-item">
                                <Checkbox style={{ color: '#666' }}>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 0 }}>
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    block 
                                >
                                    เข้าสู่ระบบ
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="login-footer">
                        <div className="login-footer-content">
                            <Text className="login-footer-text">@ 2026 | Systeam Moa V0.1</Text>
                            <Text className="login-footer-text">บริษัท อาร์คติค เทคนิคอล จำกัด</Text>
                        </div>
                    </div>
                </div>

                <div className="login-image-side"></div>
            </div>
        </div>
    );
};

export default Login;


