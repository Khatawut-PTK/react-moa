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
        color: "#545252ff",
        borderRadius: 10,
        border: "none",
      }}
    >
      <Flex align="center" gap={16}>
        <Flex align="center" justify="center">
          <IconDashboard title={item.title} />
        </Flex>
        <Flex vertical>
          <Title
            level={3}
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 500,
              color: "#9f9f9fff",
            }}
          >
            {item.title}
          </Title>
          <Flex align="baseline" gap={8}>
            <Title
              level={4}
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 800,
                color: "#2b2a2aff",
              }}
            >
              {item.value}
            </Title>
            <Title
              style={{
                margin: 0,
                fontSize: 10,
                fontWeight: 500,
                color: "#9f9f9fff",
              }}
            >
              {item.description}
            </Title>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardDashboard;
