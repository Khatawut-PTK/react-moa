import React from "react";
import { Typography, Flex, Row, Col } from "antd";
import dataItems from "../mooc/dataItems";
import CardDashboard from "../components/CardDashboard";

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
      <Row gutter={[20, 20]} style={{ borderRadius: 20 }}>
        {dataItems.map((item, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <CardDashboard item={item} />
          </Col>
        ))}
      </Row>
      <Flex
        style={{
          marginTop: 20,
          gap: 20,
          height: 420,
          alignItems: "stretch",
        }}
      >
        {/* <Flex style={{ flex: 2, minWidth: 0 }}>
          <Charts />
        </Flex> */}
        {/* <Flex style={{ flex: 1, minWidth: 0 }}>
          <Kpi />
        </Flex> */}
      </Flex>
    </>
  );
};

export default Dashboard;
