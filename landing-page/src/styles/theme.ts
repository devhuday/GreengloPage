interface theme {
  colors: {
    primary: string;
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const theme: theme = {
  colors: {
    primary: "rgb(73, 193, 85)",
    text: {
      primary: "rgb(106, 106, 106)",
      secondary: "rgb(120, 120, 120)",
    },
    background: {
      primary: "rgb(237, 237, 237)",
      secondary: "rgb(250, 250, 250)",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
};
