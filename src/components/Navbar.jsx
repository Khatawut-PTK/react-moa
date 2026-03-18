// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Layout, Typography } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useAuthStore from "../stores/auth.store";
import formatDateTime from "../utils/dateTime";

const { Header } = Layout;
const { Title } = Typography;

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
        <div className="admin-navbar-section">
          <Title level={5} className="admin-navbar-title">
            {formatDateTime(currentTime)}
            <Avatar
              size="middle"
              style={{
                backgroundColor: "#fff",
                color: "#002140",
                fontSize: "15px",
              }}
              icon={<UserOutlined />}
            />
            {user?.userName || ""}
          </Title>
          <Title level={5} className="admin-navbar-title-user">
            {user?.position || ""}
          </Title>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
