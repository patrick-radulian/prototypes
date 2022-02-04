import { Card, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface ICardTemplate {
    title: string
    children: React.ReactNode
}

const CardTemplate : React.FC<ICardTemplate> = ({title, children}) => (
    <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
            <Card sx={{display: "grid", gridTemplateRows: "auto 1fr", position: "absolute", width: "100%", height: "100%"}}>
                <CardHeader 
                    sx={{background: "#00ADEE", py: 1, zIndex: 1}} 
                    title={<Typography color="white" fontSize={14} fontWeight={600}>{title}</Typography>}
                />
                {children}
            </Card>
        </Box>
)

export default CardTemplate