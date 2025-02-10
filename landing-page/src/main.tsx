import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/MainPage.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#52c41a", // Verde (puedes cambiarlo a otro tono)
        },
      }}
    ></ConfigProvider>
    <App />
  </React.StrictMode>
);
