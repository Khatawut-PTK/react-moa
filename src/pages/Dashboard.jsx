import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const Dashboard = () => {
  const items = [
    { title: "จำนวนผู้ใช้งาน", value: 10 },
    { title: "จำนวนอุปกรณ์ทั้งหมด", value: 10 },
    { title: "จำนวนอุปกรณ์ที่ยืม", value: 10 },
  ];

  return (
    <div>
      <Card>
        <div style={{ marginBottom: 0 }}>
          <Title level={5}>ภาพรวมผลการดำเนินงาน</Title>
        </div>

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
              <Title style={{ fontSize: 24, margin: 0 }}>{item.value}</Title>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
