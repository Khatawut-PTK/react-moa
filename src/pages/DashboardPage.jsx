import { useEffect, useState } from "react";
import { Typography, Flex, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import dataItems from "../mooc/dataItems";
import CardDashboard from "../components/CardDashboard";
import useAuthStore from "../stores/auth.store";

const { Title } = Typography;

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
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

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
            <CardDashboard item={item} loading={loading} />
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
      ></Flex>
    </>
  );
};

export default Dashboard;
