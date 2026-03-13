import React from "react";
import { Card, Typography, Flex } from "antd";
import IconDashboard from "./IconDashboard";

const { Title } = Typography;

const CardDashboard = ({ item }) => {
  return (
    <Card
      style={{
        backgroundColor: "#ffffffff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
        textAlign: "center",
        color: "#545252ff",
        borderRadius: 10,
        border: "none",
      }}
    >
      <Flex
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <IconDashboard title={item.title} />
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
      </Flex>
    </Card>
  );
};

export default CardDashboard;
