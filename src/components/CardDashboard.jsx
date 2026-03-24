import React from "react";
import { Card, Typography, Flex, Skeleton } from "antd";
import IconDashboard from "./IconDashboard";

const { Text } = Typography;

const CardDashboard = ({ item, loading }) => {
  return (
    <Card
      hoverable
      loading={!loading}
      styles={{
        body: { padding: "20px 24px" },
      }}
      style={{
        borderRadius: 12,
        border: "none",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        height: "100%",
      }}
    >
      <Flex align="center" gap={20}>
        <Flex
          align="center"
          justify="center"
          style={{
            width: 48,
            height: 48,
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
          }}
        >
          <IconDashboard title={item.title} style={{ fontSize: 24 }} />
        </Flex>

        <Flex vertical flex={1}>
          <Text
            style={{
              color: "#8c8c8c",
              fontSize: 13,
              marginBottom: 4,
            }}
          >
            {item.title}
          </Text>

          <Flex align="baseline" gap={8}>
            <Text
              strong
              style={{
                fontSize: 24,
                color: "#262626",
              }}
            >
              {item.value}
            </Text>
            {item.description && (
              <Text type="secondary" style={{ fontSize: 12 }}>
                {item.description}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardDashboard;
