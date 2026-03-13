import React from "react";
import { Card, Typography, Flex } from "antd";
import dataItems from "../mooc/dataItems";
import IconDashboard from "../components/IconDashboard";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <>
      <Title
        level={3}
        style={{
          marginBottom: 16,
          marginTop: 0,
        }}
      >
        ภาพรวมผลการดำเนินงาน
      </Title>
      <Flex
        style={{
          borderRadius: 20,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        {dataItems.map((item, index) => (
          <Card
            key={index}
            style={{
              backgroundColor: "#ffffffff",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)", // ปรับเงาให้ชัดขึ้น
              textAlign: "center",
              color: "#545252ff",
              borderRadius: 10,
              border: "none", // เอาขอบการ์ดออกเพื่อให้เงาดูเด่นขึ้น
            }}
          >
            <IconDashboard title={item.title} /> {/* แทรกไอคอนตรงนี้ */}
            <Title
              level={3}
              style={{
                margin: 0,
                fontSize: 13,
                color: "#545252ff",
              }}
            >
              {item.title}
            </Title>
            <Title
              level={4}
              style={{
                margin: 0,
                fontSize: 13,
                color: "#545252ff",
              }}
            >
              {item.value}
            </Title>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default Dashboard;
