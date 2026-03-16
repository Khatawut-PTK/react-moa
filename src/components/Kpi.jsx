import React from "react";
import { Pie } from "@ant-design/plots";
import { Flex, Card, Typography } from "antd";

const { Title } = Typography;

const Kpi = () => {
  // const data = [
  //   { month: "โครงการทั้งหมด", sales: 100 },
  //   { month: "โครงการที่แล้วเสร็จ", sales: 120 },
  //   { month: "โครงการที่กำลังดำเนินการ", sales: 90 },
  // ];

  // const totalSales = data.reduce((sum, item) => sum + item.sales, 0);

  // const config = {
  //   data,
  //   angleField: "sales",
  //   colorField: "month",
  //   innerRadius: 0.6,
  //   label: {
  //     text: "sales",
  //     style: {
  //       fontWeight: "bold",
  //     },
  //   },
  //   legend: {
  //     color: {
  //       title: false,
  //       position: "right",
  //       rowPadding: 5,
  //     },
  //   },
  //   annotations: [
  //     {
  //       type: "text",
  //       style: {
  //         // text: `KPI\n${totalSales}`,
  //         x: "50%",
  //         y: "50%",
  //         textAlign: "center",
  //         fontSize: 32,
  //         fontWeight: "bold",
  //       },
  //     },
  //   ],
  // };

  return (
    <Card
      style={{
        backgroundColor: "#ffffffff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
        // textAlign: "center",
        color: "#545252ff",
        borderRadius: 10,
        border: "none",
        width: "100%",
        height: "100%",
        padding: "5px",
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
      <Flex style={{ flex: 1, minHeight: 0 }}>
        <Pie />
      </Flex>
    </Card>
  );
};

export default Kpi;
