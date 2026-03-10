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
    LockOutlined 
} from '@ant-design/icons'

const { Title, Text } = Typography

const Login = () => {
  return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', width: '80%', maxWidth: 1000, alignItems: 'stretch' }}>
                <Card style={{ flex: 1, height: 400, borderRadius: 12, boxShadow: '0 4px 30px rgba(80, 79, 79, 0.2)', display: 'flex' }}>

                    <div style={{ flex: 1, padding: 24 }}>
                        <div style={{ textAlign: 'center', marginBottom: 24 }}>
                            <Title level={3} style={{ marginBottom: 2 }}>ระบบติดตามยืม-คืนอุปกรณ์</Title>
                            <Title level={5} style={{ color: '#666' }}>ระบบติดตามโครงการ MOA</Title>
                        </div>
                        <Form layout="vertical" onFinish={(values) => console.log('Login values:', values)}>
                            <Form.Item name="username" rules={[{ required: true }]}>
                                <Input prefix={<UserOutlined />} size="large" placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true }]}>
                                <Input.Password prefix={<LockOutlined />} size="large" placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block  loading={false}>
                                    เข้าสู่ระบบ
                                </Button>
                            </Form.Item>
                        </Form>
                        <div style={{ textAlign: 'center', marginTop: 12, display: 'flex', flexDirection: 'column' }}>
                            <Text style={{ color: '#7f7c7c', marginTop: 5, fontSize: 10 }}>@ 2026 | ระบบติดตามโครงการ MOA ver. 1.0.0</Text>
                            <Text style={{ color: '#7f7c7c', marginTop: 5, fontSize: 10 }}>บริษัท อาร์คติค เทคนิคอล จำกัด</Text>
                        </div>
                    </div>
                    {/* right side: inside card image */}
                    <div
                        style={{
                            flex: 1,
                            height: '100%',
                            borderRadius: '0 12px 12px 0',
                            backgroundImage: 'url(../public/water.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </Card>
            </div>
        </div>
    );
}

export default Login
