import Header from "./header";  
import Footer from "./footer"; 
import { useState } from "react";
import SumCard  from "./sumCard";
function App(){
  const[a,setA]=useState(10);
  const[b,setB]=useState(20);
  const[res,setRes]=useState(null)
  

 

  return  <>< Header /> 
  <p>the calculate={res}</p>
 
  <SumCard a={a} b={b} setRes={setRes}/>

  <Footer />
  </>;
}
export default App;
