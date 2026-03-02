import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { WebApp } from "./ui/layout/WebApp";
import "antd/dist/reset.css";
import "./styles/app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0d6efd",
          borderRadius: 12
        }
      }}
    >
      <WebApp />
    </ConfigProvider>
  </React.StrictMode>
);
