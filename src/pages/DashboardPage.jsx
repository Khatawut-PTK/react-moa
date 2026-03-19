import React from "react";
import { Typography, Flex } from "antd";
import dataItems from "../mooc/dataItems";
import CardDashboard from "../components/CardDashboard";
import Charts from "../components/Charts";

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
          marginTop: 20,
          gap: 20,
          height: 420,
          alignItems: "stretch",
        }}
      >
        <Flex style={{ flex: 2, minWidth: 0 }}>
          <Charts />
        </Flex>
        {/* <Flex style={{ flex: 1, minWidth: 0 }}>
          <Kpi />
        </Flex> */}
      </Flex>
    </>
  );
};

export default Dashboard;
