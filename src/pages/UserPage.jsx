import { useEffect, useState } from "react";
import AppTable from "../components/Table";
import userApi from "../features/user/user.api";
import { Switch, Popconfirm, Space } from "antd";
import { KeyOutlined } from "@ant-design/icons";
import BaseButton from "../components/BaseButton";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await userApi.getAll();
      await new Promise((resolve) => setTimeout(resolve, 500)); // TODO: เอาออกเมื่อใช้งานจริง (ใส่ไว้เพื่อดู loading)
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
          width: 150,
          render: (_, record) => (
            <Popconfirm
              title="ยืนยันการเปลี่ยนสถานะ?"
              description="คุณต้องการเปลี่ยนสถานะผู้ใช้งานนี้ใช่หรือไม่?"
              onConfirm={() => handleStatusChange(record.id, !record.status)}
              okText="ยืนยัน"
              cancelText="ยกเลิก"
            >
              <Switch
                size="medium"
                loading={loadingId === record.id}
                disabled={loadingId === record.id}
                checked={record.status === 1}
                checkedChildren="ใช้งาน"
                unCheckedChildren="ระงับ"
              />
            </Popconfirm>
          ),
        },
        {
          title: "จัดการ",
          align: "center",
          width: 200,

          render: () => (
            <Space>
              <BaseButton
                variant="resetPassword"
                size="small"
                icon={<KeyOutlined />}
              >
                รีเซ็ตรหัสผ่าน
              </BaseButton>
            </Space>
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
