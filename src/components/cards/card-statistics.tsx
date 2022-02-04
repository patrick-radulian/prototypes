import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import CardTemplate from "./card-template";

const chartData = [
    { label: 'Schemes', amount: 11 },
    { label: 'Concepts', amount: 215 },
    { label: 'Suggestions', amount: 74 },
    { label: 'Labels', amount: 186 }
];

function CardStatistics() {
    return (
        <CardTemplate title="Statistics">
            <CardContent sx={{maxHeight: {xl: 400, sm: 300}, overflow: "auto"}}>
                <Chart data={chartData} height={250}>
                    <ArgumentAxis/>
                    <ValueAxis position="left"/>
                    <BarSeries valueField="amount" argumentField="label" color="#70be44"/>
                    <Animation/>
                </Chart>
            </CardContent>
        </CardTemplate>
    )
}

export default CardStatistics;