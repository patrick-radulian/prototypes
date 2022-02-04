import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const chartData = [
    { label: 'Schemes', amount: 11 },
    { label: 'Concepts', amount: 215 },
    { label: 'Suggestions', amount: 74 },
    { label: 'Labels', amount: 186 }
];

interface LabelProps {
    /** The label text */
    text: string | number;
    /** The x coordinate of the label’s top left corner */
    x: number;
    /** The y coordinate of the label’s top left corner */
    y: number;
    /** The label's offset from the baseline in CSS units */
    dy: string;
    /** The label’s text alignment */
    textAnchor: string;
}

function ArgumentAxisLabel(props: LabelProps) {
    return(
        <text style={{fontSize: 10, fontWeight: 400, fill: "white"}} x={props.x} y={props.y} dy="1em" textAnchor={props.textAnchor}>{props.text}</text>
    )
}

function ValueAxisLabel(props: LabelProps) {
    return(
        <text style={{fontSize: 10, fontWeight: 400, fill: "white"}} x={props.x} y={props.y} dy="0.3em" textAnchor={props.textAnchor}>{props.text}</text>
    )
}

function CardStatistics() {
    return (
        <Box sx={{position: "relative", paddingBottom: "100%", height: 0}}>
            <Card sx={{color: "white", display: "grid", gridTemplateRows: "auto 1fr", position: "absolute", width: "100%", height: "100%", background: "linear-gradient(to top right, #002d69, #008cc0)"}}>
                <CardHeader sx={{color: "white", py: 1}} title="Statistics"/>

                <CardContent sx={{overflow: "auto"}}>
                    <Chart data={chartData} height={250}>
                        <ArgumentAxis labelComponent={ArgumentAxisLabel}/>
                        <ValueAxis labelComponent={ValueAxisLabel} position="left"/>
                        <BarSeries valueField="amount" argumentField="label" color="orange"/>
                        <Animation/>
                    </Chart>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardStatistics;