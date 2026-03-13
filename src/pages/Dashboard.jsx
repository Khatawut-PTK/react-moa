import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const Dashboard = () => {
  const items = [
    { title: "ผู้ใช้งาน", value: 10 },
    { title: "อุปกรณ์ทั้งหมด", value: 10 },
    { title: "อุปกรณ์ที่ยืม", value: 10 },
  ];

  return (
    <>
      <Title
        level={3}
        style={{
          marginBottom: 8,
          marginTop: 5,
        }}
      >
        ภาพรวมผลการดำเนินงาน
      </Title>
      <Card>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              //   loading={loading}
              style={{ backgroundColor: "#f0f2f5", textAlign: "center" }}
            >
              <Title level={5}>{item.title}</Title>
              <Title style={{ fontSize: 13, margin: 0 }}>{item.value}</Title>
            </Card>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
