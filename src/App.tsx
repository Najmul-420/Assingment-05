import { Suspense } from "react";


import Navber from "./components/Navber";
import Banner from "./components/Footer/Banner";


import Technologys from "./technology/technologys";


import type { Itechnologys } from "./type/technologys";

import { ToastContainer } from "react-toastify";  


const technologysFetch = async (): Promise<Itechnologys[]> => {
  const res = await fetch("/data.json");

  const data = await res.json();
  return data;

};

const technologysPromise = technologysFetch();

function App() {
 
 
  return (
    <> 
      <Navber />

      <Banner></Banner>
      
    

      <Suspense fallback={<div className="text-center font-bold text-2xl">Loading...</div>}>
        
        <Technologys technologysPromise={technologysPromise} />

      </Suspense>
   
    <ToastContainer />

    
   
    </>


  );

}

export default App;