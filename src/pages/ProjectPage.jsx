import React from "react";
import BaseTable from "../components/BaseTable";
import { Tag } from "antd";

const Project = () => {
  const projectColumns = [
    {
      title: "ชื่อโครงการ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        return (
          <Tag
            color={
              text === "เสร็จสิ้น"
                ? "green"
                : text === "กำลังดำเนินการ"
                  ? "blue"
                  : "red"
            }
          >
            {text}
          </Tag>
        );
      },
    },
    {
      title: "ผู้รับผิดชอบ",
      dataIndex: "owner",
      key: "owner",
    },
  ];

  const projectData = [
    {
      id: 1,
      name: "โครงการ A",
      status: "กำลังดำเนินการ",
      owner: "สมชาย",
    },
    {
      id: 2,
      name: "โครงการ B",
      status: "เสร็จสิ้น",
      owner: "สมหญิง",
    },
    {
      id: 3,
      name: "โครงการ C",
      status: "กำลังดำเนินการ",
      owner: "สมชาย",
    },
    {
      id: 4,
      name: "โครงการ D",
      status: "เลยกำหนด",
      owner: "สมหญิง",
    },
  ];

  return (
    <>
      {/* <AppTable
        title="โครงการที่ดำเนินการทั้งหมด"
        columns={projectColumns}
        dataSource={projectData}
        addButtonLabel="เพิ่มโครงการ"
        showAddButton={false}
        showImportButton={false}
        showExportButton={false}
        onAdd={() => console.log("Add")}
      /> */}
      <BaseTable columns={projectColumns} dataSource={projectData} />
    </>
  );
};

export default Project;
