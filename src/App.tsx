import React from "react";
import { CssBaseline, Divider, Typography } from '@mui/material';
import Body from 'components/body/Body';
import { ThemeProvider } from "@emotion/react";
import { AppTheme } from "Theme";
import Navbar from "components/navbar/Navbar";
import { Box } from "@mui/system";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


function App() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={AppTheme}>
                <CssBaseline>
                    <Navbar side="left"/>
                    <Body />

                    <Box width={45} sx={{background: "linear-gradient(to top, #0a1023, #252525)"}}>
                        <Box width={45} height={45} display="flex" justifyContent="center" alignItems="center">
                            <AccountCircleRoundedIcon sx={{color: "white"}}/>
                        </Box>
                        <Divider sx={{background: "#454545"}}/>
                        <Box width={45} height={45} display="flex" justifyContent="center" alignItems="center">
                            <Box width={24} height={24} display="flex" alignItems="center" justifyContent="center" border="1px solid #454545" borderRadius={1}>
                                <Typography fontSize={14} color="white">Sy</Typography>
                            </Box>
                        </Box>
                        <Box width={45} height={45} display="flex" justifyContent="center" alignItems="center">
                            <Box width={24} height={24} display="flex" alignItems="center" justifyContent="center" border="1px solid #454545" borderRadius={1}>
                                <Typography fontSize={14} color="white">Ld</Typography>
                            </Box>
                        </Box>
                        <Box width={45} height={45} display="flex" justifyContent="center" alignItems="center">
                            <Box width={24} height={24} display="flex" alignItems="center" justifyContent="center" border="1px solid #454545" borderRadius={1}>
                                <Typography fontSize={14} color="white">Vi</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{background: "#454545"}}/>
                        <Box width={45} height={45} display="flex" justifyContent="center" alignItems="center">
                            <Box width={24} height={24} display="flex" alignItems="center" justifyContent="center" border="1px solid #454545" borderRadius={1}>
                                <Typography fontSize={14} color="white">Sv</Typography>
                            </Box>
                        </Box>
                    </Box>
                </CssBaseline>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
