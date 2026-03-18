import { Table } from "antd";

const BaseTable = ({ columns, dataSource, ...props }) => {
  return (
    <Table
      columns={columns}
      dataSource={(dataSource || []).map((item, index) => ({
        ...item,
        key: item?.id || item?.key || index,
      }))}
      {...props}
    />
  );
};


export default BaseTable;
