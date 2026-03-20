import { Button, Space, Typography, Input, Flex } from "antd";
import {
  PlusOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import BaseTable from "./BaseTable";

const { Title } = Typography;

const AppTable = ({
  title,
  columns,
  dataSource,
  onSearch,
  onAdd,
  onImport,
  onExport,
  ...props
}) => {
  return (
    <>
      <Title level={3}>{title}</Title>
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        gap={10}
        style={{ marginBottom: 16 }}
      >
        <Input
          onChange={onSearch}
          style={{
            width: 300,
            border: "none",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
          }}
          placeholder="ค้นหา"
        />
        <Space>
          <Button onClick={onAdd} icon={<PlusOutlined />}>
            เพิ่มผู้ใช้งาน
          </Button>
          <Button onClick={onImport} icon={<ImportOutlined />}>
            นำเข้าข้อมูล
          </Button>
          <Button onClick={onExport} icon={<ExportOutlined />}>
            ส่งออกข้อมูล
          </Button>
        </Space>
      </Flex>

      <BaseTable columns={columns} dataSource={dataSource} {...props} />
    </>
  );
};

export default AppTable;
