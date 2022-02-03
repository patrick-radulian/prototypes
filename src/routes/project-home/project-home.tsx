import { Card, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CardMetadata from "components/cards/card-metadata";
import CardStatistics from "components/cards/card-statistics";
import CardVisualization from "components/cards/card-visualization";
import CardLanguages from "components/cards/card-languages";
import CardProjectSettings from "components/cards/card-project-settings";
import { Box } from "@mui/system";

function ProjectHome() {
    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 4, xl: 6 }} p={2}>
            <Grid item sm={1}>
                <CardMetadata/>
            </Grid>

            <Grid item sm={1}>
                <CardVisualization/>
            </Grid>

            <Grid item sm={1}>
                <CardLanguages/>
            </Grid>

            <Grid item sm={1}>
                <CardProjectSettings/>
            </Grid>

            <Grid item sm={1}>
                <Card>
                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}}}>
                        <Box display="flex" justifyContent="center">
                            <AddRoundedIcon sx={{color: "#00ADEE", fontSize: 64}}/>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProjectHome;