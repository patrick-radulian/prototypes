import React from "react";
import { Card, CardContent, CardHeader, Typography, List, ListItem, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system";

function CardProjectSettings() {
    return (
        <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
            <Card sx={{color: "white", display: "grid", gridTemplateRows: "auto 1fr", position: "absolute", width: "100%", height: "100%", background: "linear-gradient(to top right, #1a2d48, #556594)"}}>
                <CardHeader sx={{color: "white", py: 1}} title="Project Settings"/>

                <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                    <List sx={{width: '100%', maxWidth: 360, mr: -1}}>
                        <ListItem disablePadding secondaryAction={<IconButton sx={{color: "#FFFFFF70"}}><EditIcon/></IconButton>}>
                            <Box>
                                <Typography color="#FFFFFF70" variant="caption">Workflow</Typography>
                                <Typography gutterBottom>Enabled</Typography>
                            </Box>
                        </ListItem>

                        <ListItem disablePadding secondaryAction={<IconButton sx={{color: "#FFFFFF70"}}><EditIcon/></IconButton>}>
                            <Box>
                                <Typography color="#FFFFFF70" variant="caption">Quality Settings</Typography>
                                <Typography gutterBottom>Default</Typography>
                            </Box>
                        </ListItem>

                        <ListItem disablePadding secondaryAction={<IconButton sx={{color: "#FFFFFF70"}}><EditIcon/></IconButton>}>
                            <Box>
                                <Typography color="#FFFFFF70" variant="caption">User Groups</Typography>
                                <Typography gutterBottom>Public</Typography>
                            </Box>
                        </ListItem>

                        <ListItem disablePadding secondaryAction={<IconButton sx={{color: "#FFFFFF70"}}><EditIcon/></IconButton>}>
                            <Box>
                                <Typography color="#FFFFFF70" variant="caption">ID Generation</Typography>
                                <Typography gutterBottom>Increment</Typography>
                            </Box>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardProjectSettings;