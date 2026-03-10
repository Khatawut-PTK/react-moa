import React, { useState } from 'react';

import { 
    Card, 
    Form, 
    Input, 
    Button, 
    Typography 
} from 'antd'
import { 
    UserOutlined, 
    LockOutlined, 
    LoginOutlined 
} from '@ant-design/icons'

const { Title, Text } = Typography

const Login = () => {
  return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: 360, borderRadius: 12, boxShadow: '0 4px 30px rgba(80, 79, 79, 0.2)' }}>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <Title level={3} style={{ marginBottom: 2 }}>ระบบติดตามยืม-คืนอุปกรณ์</Title>
                    <Title level={5} style={{ color: '#666' }}>กรุณาเข้าสู่ระบบเพื่อใช้งาน</Title>
                </div>
                <Form layout="vertical" onFinish={(values) => console.log('Login values:', values)}>
                    <Form.Item name="username" rules={[{ required: true }]}>
                        <Input prefix={<UserOutlined />} size="large" placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true }]}>
                        <Input.Password prefix={<LockOutlined />} size="large" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block icon={<LoginOutlined />} loading={false}>
                            เข้าสู่ระบบ
                        </Button>
                    </Form.Item>
                </Form>
                <div style={{ textAlign: 'center', marginTop: 12, display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ color: '#666', marginTop: 12, fontSize: 12 }}>Resource Tracking & Checkout System 2025 © 2025</Text>
                    <Text style={{ color: '#666', marginTop: 12, fontSize: 12 }}>ver. 1.0.0</Text>
                </div>
            </Card>
        </div>
    );
}

export default Login
