import Navbar from './components/Navbar';
import Table from './components/Table';
const Patient = () => {
    const d = [
        { firstName: 'Kyll', secondName: 'Boi', date: '2/2/2018', diagnosis: 'Cramp', phone: '+234(0)8109695206', email: 'abus@outlook.com'},
        { firstName: 'Abdul', secondName: 'P.O', date: '12/6/2014', diagnosis: 'Sprain', phone: '+234(0)8100520396', email: 'abdul@gmail.com'},
    ]
    return ( 
        <div className="pateint_management w-full">
           <Navbar title="Patient Management"/>
           <div className="table-container overflow-x-auto">
             <Table data={d}/>
           </div>
           <div>
           </div>
        </div>
    );
}
 
export default Patient;