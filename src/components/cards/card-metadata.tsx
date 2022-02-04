import { Box, Card, CardContent, CardHeader, Tooltip, Typography } from "@mui/material";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CardTemplate from "./card-template";

function CardMetadata() {
    return (
        <CardTemplate title="Metadata">
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
        </CardTemplate>
    )
}

export default CardMetadata;