import { FC } from "react";
import { Typography, Button, Card } from "antd";
import { globalStyles } from "@/styles/globalStyles";
import panelesBG from "@/assets/bg_panel1.jpg";
import { url } from "inspector";

const { Title } = Typography;

export const HeroSection: FC = () => {
  return (
    <Card
      style={{
        minHeight: "15rem",
        display: "flex",
        backgroundImage: `url(${panelesBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-2.2rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.25)", // Ajusta la opacidad para oscurecer
          borderRadius: "0.625rem",
        }}
      >
        <div>
          <Title
            level={2}
            style={{ ...globalStyles.titleStyle, color: "#fff" }}
          >
            Energía Solar para un Futuro Sostenible
          </Title>
        </div>
      </div>
    </Card>
  );
};
