import { Button, Space, Typography, Input, Flex, Upload } from "antd";
import {
  PlusOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import BaseTable from "./BaseTable";
import BaseButton from "./BaseButton";

const { Title } = Typography;

const AppTable = ({
  title,
  columns,
  dataSource,
  onSearch,
  onAdd,
  onImport,
  onExport,
  addButtonLabel,
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
            <BaseButton variant="add" onClick={onAdd} icon={<PlusOutlined />}>
              {addButtonLabel || "เพิ่มข้อมูล"}
            </BaseButton>
          )}

          {onImport !== false && (
            <Upload
              accept=".xlsx, .xls, .csv"
              showUploadList={false}
              beforeUpload={onImport}
            >
              <BaseButton variant="import" icon={<ImportOutlined />}>
                {addButtonLabel || "นำเข้าข้อมูล"}
              </BaseButton>
            </Upload>
          )}
          {onExport !== false && (
            <BaseButton variant="export" icon={<ExportOutlined />}>
              {addButtonLabel || "ส่งออกข้อมูล"}
            </BaseButton>
          )}
        </Space>
      </Flex>

      <BaseTable columns={columns} dataSource={dataSource} {...props} />
    </>
  );
};

export default AppTable;
