import { useEffect, useState } from "react";
import AppTable from "../components/Table";
import userApi from "../features/user/user.api";
import { Switch, Modal } from "antd";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await userApi.getAll();
      setData(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleStatusChange = async (id, checked) => {
    const newStatus = checked ? 1 : 0;

    try {
      setLoadingId(id);
      await userApi.updateStatus(id, newStatus);

      setData((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status: newStatus } : u)),
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingId(null);
    }
  };

  const confirmStatusChange = (id, checked) => {
    Modal.confirm({
      title: "ยืนยันการเปลี่ยนสถานะ?",
      onOk: () => handleStatusChange(id, checked),
    });
  };

  return (
    <AppTable
      title="ตารางรายชื่อผู้ใช้งานทั้งหมด"
      columns={[
        { title: "Username", dataIndex: "userName" },
        { title: "ชื่อ-นามสกุล", dataIndex: "fullName" },
        { title: "ตำแหน่ง", dataIndex: "position" },
        {
          title: "สถานะ",
          align: "center",
          render: (_, record) => (
            <Switch
              size="medium"
              loading={loadingId === record.id}
              disabled={loadingId === record.id}
              checked={record.status === 1}
              checkedChildren="ใช้งาน"
              unCheckedChildren="ระงับ"
              onChange={(checked) => confirmStatusChange(record.id, checked)}
            />
          ),
        },
      ]}
      dataSource={data}
      loading={loading}
      onSearch={(e) => console.log(e.target.value)}
      onAdd={() => console.log("add")}
    />
  );
};

export default UserPage;
