/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
const Piechart = ({chartdata}) => {
    return (<Pie data={chartdata}/> );
}
 
export default Piechart;