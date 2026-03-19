import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import useAuth from "../features/auth/auth.hook";
import useAuthStore from "../stores/auth.store";

const AppMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { user } = useAuthStore();

  const isAdmin = user?.role === "admin";

  const menuItems = [
    ...(isAdmin
      ? [
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: "แดชบอร์ด",
          },
          { type: "divider" },
        ]
      : []),
    {
      key: "/project",
      icon: <ProjectOutlined />,
      label: "โครงการ",
    },
    { type: "divider" },
    ...(isAdmin
      ? [
          {
            key: "/user",
            icon: <UserOutlined />,
            label: "ผู้ใช้งาน",
          },
          { type: "divider" },
          {
            key: "/setting",
            icon: <SettingOutlined />,
            label: "ตั้งค่า",
          },
          { type: "divider" },
        ]
      : []),
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "ออกจากระบบ",
    },
  ];

  return (
    <>
      <Menu
        onClick={(item) => {
          if (item.key === "logout") {
            navigate("/");
            logout();
          } else {
            navigate(item.key);
          }
        }}
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        style={{
          fontSize: "13px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRight: 0,
        }}
        items={menuItems}
      />
    </>
  );
};

export default AppMenu;
