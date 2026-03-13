import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Layout>
          <Sidebar />
          {/* ใส่ Outlet ตรงกลางสำหรับเป็นที่แสดงผลเนื้อหาของแต่ละหน้า (เช่น Dashboard) */}
          <Content style={{ margin: "10px 10px", padding: 5, minHeight: 100 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
