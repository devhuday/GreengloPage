import { FC } from "react";
import { Layout } from "antd";
import { Logo } from "./Logo";
import { globalStyles } from "@/styles/globalStyles";
import { Navigation } from "./Navegation";
//import styled from "styled-components";

const { Header: AntHeader } = Layout;

export const Header: FC = () => {
  return (
    <AntHeader style={globalStyles.headerStyle}>
      <div style={{ flex: 1 }}>
        <Logo />
      </div>
      <div style={{ flex: 1, alignContent: "flex-end" }}>
        <Navigation />
      </div>
    </AntHeader>
  );
};
