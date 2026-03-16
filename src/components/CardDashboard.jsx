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
      <Flex vertical>
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginBottom: 5,
          }}
        >
          <IconDashboard title={item.title} />
          <Title
            level={3}
            style={{
              fontSize: 13,
              color: "#9f9f9fff",
              fontWeight: "normal",
            }}
          >
            {item.title}
          </Title>
        </Flex>
        <Title
          level={4}
          style={{
            margin: 0,
            fontSize: 15,
            color: "#545252ff",
            textAlign: "center",
          }}
        >
          {item.value}
        </Title>
      </Flex>
    </Card>
  );
};

export default CardDashboard;
