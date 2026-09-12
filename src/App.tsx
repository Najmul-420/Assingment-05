import { Suspense } from "react";


import Navber from "./components/Navber";


import { ToastContainer } from "react-toastify";  


function App() {
 
 
  return (
    <> 
      <Navber />
      
    

      <Suspense fallback={<div className="text-center font-bold text-2xl">Loading...</div>}>
        
        

      </Suspense>
   
    <ToastContainer />

    
   
    </>


  );

}

export default App;