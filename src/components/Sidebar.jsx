import React from "react";
import { Layout } from "antd";
import AppMenu from "./Menu";

const { Sider } = Layout;

function Sidebar() {
  return (
    <>
      <Sider
        collapsible
        width={160}
        style={{
          background: "#fff",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <AppMenu />
      </Sider>
    </>
  );
}

export default Sidebar;
