import { 
    Layout, 
    Row, 
    Col, 
    Menu, 
    Button, 
    Typography 
} from 'antd';

const { Header } = Layout;
const { Title, Text } = Typography;

function Navbar() {
  return (
    <>
        <Header
        >
           <Row 
           justify='space-between' 
           align='middle'
           style={{ padding: 0 }}
           >
            <Col>
                <Title level={5}>MOA</Title>
            </Col>
            <Col>
                <Button type='text'>Logout</Button>
            </Col>
           </Row>
        </Header>
    </>
  )
}

export default Navbar