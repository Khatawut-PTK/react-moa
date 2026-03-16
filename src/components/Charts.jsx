import React from "react";
import { Flex, Typography } from "antd";
import { Line } from "@ant-design/plots";
import dataCharts from "../mooc/dataCharts";

const { Title } = Typography;

const Graph = () => {
  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#ffffffff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
        borderRadius: 10,
        width: "100%",
        height: "350px",
        padding: "24px",
      }}
    >
      <Title
        level={5}
        style={{
          marginTop: 0,
        }}
      >
        ภาพรวมผลการดำเนินงาน
      </Title>
      <Line
        data={dataCharts}
        xField="year"
        yField="value"
        point={{ size: 5 }}
        smooth
      />
      <Flex style={{ flex: 1, minHeight: 0 }}>
        {/* <Line
          data={dataCharts}
          xField="year"
          yField="value"
          point={{ size: 5 }}
          smooth
        /> */}
      </Flex>
    </Flex>
  );
};

export default Graph;
