import AppTable from "../components/Table";

export default function UserPage() {
  return (
    <AppTable
      title="ตารางรายชื่อผู้ใช้งานทั้งหมด"
      columns={[
        { title: "Username", dataIndex: "username" },
        { title: "ชื่อ-นามสกุล", dataIndex: "fullName" },
        { title: "ตำแหน่ง", dataIndex: "position" },
        { title: "สถานะ", dataIndex: "status" },
      ]}
      dataSource={[
        {
          username: "user1",
          fullName: "John Doe",
          position: "Manager",
          status: "Active",
        },
        {
          username: "user2",
          fullName: "Jane Smith",
          position: "Developer",
          status: "Inactive",
        },
      ]}
      onSearch={(e) => console.log(e.target.value)}
      onAdd={() => console.log("add")}
    />
  );
}
