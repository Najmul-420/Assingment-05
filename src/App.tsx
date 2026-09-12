import { Suspense } from "react";


import Navber from "./components/Navber";
import Banner from "./components/Footer/Banner";


import { ToastContainer } from "react-toastify";  


function App() {
 
 
  return (
    <> 
      <Navber />

      <Banner></Banner>
      
    

      <Suspense fallback={<div className="text-center font-bold text-2xl">Loading...</div>}>
        
        

      </Suspense>
   
    <ToastContainer />

    
   
    </>


  );

}

export default App;