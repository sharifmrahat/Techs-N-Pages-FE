import React from "react";
import { RiseLoader, ClimbingBoxLoader

} from "react-spinners";


export default function Spinner({type}) {

  return (
    <>
    <div className="py-8 w-fit mx-auto bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200">
      {
       type === 'climb' ?
       <ClimbingBoxLoader
        color="#4f46e5" 
        loading={true} 
        size={25} /> :
<RiseLoader
        color="#4f46e5" 
        loading={true} 
        size={16} />
      }
    </div>
  </>
  );
}