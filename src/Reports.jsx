/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Barchart from "./components/Barchart"
import {chartVals as userData} from './Vals'
import Piechart from "./components/Piechart"
import Navbar from "./components/Navbar";
const Reports = () => {
  const [chartVals, setChartVals] = useState({
    labels: userData.map(data => data.year),
    datasets: [{
      label: "Number of patient visited ",
      data: userData.map(data => data.numofpatients),
    },],
  })
  const [piecartvals, setPieCartVals] = useState({
    labels: userData.map(data => data.commoncases),
    datasets: [{
      label: "Age",
      data: userData.map(data => data.age),
    },],
  })
  return (
    <div className="dahsboard w-full">
      <Navbar title="Reports & Analytics"/>
        <div className="dashboard-items p-7 ">
          <div className="w-4/5 p-4 bg-white shadow m-ma" style={{ borderRadius: '5px' }}><Barchart chartData={chartVals}/></div>
        <div className="w-4/5 p-4 bg-white shadow m-ma" style={{ borderRadius: '5px' }}><Piechart chartdata={piecartvals}/></div>
        </div>
    </div>
  )
}
export default Reports; 