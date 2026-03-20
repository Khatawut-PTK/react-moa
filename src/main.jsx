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
        borderRadius: 10,
      },
      components: {
        Table: {
          headerBg: "#1c3d73ff",
          headerColor: "#ffffff",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>,
);
