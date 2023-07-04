import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const LIGHT_THEME = "light";
// Light mode theme
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: twColors.red[600],
    secondary: twColors.gray[50],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
};

// String that represents the name of the dark theme I am using
export const DARK_THEME = "dark";
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: twColors.gray[950],
    surface: twColors.gray[900],
    primary: twColors.red[500],
    secondary: twColors.gray[50],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
};
