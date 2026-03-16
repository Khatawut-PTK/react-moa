import React from "react";
import { Flex } from "antd";
import { Line } from "@ant-design/plots";
import data from "../mooc/dataCharts";

const Graph = () => {
  return (
    <>
      <Flex
        style={{
          backgroundColor: "#ffffffff",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
          textAlign: "center",
          color: "#545252ff",
          borderRadius: 10,
          display: "flex",
          // gridTemplateColumns: "repeat(2, 1fr)",
          border: "none",
          gap: 20,
        }}
      >
        <Line
          data={data}
          xField="year"
          yField="value"
          point={{ size: 5 }}
          smooth
        />
      </Flex>
    </>
  );
};

export default Graph;
