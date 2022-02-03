import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const chartData = [
    { label: 'Schemes', amount: 11 },
    { label: 'Concepts', amount: 215 },
    { label: 'Suggestions', amount: 74 },
    { label: 'Labels', amount: 186 }
];

function CardStatistics() {
    return (
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
    )
}

export default CardStatistics;