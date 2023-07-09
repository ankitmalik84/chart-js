// eslint-disable-next-line no-unused-vars
import React from "react";
import BarChart from "./component/BarChart";
import Doughnut from "./component/Doughnut";
const App = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row">
            <div className=' mt-3 m-auto w-[55rem] border rounded  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <BarChart />
            </div>
            <div className='mt-3 m-auto flex flex-col w-[22em] h-[44em] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <Doughnut />;
            </div>

        </div>

    </>
  );
};

export default App;
