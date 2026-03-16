import React from "react";
import { Pie } from "@ant-design/plots";
import { Flex, Card, Typography } from "antd";
import dataKpi from "../mooc/dataKpi.js";

const { Title } = Typography;

const Kpi = () => {
  const config = {
    data: dataKpi,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.5,
    autoFit: true,
    legend: {
      color: {
        title: false,
        position: "bottom",
        style: {
          fontSize: 16,
        },
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          textAlign: "center",
          x: "50%",
          y: "50%",
        },
      },
    ],
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffffff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
        color: "#545252ff",
        borderRadius: 10,
        border: "none",
        height: "100%",
      }}
    >
      <Title
        level={5}
        style={{
          marginTop: 0,
        }}
      >
        สถานะ KPI ทั้งหมด
      </Title>
      <Flex style={{ flex: 1, minHeight: 0, marginTop: 0, justifyContent: "center" }}>
        <Pie {...config} />
      </Flex>
    </Card>
  );
};

export default Kpi;
