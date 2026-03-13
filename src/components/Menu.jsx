import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function AppMenu() {
  const navigate = useNavigate();

  return (
    <>
      <Menu
        onClick={(item) => {
          if (item.key === "logout") {
            navigate("/");
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
          height: "calc(100vh - 48px)",
          borderRight: 0,
        }}
        items={[
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: "แดชบอร์ด",
          },
          {
            key: "/user",
            icon: <UserOutlined />,
            label: "ผู้ใช้งาน",
          },
          { type: "divider" },
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "ออกจากระบบ",
            style: { marginTop: "auto", marginBottom: "16px" },
          },
        ]}
      />
    </>
  );
}

export default AppMenu;
