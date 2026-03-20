import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Setting = () => {
  return (
    <>
      <Title
        level={3}
        style={{
          marginBottom: 16,
          marginTop: 0,
        }}
      >
        ตั้งค่าระบบ
      </Title>
    </>
  );
};

export default Setting;
