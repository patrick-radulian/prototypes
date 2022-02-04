import { createTheme } from "@mui/material/styles";

export const AppTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "::-webkit-scrollbar": {
                    width: "4px",
                    height: "4px",
                    backgroundColor: "transparent"
                },
                "::-webkit-scrollbar-thumb": {
                    color: "#00ADEE"
                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1500,
            xxl: 1800,
            xxxl: 2100
        },
    },
});

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: true;
      sm: true;
      md: true;
      lg: true;
      xl: true;
      xxl: true;
      xxxl: true;
    }
}