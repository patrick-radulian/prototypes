import { Box, Card, CardContent, CardHeader, Tooltip, Typography } from "@mui/material";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

function CardMetadata() {
    return (
        <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
            <Card sx={{display: "grid", gridTemplateRows: "auto 1fr", position: "absolute", width: "100%", height: "100%"}}>
                <CardHeader sx={{background: "#00ADEE", py: 1}} title={<Typography color="white" fontSize={16}>Metadata</Typography>}/>

                <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                    <Typography color="GrayText" variant="caption">Created</Typography>
                    <Typography gutterBottom>September 7<sup>th</sup> 2021 at 12:45pm</Typography>
                    <Typography color="GrayText" variant="caption">Repository</Typography>
                    <Typography gutterBottom>Local repository</Typography>
                    <Typography color="GrayText" variant="caption">Repository type</Typography>
                    <Typography gutterBottom>Local RDF4J Memory</Typography>
                    <Typography color="GrayText" variant="caption">Project version</Typography>
                    <Typography gutterBottom>8.2</Typography>
                    <Typography color="GrayText" variant="caption">URI generation method</Typography>
                    <Typography display="flex" alignItems="center">Increment <Tooltip title="https://preview.poolparty.biz/Astronomy/&lt;Increment&gt;"><InfoRoundedIcon sx={{mx: 1}} color="info" fontSize="small"/></Tooltip></Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardMetadata;