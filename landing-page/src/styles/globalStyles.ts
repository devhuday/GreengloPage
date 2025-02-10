import { CSSProperties } from "react";
import { theme } from "./theme";

interface GlobalStyles {
  titleStyle: CSSProperties;
  subtitleStyle: CSSProperties;
  headerStyle: CSSProperties;
  menuItemStyle: CSSProperties;
}

export const globalStyles: GlobalStyles = {
  titleStyle: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "900",
    margin: 0,
    color: theme.colors.text.primary,
    fontSize: "1.5rem",
    textShadow: "0px 0px 0.375rem rgb(199, 199, 199)",
  },
  subtitleStyle: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "400",
    margin: 0,
    color: theme.colors.primary,
    fontSize: "0.7rem",
    textShadow: "0px 0px 0.375rem rgb(216, 216, 216)",
  },
  headerStyle: {
    display: "flex",
    backgroundColor: theme.colors.background.secondary,
    color: "#fff",
  },
  menuItemStyle: {
    //color: "#000000",
  },
};
