import React from 'react'
import { Menu } from 'antd'
import { 
    DashboardOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    LaptopOutlined,
    FileTextOutlined,
    LogoutOutlined
} from '@ant-design/icons';

function AppMenu() {
  return (
    <div>
        <Menu
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
        style={{ fontSize: '13px' }}
        items={[
          {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: 'แดชบอร์ด',
          },
          {
            key: 'users',
            icon: <UserOutlined />,
            label: 'ผู้ใช้งาน',
          },
          { type: 'divider' },
          {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'ออกจากระบบ',
          },
        ]}
      />
    </div>
  )
}

export default AppMenu