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
      label: 'ER Visits(Per Week)',
      data: erVisits.map(data => data.totalVisits),
      backgroundColor: ['#6fcc0b', '#0bc5cc', '#e89d41', '#24c127']
    }]
  })
  const date = new Date()
  return (
    <div className="dahsboard w-full">
      <Navbar title="Reports & Analytics"/>
      <div className="analytics-info p-2 ">
        <div className="flex ">
          <div className="bg-white shadow w-72 h-20 m-1" style={{borderRadius: '5px'}}>
            <div className="h-12 w-75 m-ma flex justify-between pt-2">
              <span>Available Beds:</span>
              <strong>15</strong>
            </div>
            <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
              <span>Total Beds:</span>
              <span>600</span>
            </div>
          </div>
          <div className="bg-white shadow w-72 h-20 m-1" style={{borderRadius: '5px'}}>
            <div className="h-12 w-75 m-ma flex justify-between pt-2 text-red-700">
              <span>Failed Appointment:</span>
              <strong>15</strong>
            </div>
            <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
              <span>Total Appointment (per week):</span>
              <span>50</span>
            </div>
          </div>
          <div className="bg-white shadow w-72 h-20 m-1" style={{borderRadius: '5px'}}>
            <div className="h-12 w-75 m-ma flex justify-between pt-2 text-red-700">
              <span>Health Trends:</span>
              <strong>COVID-19</strong>
            </div>
            <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
              <span>Total Cases (per week):</span>
              <span>120</span>
            </div>
          </div>
          <div className="bg-white shadow w-72 h-20 m-1" style={{borderRadius: '5px'}}>
            <div className="h-12 w-75 m-ma flex justify-between pt-2 text-red-700">
              <span>Global Outbreak:</span>
              <strong>Cancer</strong>
            </div>
            <div className="flex justify-between m-ma w-75" style={{ borderTop: '1px solid #c3c3c3', color: '#777777'}}>
              <span>Total Cases (per week):</span>
              <span>50</span>
            </div>
        </div>
        </div>
      </div>
        <div className="dashboard-items p-3 flex flex-row flex-wrap">
              <div className="p-4 bg-white shadow " style={{ borderRadius: '5px', width: '50%',  }}><Barchart chartData={chartVals}/></div>
        <div className="p-4 bg-white shadow " style={{ borderRadius: '5px', width: '45%', marginLeft: '1%'}}>
            <p className="text-center">Month: {date.getMonth() == 7 ? 'AUGUST' : 'September'}</p>
          <Linechart chartdata={barchart}/>
        </div>
            <div className="p-4 bg-white shadow " style={{ borderRadius: '5px', width: '50%',  }}><Piechart chartdata={piecartvals}/></div>
            <div className="p-4 bg-white shadow ml-2" style={{ borderRadius: '5px', width: '48%' }}>
              <p className="font-bold">Pateint Feedbacks</p>
              <div className="patient-complaints bg-gray-100 p-2">
                <span className="font-serif"><strong>Pateint Complaints</strong></span>
                 <div style={{borderRadius: '5px', background: 'white', width: '95%', margin: '0 auto', marginBottom: '10px'}} className="shadow">
                   Not Enough Medical Staff.
                 </div>
                 <div style={{borderRadius: '5px', background: 'white', width: '95%', margin: '0 auto', marginBottom: '10px'}} className="shadow">
                   Not Enough Beds and Medical Equipment. 
                 </div>
              </div>
              <div className="patient-complaints bg-gray-100 p-2">
                <span className="font-serif"><strong>Patient Satisfaction (Based on Pateints Complaints)</strong></span>
                 <div>
              <span style={{ fontStyle: 'italic', color: '#4de382', display: 'flex', justifyContent: 'space-between'}}>Satisfaction Rates: <strong>78.9%</strong></span>
                 </div>
              </div>
              <div className="patient-complaints bg-gray-100 p-2">
                <span className="font-serif"><strong>Patient Satisfaction (Based on Pateints Complaints)</strong></span>
                 <div>
              <span style={{ fontStyle: 'italic', color: '#4de382', display: 'flex', justifyContent: 'space-between'}}>Satisfaction Rates: <strong>78.9%</strong></span>
                 </div>
              </div>
            </div>
              <div className="p-4 bg-white shadow " style={{ borderRadius: '5px', width: '90%', margin: '0 auto', marginTop: '10px'  }}>
                  <h3 className="font-bold">Emergency Department Statistics</h3>
                  <p>ER VISITS:</p>
                  <p className="text-center">Month: {date.getMonth() == 7 ? 'AUGUST' : 'September'}</p>
                  <Piechart chartdata={er}/>
                  <p className="font-serif font-semibold">ER TRENDS</p>
                  <div className="flex overflow-x-auto">
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