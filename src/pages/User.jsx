import React from "react";
import AppTable from "../components/Table";
import dataUser from "../mooc/dataUser";
import columns from "../structs/userTableColumns";

const User = () => {
  return (
    <>
      <AppTable
        title="ตารางรายชื่อผู้ใช้งานทั้งหมด"
        columns={columns}
        dataSource={dataUser}
        addButtonLabel="เพิ่มผู้ใช้งาน"
      />
    </>
  );
};

export default User;