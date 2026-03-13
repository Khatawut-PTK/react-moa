import { ConfigProvider } from "antd";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorBgLayout: "transparent",
        fontFamily: "Prompt, sans-serif",
        fontSize: 13,
      },
      components: {
        Table: {
          headerBg: "#5e84d7ff",
          headerColor: "#ffffff",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>,
);
