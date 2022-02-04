import { Card, CardContent, Grid, Typography } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CardMetadata from "components/cards/card-metadata";
import CardStatistics from "components/cards/card-statistics";
import CardVisualization from "components/cards/card-visualization";
import CardLanguages from "components/cards/card-languages";
import CardProjectSettings from "components/cards/card-project-settings";
import { Box } from "@mui/system";

function ProjectHome() {
    return (
        <Box>
            <Box p={2}>
                <Typography variant="h4" color="#00ADEE">Astronomy</Typography>
                <Typography variant="caption" color="GrayText">8e1ea335-e591-47a3-b765-1668a7d15d49</Typography>
            </Box>

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
                    <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
                        <Card sx={{display: "grid", gridTemplateRows: "1fr", position: "absolute", width: "100%", height: "100%"}}>
                            <CardContent>
                                <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                                    <AddRoundedIcon sx={{color: "#00ADEE", fontSize: 128}}/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectHome;