import React from "react";
import { RiseLoader, ClipLoader

} from "react-spinners";


export default function Spinner({type}) {

  return (
    <>
    {
      type === 'clip' ? 
      <>
      <div className="w-fit mx-auto">
      <ClipLoader
      color="#4f46e5" 
      loading={true} 
      size={30} />
      </div>
       </> : <>
      <div className="flex justify-center items-center mx-auto bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 pb-96 pt-36">
<RiseLoader
        color="#4f46e5" 
        loading={true} 
        size={16} />
    </div>
      </>
    }
  </>
  );
}