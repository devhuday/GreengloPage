import { FC } from "react";
import { Typography, Button } from "antd";
import { globalStyles } from "@/styles/globalStyles";
import panelesBG from "@/assets/bg_panel1.jpg";

const { Title } = Typography;

export const HeroSection: FC = () => {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "white" }}>
      <img
        src={panelesBG}
        alt="Paneles Solares"
        style={{ width: "100%", maxHeight: "37.5rem", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "1.25rem",
          borderRadius: "0.625rem",
        }}
      >
        <Title level={2} style={{ ...globalStyles.titleStyle, color: "#fff" }}>
          Energía Solar para un Futuro Sostenible
        </Title>
        <Button
          type="primary"
          size="large"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: "600",
          }}
        >
          Solicita tu cotización
        </Button>
      </div>
    </div>
  );
};
