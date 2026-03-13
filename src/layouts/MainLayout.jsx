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
          backgroundImage: ` linear-gradient(
        rgba(220, 220, 220, 0.35),
        rgba(255, 255, 255, 0.55),
      ),
        url("/bg-default.png");
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Layout>
          <Sidebar />
          {/* ใส่ Outlet ตรงกลางสำหรับเป็นที่แสดงผลเนื้อหาของแต่ละหน้า (เช่น Dashboard) */}
          <Content style={{ margin: "20px 20px", padding: 10, minHeight: 100 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
