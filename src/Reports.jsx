/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Barchart from "./components/Barchart"
import {chartVals as userData, patient, revenue, erVisits, gender} from './Vals'
import Piechart from "./components/Piechart"
import Navbar from "./components/Navbar";
import Linechart from "./components/Linechart";
import { pateintsQuery, scheduleQuery, inventoryQuery } from './graphql/queries'
import {useQueries} from './hooks/useQueries'
const Reports = ({ sidebarControl }) => {
  const d = useQueries(pateintsQuery)
  const task = useQueries(scheduleQuery)
  const item = useQueries(inventoryQuery)
  let revenue1 = 64000000
  let sum = 0
  let sumtotal
  if (item.data) {
    sumtotal = item.data.inventories.forEach(amount => sum += parseInt(amount.amount))
  }
  const [chartVals, setChartVals] = useState({
    labels: userData.map(data => data.date),
    datasets: [{
      label: "Number of patient visited",
      data: userData.map(data => data.numofpatients),
    },],
  })  
  const [piecartvals, setPieCartVals] = useState({
    labels: ["Male", "Female"],
    datasets: [{
      label: gender.map(data => data.gender),
      data: gender.map(data => data.totalVisits),
    },],
  })
  const [barchart, setBarchart] = useState({
    labels: revenue.map(data => data.date),
    datasets: [{
      label: 'Total Profit Per Week (N)',
      data: revenue.map(data => data.revenue),
      backgroundColor: ['#ff7f26', '#c6c93c', '#80c93c', '#21ce7d']
    }],
  })
  const [er, setEr] = useState({
    labels: erVisits.map(data => data.date),
    datasets: [{
      label: 'ER Visits(Per Week)',
      data: erVisits.map(data => data.totalVisits),
      backgroundColor: ['#6fcc0b', '#0bc5cc', '#e89d41', '#24c127']
    }]
  })
  const date = new Date()

  if (d.data) {
    let k = d.data.pateints.map((m) => m.gender)
   console.log(k);
   
 }
  return (
    <div className="dahsboard w-full main-footer">
        <Navbar title='Reports & Analytics' control={sidebarControl}/>
        <div className="dashboard-items p-1 flex flex-row flex-wrap">
            <div className="p-1 bg-white shadow total-patient" style={{ borderRadius: '5px'}}><Barchart chartData={chartVals}/></div>
            <div className="p-1 bg-white shadow  revenue" style={{ borderRadius: '5px',}}>
              <Linechart chartdata={barchart}/>
            </div>
        <div className="p-1 bg-white shadow gender" style={{ borderRadius: '5px' }}
        >
          <p className="font-medium text-center">Most Visited Gender</p>
          <Piechart chartdata={piecartvals} />
        </div>
              <div className="p-1 bg-white shadow ml-1 PF" style={{ borderRadius: '5px'}}>
                <p className="font-bold text-center">Total Revenue</p>
                <div className="bg-gray-200 h-20 text-center font-medium text-green-500">
                 N{revenue1}
                 </div>
                <p className="font-bold text-center">Total Cost</p>
                <div className="bg-gray-200 h-20 text-center font-medium text-red-500">
                    N{sum}
                </div>
                <p className="font-bold text-center">Profit</p>
                <div className="bg-gray-200 h-20 text-center font-medium">
                  {item.data && `Revenue - Cost = ${revenue1 - sum}`}
                </div>
                <p className="font-bold text-center">Total Appointments</p>
                <div className="bg-gray-200 h-20 text-center font-medium pt-5">
                   {(task.data) ? (task.data.schedules
              .length > 0) ? `You currently have ${task.data.schedules.length} appointments` : ('You currently have 0 Appointments.') : ('Please check your internet connection!')}
                </div>
              </div>
              <div className="p-1 bg-white shadow ml-1 PF" style={{ borderRadius: '5px'}}>
                <p className="font-bold text-center">Total Pateints Visited (Based on the Pateints Database)</p>
                <div className="bg-gray-200 p-1">
                  <span className="font-medium">{(d.data) ? (d.data.pateints.length > 0) ? `${d.data.pateints.length} visited the hospital` : ('You currently have 0 Pateints.') : ('Please check your internet connection!')}</span>
                </div>
              </div>
        </div>
    </div>
  )
}
export default Reports; 