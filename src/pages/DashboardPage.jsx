import { useEffect, useState } from "react";
import { Typography, Card, Row, Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import dataItems from "../mooc/dataItems";
import CardDashboard from "../components/CardDashboard";
import useAuthStore from "../stores/auth.store";

const { Title, Text } = Typography;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/project", { replace: true });
    }
  }, [user, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //   return (
  //     <>
  //       <Title
  //         level={3}
  //         style={{
  //           marginBottom: 16,
  //           marginTop: 0,
  //         }}
  //       >
  //         ภาพรวมผลการดำเนินงาน
  //       </Title>
  //       <Row gutter={[20, 20]} style={{ borderRadius: 20 }}>
  //         {dataItems.map((item, index) => (
  //           <Col xs={24} sm={12} lg={6} key={index}>
  //             <CardDashboard item={item} loading={loading} />
  //           </Col>
  //         ))}
  //       </Row>
  //       <Flex
  //         style={{
  //           marginTop: 20,
  //           gap: 20,
  //           height: 420,
  //           alignItems: "stretch",
  //         }}
  //       ></Flex>
  //     </>
  //   );
  // };
  return (
    <Flex vertical>
      <Title level={4} style={{ marginBottom: 24 }}>
        ภาพรวมผลการดำเนินงาน
      </Title>

      <Row gutter={[16, 16]}>
        {dataItems.map((item, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <CardDashboard item={item} loading={loading} />
          </Col>
        ))}
      </Row>

      {/* พื้นที่สำหรับกราฟหรือตารางด้านล่าง */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card style={{ height: 400, borderRadius: 12 }}>
            {/* ใส่ Chart ตรงนี้ */}
            <Text type="secondary">รายละเอียดสถิติเพิ่มเติม...</Text>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

export default Dashboard;
