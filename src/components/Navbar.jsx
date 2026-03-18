import { useState, useEffect } from "react";
import { Layout, Typography, Flex, Space } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useAuthStore from "../stores/auth.store";
import formatDateTime from "../utils/dateTime";

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const user = useAuthStore((state) => state.user);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <Header className="admin-header-container">
        <Flex
          vertical
          align="flex-end"
          justify="center"
          style={{ width: "100%" }}
        >
          <Space align="center">
            <Text className="admin-navbar-title">
              {formatDateTime(currentTime)}
            </Text>

            <Avatar
              size="middle"
              style={{
                backgroundColor: "#fff",
                color: "#002140",
                fontSize: "15px",
              }}
              icon={<UserOutlined />}
            />

            <Flex vertical align="flex-start" style={{ lineHeight: 1.2 }}>
              <Text style={{ color: "#cecbcb", fontSize: 12 }}>
                {user?.fullName || ""}
              </Text>
              <Text
                style={{ color: "#9a9898", fontSize: 10, marginTop: "-4px" }}
              >
                {user?.position || ""}
              </Text>
            </Flex>
          </Space>
        </Flex>
      </Header>
    </>
  );
};

export default Navbar;
