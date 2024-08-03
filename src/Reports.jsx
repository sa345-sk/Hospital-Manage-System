/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Barchart from "./components/Barchart"
import {chartVals as userData, patient, revenue, erVisits, gender} from './Vals'
import Piechart from "./components/Piechart"
import Navbar from "./components/Navbar";
import Linechart from "./components/Linechart";
const Reports = () => {
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
      label: gender.map(data => data.gender ),
      data: gender.map(data => data.totalVisits),
    },],
  })
  const [barchart, setBarchart] = useState({
    labels: revenue.map(data => data.date),
    datasets: [{
      label: 'Total Revenue Per Week (N)',
      data: revenue.map(data => data.revenue),
      backgroundColor: ['#ff7f26', '#c6c93c', '#80c93c', '#21ce7d']
    }],
  })
  const [er, setEr] = useState({
    labels: erVisits.map(data => data.date),
    datasets: [{
      label: '(Per Week)',
      data: erVisits.map(data => data.totalVisits),
      backgroundColor: ['#6fcc0b', '#0bc5cc', '#e89d41', '#24c127']
    }]
  })
  const date = new Date()
  return (
    <div className="dahsboard w-full">
      <Navbar title="Reports & Analytics"/>
      <div className="analytics-info flex p-2 ">
        <div className="bg-white shadow w-72 h-20 m-2" style={{borderRadius: '5px'}}>
          <div className="h-12 w-75 m-ma flex justify-between pt-2">
             <span>Available Beds:</span>
             <strong>15</strong>
          </div>
          <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
             <span>Total Beds:</span>
             <span>600</span>
          </div>
        </div>
        <div className="bg-white shadow w-72 h-20 m-2" style={{borderRadius: '5px'}}>
          <div className="h-12 w-75 m-ma flex justify-between pt-2 text-red-700">
             <span>Failed Appointment:</span>
             <strong>15</strong>
          </div>
          <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
             <span>Total Appointment (per week):</span>
             <span>50</span>
          </div>
        </div>
        <div className="bg-white shadow w-72 h-20 m-2" style={{borderRadius: '5px'}}>
          <div className="h-12 w-75 m-ma flex justify-between pt-2 text-red-700">
             <span>Health Trends:</span>
             <strong>COVID-19</strong>
          </div>
          <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
             <span>Total Cases (per week):</span>
             <span>120</span>
          </div>
        </div>
        <div className="bg-white shadow w-72 h-20 m-2" style={{borderRadius: '5px'}}>
          <div className="h-12 w-75 m-ma flex justify-between pt-2 text-red-700">
             <span>Global Trends:</span>
             <strong>Cancer</strong>
          </div>
          <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
             <span>Total Cases (per week):</span>
             <span>50</span>
          </div>
        </div>
      </div>
        <div className="dashboard-items p-7 ">
              <div className="w-4/5 p-4 bg-white shadow m-ma" style={{ borderRadius: '5px' }}><Barchart chartData={chartVals}/></div>
            <div className="w-4/5 p-4 bg-white shadow m-ma" style={{ borderRadius: '5px' }}><Piechart chartdata={piecartvals}/></div>
        <div className="w-4/5 p-4 bg-white shadow m-ma" style={{ borderRadius: '5px' }}>
            <p className="text-center">Month: {date.getMonth() == 7 ? 'AUGUST' : 'September'}</p>
          <Linechart chartdata={barchart}/>
        </div>
        <div className="w-4/5 p-4 bg-white shadow m-ma" style={{ borderRadius: '5px' }}>
            <h3 className="font-bold">Emergency Department Statistics</h3>
            <p>ER VISITS:</p>
            <p className="text-center">Month: {date.getMonth() == 7 ? 'AUGUST' : 'September'}</p>
            <Piechart chartdata={er}/>
            <p className="font-serif font-semibold">ER TRENDS</p>
            <div className="flex overflow-x-scroll">
              <div className="bg-gray-100 w-40 ml-1 mr-1 mb-4">
                <div className="font-medium w-75 m-ma text-center">Amputation</div>
                <div style={{borderTop: '1px solid white'}} className="w-75 m-ma text-center">
                  <strong>Total Cases: 15</strong>
                </div>
              </div>
              <div className="bg-gray-100 w-40 ml-1 mr-1 mb-4">
                <div className="font-medium w-75 m-ma text-center">Pregnancy</div>
                <div style={{borderTop: '1px solid white'}} className="w-75 m-ma text-center">
                  <strong>Total Cases: 30</strong>
                </div>
              </div>
              <div className="bg-gray-100 w-40 ml-1 mr-1 mb-4">
                <div className="font-medium w-75 m-ma text-center">Kidney</div>
                <div style={{borderTop: '1px solid white'}} className="w-75 m-ma text-center">
                  <strong>Total Cases: 9</strong>
                </div>
              </div>
              <div className="bg-gray-100 w-40 ml-1 mr-1 mb-4">
                <div className="font-medium w-75 m-ma text-center">Brain Surgery</div>
                <div style={{borderTop: '1px solid white'}} className="w-75 m-ma text-center">
                  <strong>Total Cases: 5</strong>
                </div>
              </div>
              <div className="bg-gray-100 w-40 ml-1 mr-1 mb-4">
                <div className="font-medium w-75 m-ma text-center">Diabetis</div>
                <div style={{borderTop: '1px solid white'}} className="w-75 m-ma text-center">
                  <strong>Total Cases: 5</strong>
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Reports; 