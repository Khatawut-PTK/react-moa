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
  addButtonLabel = "เพิ่มผู้ใช้งาน",
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
          {onAdd !== false && (
            <Button
              onClick={typeof onAdd === "function" ? onAdd : undefined}
              icon={<PlusOutlined />}
            >
              {addButtonLabel}
            </Button>
          )}
          {onImport !== false && (
            <Button
              onClick={typeof onImport === "function" ? onImport : undefined}
              icon={<ImportOutlined />}
            >
              นำเข้าข้อมูล
            </Button>
          )}
          {onExport !== false && (
            <Button
              onClick={typeof onExport === "function" ? onExport : undefined}
              icon={<ExportOutlined />}
            >
              ส่งออกข้อมูล
            </Button>
          )}
        </Space>
      </Flex>

      <BaseTable columns={columns} dataSource={dataSource} {...props} />
    </>
  );
};

export default AppTable;
