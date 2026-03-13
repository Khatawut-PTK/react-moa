import React from 'react'

import { 
    Table, 
    Button, 
    Space, 
    Popconfirm, 
    Switch 
} from 'antd'
import { 
    KeyOutlined, 
    EditOutlined, 
    DeleteOutlined 
} from '@ant-design/icons'

const data = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        status: 1,
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'Software Engineer',
        status: 1,
    },
    {
        id: 3,
        firstName: 'Bob',
        lastName: 'Doe',
        position: 'Software Engineer',
        status: 1,
    },
]

const columns = [
        {
            title: 'ลำดับ',
            dataIndex: 'id',
            align: 'center',
            key: 'id',
            width: 70,
        },
        {
            title: 'ชื่อ',
            dataIndex: 'firstName',
            key: 'firstName',
            width: 200,
        },
        {
            title: 'นามสกุล',
            dataIndex: 'lastName',
            key: 'lastName',
            width: 200,
        },
        {
            title: 'ตำแหน่ง',
            dataIndex: 'position',
            key: 'position',
            width: 150,
        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            align: 'center',
            key: 'status',
            width: 110,
            render: (status, ) => {
                const currentStatus = Number(status);
                const isActive = currentStatus === 1;

                return (
                    <Switch
                        checked={isActive}
                        size='large'
                        checkedChildren="ใช้งาน"
                        unCheckedChildren="ระงับ"
                        style={{ backgroundColor: isActive ? '#52c41a' : '#ff4d4f' }}
                        onChange={() => {
                            // const nextStatus = isActive ? 0 : 1;
                            // onStatusChange(record.id, nextStatus);
                        }}
                    />
                );
            },
        },
        {
            title: 'จัดการ',
            key: 'action',
            width: 100,
            align: 'center',
            render: () => (
                <Space size="middle">
                    <Button
                        style={{ borderColor: '#807f7eff', color: '#807f7eff' }}
                        size='small'
                        icon={<KeyOutlined />}
                        // onClick={() => onChangePassword(record)}
                    >
                    </Button>

                    <Button
                        style={{ borderColor: '#faad14', color: '#faad14' }}
                        size='small'
                        icon={<EditOutlined />}
                        // onClick={() => onEdit(record)}
                    >
                        แก้ไข
                    </Button>

                    <Popconfirm
                        title="ยืนยันการลบผู้ใช้งาน"
                        description="คุณแน่ใจหรือไม่ที่จะลบข้อมูลนี้? การกระทำนี้ไม่สามารถย้อนกลับได้"
                        // onConfirm={() => onDelete(record.id)}
                        okText="ใช่, ลบเลย"
                        cancelText="ยกเลิก"
                        okButtonProps={{ danger: true }}
                    >
                        <Button
                            danger
                            size='small'
                            icon={<DeleteOutlined />}
                        >
                            ลบ
                        </Button>
                    </Popconfirm>
                </Space >
            ),
        },
    ];

const AppTable = () => {
  return (
    <Table
        // style={{ fontSize: '13px' }}
        columns={columns} 
        style={{ fontSize: '13px' }}
        dataSource={data} 
        pagination={5}
        bordered
    />
  )
}

export default AppTable