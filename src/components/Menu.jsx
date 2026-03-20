import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  ProjectOutlined,
  FileTextOutlined,
  HistoryOutlined,
  FileSyncOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { confirmLogout } from "../utils/sweetalert";
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
      key: "project",
      icon: <ProjectOutlined />,
      label: "โครงการ",
      children: [
        {
          key: "/project",
          icon: <ProjectOutlined />,
          label: "โครงการทั้งหมด",
        },
        {
          key: "/project/ongoing",
          icon: <FileSyncOutlined />,
          label: "โครงการที่กำลังดำเนินการ",
        },
        {
          key: "/project/completed",
          icon: <CheckCircleOutlined />,
          label: "โครงการที่เสร็จสิ้น",
        },
      ],
    },
    { type: "divider" },
    ...(isAdmin
      ? [
          {
            key: "/setting",
            icon: <SettingOutlined />,
            label: "ตั้งค่า",
            children: [
              {
                key: "/user",
                icon: <UserOutlined />,
                label: "ผู้ใช้งาน",
              },
              {
                key: "/report",
                icon: <FileTextOutlined />,
                label: "รายงาน",
              },
              {
                key: "/log",
                icon: <HistoryOutlined />,
                label: "ประวัติการใช้งาน",
              },
            ],
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
            confirmLogout(() => {
              navigate("/");
              logout();
            });
          } else {
            navigate(item.key);
          }
        }}
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        style={{
          fontSize: "12px",
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
