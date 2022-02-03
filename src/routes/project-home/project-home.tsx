import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CardMetadata from "components/cards/card-metadata";
import CardStatistics from "components/cards/card-statistics";
import CardVisualization from "components/cards/card-visualization";
import CardLanguages from "components/cards/card-languages";

function ProjectHome() {
    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 4, xl: 6 }} p={2}>
            <Grid item sm={1}>
                <CardMetadata/>
            </Grid>

            <Grid item sm={1}>
                <CardStatistics/>
            </Grid>

            <Grid item sm={1}>
                <CardVisualization/>
            </Grid>

            <Grid item sm={1}>
                <CardLanguages/>
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