import React from 'react'
import { Menu } from 'antd'
import { 
    DashboardOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    LaptopOutlined,
    ToolOutlined,
    FileTextOutlined,
    LogoutOutlined
} from '@ant-design/icons';

function AppMenu() {
  return (
    <div>
        <Menu
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
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
            children: [
              { key: '/users/list', icon: <UsergroupAddOutlined />, label: 'รายการผู้ใช้งาน' },
            ],
          },
          { type: 'divider' },
          {
            key: '/devices',
            icon: <LaptopOutlined />,
            label: 'อุปกรณ์',
          },
          { type: 'divider' },
          {
            key: 'repairs',
            icon: <ToolOutlined />,
            label: 'แจ้งซ่อม',
            children: [
              { key: '/repairs', label: 'แจ้งซ่อมใหม่' },
              { key: '/repairs/status', label: 'สถานะการซ่อม' },
            ],
          },
          { type: 'divider' },
          {
            key: '/reports',
            icon: <FileTextOutlined />,
            label: 'รายงาน',
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