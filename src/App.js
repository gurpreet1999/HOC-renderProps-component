
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Input from './Input';
//when we want to apply same logic to multiple component



function App() {


  const showVALUE=(value)=>{
    return <>
    the value is {value}
    </>
  }
  return (
   <>
   
   <Comp1 hello={"hello"}  />   
   <Comp2/>


   <Input 
   renderTextBelow={
    showVALUE
   }
  
   />
   </>
   
  );
}

export default App;
