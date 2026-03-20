// import { Table, Button, Space, Typography, Input, Flex } from "antd";
// import {
//   SearchOutlined,
//   PlusOutlined,
//   ImportOutlined,
//   ExportOutlined,
// } from "@ant-design/icons";

// const { Title } = Typography;

// const AppTable = ({
//   title = "ตารางข้อมูล",
//   columns = [],
//   dataSource = [],
//   searchPlaceholder = "ค้นหา",
//   addButtonLabel = "เพิ่มข้อมูล",
//   showAddButton = true,
//   showImportButton = true,
//   showExportButton = true,
//   onSearch,
//   onAdd,
//   onImport,
//   onExport,
// }) => {
//   return (
//     <>
//       {title && (
//         <Title
//           level={3}
//           style={{
//             marginBottom: 16,
//             marginTop: 0,
//           }}
//         >
//           {title}
//         </Title>
//       )}
//       <Flex justify="space-between" align="center" style={{ marginBottom: 14 }}>
//         <Input
//           placeholder={searchPlaceholder}
//           suffix={<SearchOutlined />}
//           onChange={onSearch}
//           style={{
//             boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
//             borderRadius: 10,
//             border: "none",
//             width: 300,
//             marginBottom: 0,
//           }}
//         />
//         <Space
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {showAddButton && (
//             <Button
//               style={{
//                 backgroundColor: "#158547ff",
//                 color: "#ffffff",
//                 margin: 5,
//               }}
//               size="small"
//               icon={<PlusOutlined />}
//               onClick={onAdd}
//             >
//               {addButtonLabel}
//             </Button>
//           )}
//           {showImportButton && (
//             <Button
//               style={{
//                 backgroundColor: "#5e84d7ff",
//                 color: "#ffffff",
//               }}
//               size="small"
//               icon={<ImportOutlined />}
//               onClick={onImport}
//             >
//               Import
//             </Button>
//           )}
//           {showExportButton && (
//             <Button
//               style={{
//                 backgroundColor: "#5e84d7ff",
//                 color: "#ffffff",
//               }}
//               size="small"
//               icon={<ExportOutlined />}
//               onClick={onExport}
//             >
//               Export
//             </Button>
//           )}
//         </Space>
//       </Flex>
//       <Table
//         columns={columns}
//         dataSource={dataSource.map((item, index) => ({
//           ...item,
//           key: item.id || item.key || index,
//         }))}
//         pagination={{ pageSize: 10 }}
//         // bordered
//         size="middle"
//         scroll={{ x: "max-content" }}
//         style={{
//           boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
//           borderRadius: 10,
//           border: "none",
//         }}
//       />
//     </>
//   );
// };

// export default AppTable;
// components/AppTable.jsx
import { Button, Space, Typography, Input, Flex, Switch } from "antd";
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
          <Button onClick={onAdd}>Add</Button>
          <Button onClick={onImport}>Import</Button>
          <Button onClick={onExport}>Export</Button>
        </Space>
      </Flex>

      <BaseTable columns={columns} dataSource={dataSource} />
    </>
  );
};

export default AppTable;
