import { FC } from "react";
import Icono from "@/assets/Logo.png";

export const Logo: FC = () => {
  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <img
        src={Icono}
        alt="Logo"
        style={{ height: "4.5rem", marginLeft: "-3rem" }}
      />
    </div>
  );
};
