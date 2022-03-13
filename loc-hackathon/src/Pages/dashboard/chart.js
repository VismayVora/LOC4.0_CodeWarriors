import React from "react";
import Paper from '@material-ui/core/Paper';
import {
ArgumentAxis,
ValueAxis,
Chart,
BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


const Charts = () => {

// Sample data
const data = [
{ argument: 'Monday', value: 30 },
{ argument: 'Tuesday', value: 20 },
{ argument: 'Wednesday', value: 10 },
{ argument: 'Thursday', value: 50 },
{ argument: 'Friday', value: 60 },
];
return (
	<Paper>
		<h2>Daily Analysis</h2>
	<Chart
	data={data}
	>
	<ArgumentAxis />
	<ValueAxis />

	<BarSeries valueField="value" argumentField="argument" />
	</Chart>
</Paper>
);
}

export default Charts;
