import React from "react";
import { Typography, Flex } from "antd";
import dataItems from "../mooc/dataItems";
import CardDashboard from "../components/CardDashboard";
import Charts from "../components/Charts";
import Kpi from "../components/Kpi";

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
          <CardDashboard key={index} item={item} />
        ))}
      </Flex>
      <Flex
        style={{
          borderRadius: 20,
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          marginTop: 20,
        }}
      >
        <Flex
          style={{
            borderRadius: 20,
            display: "flex",
            marginTop: 20,
          }}
        >
          <Charts />
          <Kpi />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
