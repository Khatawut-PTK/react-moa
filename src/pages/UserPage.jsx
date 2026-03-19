import AppTable from "../components/Table";
// import { useState, useEffect } from "react";
// import userApi from "../features/user/user.api";

const UserPage = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   userApi.getAll().then((res) => setUsers(res.data));
  // }, []);

  return (
    <AppTable
      title="ตารางรายชื่อผู้ใช้งานทั้งหมด"
      columns={[
        { title: "Username", dataIndex: "username" },
        { title: "ชื่อ-นามสกุล", dataIndex: "fullName" },
        { title: "ตำแหน่ง", dataIndex: "position" },
        { title: "สถานะ", dataIndex: "status" },
      ]}
      // dataSource={users}
      onSearch={(e) => console.log(e.target.value)}
      onAdd={() => console.log("add")}
    />
  );
};

export default UserPage;
