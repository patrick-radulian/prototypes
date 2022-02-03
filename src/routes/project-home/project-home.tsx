import React from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Tooltip, Typography } from "@mui/material";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import neo4j from "neo4j-driver";
import ForceGraph3D from "3d-force-graph";

const driver = neo4j.driver("bolt://demo.neo4jlabs.com", neo4j.auth.basic("gameofthrones", "gameofthrones"),{encrypted: true});
const session = driver.session({database:"gameofthrones"});

const chartData = [
    { label: 'Schemes', amount: 11 },
    { label: 'Concepts', amount: 215 },
    { label: 'Suggestions', amount: 74 },
    { label: 'Labels', amount: 186 }
];

type NodeObject = object & {
    id?: string | number;
    x?: number;
    y?: number;
    z?: number;
    vx?: number;
    vy?: number;
    vz?: number;
    fx?: number;
    fy?: number;
    fz?: number;
};

type LinkObject = object & {
    source?: string | number | NodeObject;
    target?: string | number | NodeObject;
};

interface GraphData {
    nodes: NodeObject[];
    links: LinkObject[];
}

function ProjectHome() {
    const graphContainer = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        session.run('MATCH (n)-[:INTERACTS1]->(m) RETURN id(n) as source, id(m) as target LIMIT $limit', {limit: neo4j.int(5000)})
            .then(function (result) {
                const links = result.records.map(r => { return {source:r.get('source').toNumber(), target:r.get('target').toNumber()}});
                session.close();
                const ids = new Set<string | number>();
                links.forEach(l => {ids.add(l.source);ids.add(l.target);});
                const gData: GraphData = { nodes: Array.from(ids).map(id => {return {id}}), links: links}
                const Graph = ForceGraph3D()((graphContainer.current as HTMLDivElement))
                    .width(300)
                    .height(300)
                    .backgroundColor("white")
                    .cameraPosition({x: 0, y: 0, z: -400})
                    .showNavInfo(false)
                    .graphData(gData)
                    .nodeColor(() => "#00ADEE")
                    .linkColor(() => "#999");
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

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

                    <CardContent sx={{maxHeight: {xl: 400, sm: 200}}}>
                        <Container disableGutters sx={{overflow: "hidden"}}>
                            <div ref={graphContainer} style={{width: 300, height: 300}}/>
                        </Container>
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