import React from "react";
import {
  TeamOutlined,
  ProjectOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const IconDashboard = ({ title }) => {
  const iconStyle = { fontSize: 32, marginBottom: 12, display: "block" };

  if (title.includes("ผู้ใช้งาน"))
    return <TeamOutlined style={{ ...iconStyle, color: "#1677ff" }} />;
  if (title.includes("โครงการทั้งหมด"))
    return <ProjectOutlined style={{ ...iconStyle, color: "#722ed1" }} />;
  if (title.includes("กำลังดำเนินการ"))
    return <SyncOutlined spin style={{ ...iconStyle, color: "#fa8c16" }} />;
  if (title.includes("เสร็จสิ้น"))
    return <CheckCircleOutlined style={{ ...iconStyle, color: "#52c41a" }} />;

  return <ProjectOutlined style={iconStyle} />;
};

export default IconDashboard;
