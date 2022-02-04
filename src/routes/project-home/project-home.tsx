import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CardMetadata from "components/cards/card-metadata";
import CardStatistics from "components/cards/card-statistics";
import CardVisualization from "components/cards/card-visualization";
import CardLanguages from "components/cards/card-languages";
import CardProjectSettings from "components/cards/card-project-settings";
import { Box } from "@mui/system";
import ProjectImage from "../../images/Project.png";

function ProjectHome() {
    return (
        <Box>
            <Box p={10} sx={{position: "relative", background: "linear-gradient(45deg, #e7e7e8, #f6f6f6)", overflow: "hidden", height: 400}}>
                <Typography variant="h1" color="#00ADEE" zIndex={1} position="relative">Astronomy</Typography>
                <Typography fontSize={12} color="GrayText" zIndex={1} position="relative">8e1ea335-e591-47a3-b765-1668a7d15d49</Typography>
                <img style={{position: "absolute", top: 0, right: 0, height: 400, zIndex: 0}} src={ProjectImage} alt="Project"/>
            </Box>

            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, xl: 4, xxl: 5, xxxl: 6 }} p={2}>
                <Grid item sm={1} width="100%">
                    <CardMetadata/>
                </Grid>

                <Grid item sm={1}>
                    <CardStatistics/>
                </Grid>

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
                        <Card sx={{display: "grid", gridTemplateRows: "1fr", position: "absolute", width: "100%", height: "100%", background: "linear-gradient(to top right, #aabbd0, #e6f6ff)"}}>
                            <CardContent>
                                <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                                    <IconButton><AddRoundedIcon sx={{color: "#00ADEE", fontSize: 128}}/></IconButton>
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