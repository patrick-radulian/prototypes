import { Card, CardContent, Grid } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CardMetadata from "components/cards/card-metadata";
import CardStatistics from "components/cards/card-statistics";
import CardVisualization from "components/cards/card-visualization";
import CardLanguages from "components/cards/card-languages";
import CardProjectSettings from "components/cards/card-project-settings";
import { Box } from "@mui/system";

function ProjectHome() {
    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, xl: 4, xxl: 5, xxxl: 6 }} p={2}>
            <Grid item sm={1} width="100%">
                <CardMetadata/>
            </Grid>

            {/* <Grid item sm={1}>
                <CardStatistics/>
            </Grid> */}

            <Grid item sm={1} width="100%">
                <CardVisualization/>
            </Grid>

            <Grid item sm={1} width="100%">
                <CardLanguages/>
            </Grid>

            <Grid item sm={1} width="100%">
                <CardProjectSettings/>
            </Grid>

            <Grid item sm={1} width="100%">
                <Card sx={{paddingBottom: "100%", height: 0}}>
                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}}}>
                        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                            <AddRoundedIcon sx={{color: "#00ADEE", fontSize: 64}}/>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProjectHome;