import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
)
