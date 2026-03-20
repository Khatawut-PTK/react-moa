import React from "react";
import AppTable from "../components/Table";

const Project = () => {
  // const projectData = [
  //   {
  //     id: 1,
  //     name: "โครงการ A",
  //     status: "กำลังดำเนินการ",
  //     owner: "สมชาย",
  //   },
  //   {
  //     id: 2,
  //     name: "โครงการ B",
  //     status: "เสร็จสิ้น",
  //     owner: "สมหญิง",
  //   },
  //   {
  //     id: 3,
  //     name: "โครงการ C",
  //     status: "กำลังดำเนินการ",
  //     owner: "สมชาย",
  //   },
  //   {
  //     id: 4,
  //     name: "โครงการ D",
  //     status: "เลยกำหนด",
  //     owner: "สมหญิง",
  //   },
  // ];

  return (
    <AppTable
      title="โครงการที่กำลังดำเนินการ"
      columns={[
        { title: "ชื่อโครงการ", dataIndex: "name" },
        { title: "สถานะ", dataIndex: "status" },
        { title: "ผู้รับผิดชอบ", dataIndex: "owner" },
      ]}
      dataSource={[]}
      addButtonLabel="เพิ่มโครงการ"
      onAdd={() => {}}
      onImport={false}
      onExport={false}
    />
  );
};

export default Project;
