import React from "react";
import { Card, CardContent, CardHeader, Typography, List, ListItem, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system";
import CardTemplate from "./card-template";

function CardProjectSettings() {
    return (
        <CardTemplate title="Project Settings">
            <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', mr: -1}}>
                    <ListItem disablePadding secondaryAction={<IconButton><EditIcon/></IconButton>}>
                        <Box>
                            <Typography color="GrayText" variant="caption">Workflow</Typography>
                            <Typography gutterBottom>Enabled</Typography>
                        </Box>
                    </ListItem>

                    <ListItem disablePadding secondaryAction={<IconButton><EditIcon/></IconButton>}>
                        <Box>
                            <Typography color="GrayText" variant="caption">Quality Settings</Typography>
                            <Typography gutterBottom>Default</Typography>
                        </Box>
                    </ListItem>

                    <ListItem disablePadding secondaryAction={<IconButton><EditIcon/></IconButton>}>
                        <Box>
                            <Typography color="GrayText" variant="caption">User Groups</Typography>
                            <Typography gutterBottom>Public</Typography>
                        </Box>
                    </ListItem>

                    <ListItem disablePadding secondaryAction={<IconButton><EditIcon/></IconButton>}>
                        <Box>
                            <Typography color="GrayText" variant="caption">ID Generation</Typography>
                            <Typography gutterBottom>Increment</Typography>
                        </Box>
                    </ListItem>
                </List>
            </CardContent>
        </CardTemplate>
    )
}

export default CardProjectSettings;