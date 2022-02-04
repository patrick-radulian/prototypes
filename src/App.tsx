import React from "react";
import { CssBaseline } from '@mui/material';
import Body from 'components/body/Body';
import Header from 'components/header/header';
import { ThemeProvider } from "@emotion/react";
import { AppTheme } from "Theme";


function App() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={AppTheme}>
                <CssBaseline>
                    <Header/>
                    <Body />
                </CssBaseline>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
