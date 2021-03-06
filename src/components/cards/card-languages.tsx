import React from "react";
import { Card, CardContent, CardHeader, Divider, TextField, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton, Box } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

function CardLanguages() {
    const [checked, setChecked] = React.useState([""]);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
            <Card sx={{display: "grid", gridTemplateRows: "auto 1fr", position: "absolute", width: "100%", height: "100%"}}>
                <CardHeader sx={{background: "#00ADEE", py: 1}} title={<Typography color="white" fontSize={16}>Languages</Typography>}/>

                <CardContent sx={{overflow: "auto"}}>
                    <TextField size="small" label="Default" value="English (US)" fullWidth/>

                    <Divider light sx={{mt: 2}}/>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {["German (DE)", "Spanish (ES)", "French (FR)", "Durch (NL)", "Russian (RU)", "Chinese (ZH)", "Greek (EL)"].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                            <ListItem key={value} disablePadding>
                                <ListItemButton sx={{px: 1}} role={undefined} onClick={handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox sx={{p: 0}} edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple inputProps={{'aria-labelledby': labelId}}/>
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={value} />
                                </ListItemButton>
                            </ListItem>
                            );
                        })}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardLanguages;