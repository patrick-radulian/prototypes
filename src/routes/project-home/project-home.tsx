import { Button, Card, CardActions, CardContent, CardHeader, Grid, Tooltip, Typography } from "@mui/material";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const chartData = [
    { label: 'Schemes', amount: 11 },
    { label: 'Concepts', amount: 215 },
    { label: 'Suggestions', amount: 74 },
    { label: 'Labels', amount: 186 }
];

function ProjectHome() {
    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 4, xl: 6 }} p={2}>
            <Grid item sm={1}>
                <Card>
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
            </Grid>

            <Grid item sm={1}>
                <Card>
                    <CardHeader sx={{background: "#00ADEE", py: 1}} title={<Typography color="white" fontSize={16}>Statistics</Typography>}/>

                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                        <Chart data={chartData} height={250}>
                            <ArgumentAxis/>
                            <ValueAxis position="left"/>
                            <BarSeries valueField="amount" argumentField="label"/>
                            <Animation/>
                        </Chart>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={1}>
                <Card>
                    <CardHeader sx={{background: "#00ADEE", py: 1}} title={<Typography color="white" fontSize={16}>Visualization</Typography>}/>

                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                        Visualization
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={1}>
                <Card>
                    <CardHeader sx={{background: "#00ADEE", py: 1}} title={<Typography color="white" fontSize={16}>Languages</Typography>}/>

                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                        Languages
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={1}>
                <Card>
                    <CardHeader sx={{background: "#00ADEE", py: 1}} title={<Typography color="white" fontSize={16}>Project Settings</Typography>}/>

                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}, overflow: "auto"}}>
                        Project Settings
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={1}>
                <Card>
                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}}}>
                        <AddRoundedIcon/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProjectHome;