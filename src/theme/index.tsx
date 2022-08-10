import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading4: React.CSSProperties;
    heading6: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading4: React.CSSProperties;
    heading6: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline: React.CSSProperties;
  }

  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    loss: GraphColor;
    gain: GraphColor;
    textColor: Palette["primary"];
  }
  interface GraphColor {
    fillColor: string;
    borderColor: string;
  }
  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    loss?: GraphColor;
    gain?: GraphColor;
    greyColors?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
    fillColors?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    success600?: string;
    success500?: string;
    warning300?: string;
    primary500?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    grey500?: string;
    grey400?: string;
    grey200?: string;
    grey100?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
  }

  interface SimplePaletteColorOptions {
    success600?: string;
    success500?: string;
    warning300?: string;
    primary500?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    grey500?: string;
    grey400?: string;
    grey200?: string;
    grey100?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    heading4: true;
    heading6: true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    body2: true;
    caption1: true;
    caption2: true;
    overline: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Graphik",
    heading1: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "48px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    heading2: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    heading4: {
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: "54px",
      textTransform: "none",
      fontFamily: "Graphik",
    },
    heading6: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "34px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    subtitle1: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "28px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    subtitle2: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    body1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "22px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    caption1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
      fontFamily: "Graphik",
    },

    caption2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
      textTransform: "none",
      fontFamily: "Graphik",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "14px",
      textTransform: "none",
      fontFamily: "Graphik",
    },
  },

  palette: {
    primary: {
      main: "#0052FF",
      success600: "#20B03F",
      success500: "#20B03F",
      warning300: "#FFA74F",
      primary500: "#0052FF",
    },
    text: {
      primary: "#373C38",
      secondary: "#656E66",
      disabled: "#94A196",
    },
    textColor: {
      main: "#000000",
      highEmphasis: "#343446",
      mediumEmphasis: "#7D7D89",
    },
    greyColors: {
      main: "#D6D6D6",
      grey500: "#4B4B60",
      grey200: "#E9EBE9",
      grey100: "#E8E8F7",
    },
    loss: {
      fillColor: "#F3E6EB",
      borderColor: "#B71A33",
    },
    gain: {
      fillColor: "#E9F7EC",
      borderColor: "#46BF31",
    },
    structural: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
