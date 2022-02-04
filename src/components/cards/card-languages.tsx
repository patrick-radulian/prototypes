import React from "react";
import { Card, CardContent, CardHeader, Divider, TextField, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton, Box } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import CardTemplate from "./card-template";

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
        <CardTemplate title="Languages">
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
        </CardTemplate>
    )
}

export default CardLanguages;