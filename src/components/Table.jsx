import React from "react";

import { Table, Button, Space, Typography, Input, Flex } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import dataUser from "../mooc/dataUser";
import columns from "../structs/userTableColumns";

const { Title } = Typography;

const AppTable = () => {
  return (
    <>
      <Title
        level={4}
        style={{
          marginBottom: 16,
          marginTop: 0,
        }}
      >
        ตารางรายชื่อผู้ใช้งานทั้งหมด
      </Title>
      <Flex justify="space-between" align="center" style={{ marginBottom: 14 }}>
        <Input
          placeholder="ค้นหา"
          suffix={<SearchOutlined />}
          style={{
            width: 300,
            marginBottom: 0,
          }}
        />
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              backgroundColor: "#158547ff",
              color: "#ffffff",
              margin: 5,
            }}
            size="small"
            icon={<PlusOutlined />}
          >
            เพิ่มผู้ใช้งาน
          </Button>
          <Button
            style={{
              backgroundColor: "#5e84d7ff",
              color: "#ffffff",
            }}
            size="small"
            icon={<ImportOutlined />}
          >
            Import
          </Button>
          <Button
            style={{
              backgroundColor: "#5e84d7ff",
              color: "#ffffff",
            }}
            size="small"
            icon={<ExportOutlined />}
          >
            Export
          </Button>
        </Space>
      </Flex>
      <Table
        columns={columns}
        dataSource={dataUser}
        pagination={{ pageSize: 10 }}
        bordered
        rowKey="id"
        size="middle"
        scroll={{ x: "max-content" }}
      />
    </>
  );
};

export default AppTable;
