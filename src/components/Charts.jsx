import React from "react";
import { Flex } from "antd";
import { Line } from "@ant-design/plots";
// import dataCharts from "../mooc/dataCharts";

const Graph = () => {
  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#ffffffff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
        borderRadius: 10,
        width: "100%",
        height: "auto",
        padding: "24px",
      }}
    >
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
