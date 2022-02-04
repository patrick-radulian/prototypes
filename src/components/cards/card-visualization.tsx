import React from "react";
import { Box, Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import neo4j from "neo4j-driver";
import ForceGraph3D from "3d-force-graph";

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

const driver = neo4j.driver("bolt://demo.neo4jlabs.com", neo4j.auth.basic("gameofthrones", "gameofthrones"),{encrypted: true});
const session = driver.session({database:"gameofthrones"});

function CardVisualization() {
    const graphContainer = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        session.run('MATCH (n)-[:INTERACTS1]->(m) RETURN id(n) as source, id(m) as target LIMIT $limit', {limit: neo4j.int(5000)})
            .then(function (result) {
                const links = result.records.map(r => { return {source:r.get('source').toNumber(), target:r.get('target').toNumber()}});
                session.close();
                const ids = new Set<string | number>();
                links.forEach(l => {ids.add(l.source);ids.add(l.target);});
                const gData: GraphData = { nodes: Array.from(ids).map(id => {return {id}}), links: links}

                ForceGraph3D()((graphContainer.current as HTMLDivElement))
                    .width(400)
                    .height(400)
                    .backgroundColor("white")
                    .cameraPosition({x: 0, y: 0, z: -500})
                    .showNavInfo(false)
                    .graphData(gData)
                    .nodeColor(() => "#00ADEE")
                    .linkColor(() => "#999");
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
            <Card sx={{display: "grid", gridTemplateRows: "auto 1fr", position: "absolute", width: "100%", height: "100%"}}>
                <CardHeader sx={{background: "#00ADEE", py: 1, zIndex: 1}} title={<Typography color="white" fontSize={16}>Visualization</Typography>}/>

                <CardContent sx={{maxHeight: {xl: 400, sm: 200}, zIndex: 0}}>
                    <Container disableGutters sx={{overflow: "hidden"}}>
                        <div ref={graphContainer} style={{position: "absolute", width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
                    </Container>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardVisualization