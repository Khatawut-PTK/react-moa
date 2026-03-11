import React from 'react';
import { 
    Button, 
    Checkbox, 
    Form, 
    Input, 
    Typography 
} from 'antd';
import '../assets/login.css';

const { Title, Text } = Typography;

const Login = () => {
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
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                                className="login-form-item"
                            >
                                <Input 
                                    placeholder="Username" 
                                    variant="filled"
                                    className="login-input"
                                />
                            </Form.Item>
                            
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                                className="login-form-item"
                            >
                                <Input.Password
                                    placeholder="Password"
                                    variant="filled"
                                    className="login-input"
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


