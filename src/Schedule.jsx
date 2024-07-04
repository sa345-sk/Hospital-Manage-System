
const Scedule = () => {
    return ( 
        <div className="schedule" >
          <div className="tasks bg-emerald-600 w-full h-hv">
             <div className="schdules">
              
             </div>
            <div className="task-input relative z-30 w-op m-ma shadow" style={{ top: '90%', borderRadius: '15px' }}>
              <input type="text" className="bg-lime-500 w-full h-9 focus:outline-none" style={{borderRadius: '15px'}}/>
              <input type="date" className="absolute top-0 left-96 focus:outline-none"/>
              <input type="time" className="focus:outline-none absolute top-0 left-0 bottom-0"/>
            </div>
          </div>
        </div> 
    );
}
 
export default Scedule;