import { Button, Space, Popconfirm, Switch } from "antd";
import { KeyOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  // {
  //   // title: "ลำดับ",
  //   // dataIndex: "id",
  //   // align: "center",
  //   // key: "id",
  //   // width: 70,
  // },
  {
    title: "Username",
    dataIndex: "username",
    align: "center",
    key: "username",
    width: 120,
  },
  {
    title: "ชื่อ-นามสกุล",
    key: "fullName",
    align: "center",
    width: 220,
    render: (_, record) => `${record.firstName} ${record.lastName}`,
  },
  {
    title: "ตำแหน่ง",
    dataIndex: "position",
    align: "center",
    key: "position",
    width: 160,
  },
  {
    title: "สถานะ",
    dataIndex: "status",
    align: "center",
    key: "status",
    width: 120,
    render: (status) => {
      const currentStatus = Number(status);
      const isActive = currentStatus === 1;

      return (
        <Switch
          size="large"
          checked={isActive}
          checkedChildren="ใช้งาน"
          unCheckedChildren="ระงับ"
          style={{
            backgroundColor: isActive ? "#158547ff" : "#ff4d4f",
            width: 80,
          }}
          onChange={() => {
            // const nextStatus = isActive ? 0 : 1;
            // onStatusChange(record.id, nextStatus);
          }}
        />
      );
    },
  },
  {
    title: "จัดการ",
    key: "action",
    width: 200,
    align: "center",
    render: () => (
      <Space size="small">
        <Button
          style={{ borderColor: "#807f7eff", color: "#807f7eff" }}
          size="small"
          icon={<KeyOutlined />}
          title="เปลี่ยนรหัสผ่าน"
          // onClick={() => onChangePassword(record)}
        />
        <Button
          style={{ borderColor: "#faad14", color: "#faad14" }}
          size="small"
          icon={<EditOutlined />}
          // onClick={() => onEdit(record)}
        >
          แก้ไข
        </Button>
        <Popconfirm
          title="ยืนยันการลบผู้ใช้งาน"
          description="คุณแน่ใจหรือไม่ที่จะลบข้อมูลนี้?"
          // onConfirm={() => onDelete(record.id)}
          okText="ใช่, ลบเลย"
          cancelText="ยกเลิก"
          okButtonProps={{ danger: true }}
        >
          <Button danger size="small" icon={<DeleteOutlined />}>
            ลบ
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];

export default columns;
