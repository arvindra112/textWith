//import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Main from './componets/Main';
import React,{useState} from 'react';
import Alert from './componets/Alert';




function App() {
  const[mode,setMode]=useState('light');
  const[color,setColor] = useState('dark');
  const[alert,setAlert] = useState(null);
  const [look, setlook] = useState("Light");

  const showAlert = (msg,type) => {
    setAlert({msg,type});
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }


  const togglemode=()=>{
    setlook('Dark');
   
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = "purple"; 
      showAlert("Light Mode is enabled","Success!");
  }
  // const togglemode1=()=>{
  
  //     setMode('dark');
  //     setColor('white');
  //     document.body.style.backgroundColor = "green";
  //     document.title="Text manipulator-green Mode is enabled";
  //     showAlert("brown Mode is enabled","Success!");
    
  // }

  // const togglemode2=()=>{
  //    setMode('dark');
  //     setColor('black');
  //     document.body.style.backgroundColor = "pink" ;
  //     document.title="Text manipulator-Pink Mode is enabled";
  //     showAlert("Light Mode is enabled","Success!");
  //   }
  

  // const togglemode3=()=>{
  
  //     setMode('dark');
  //     setColor('white');
  //     document.body.style.backgroundColor = "brown" ;
  //     document.title="Text manipulator-Brown Mode is enabled";
  //     showAlert("Dark Mode is enabled","Success!");
  //   }


  return (
   <>

{/*<Router>*/}
<Navbar look={look} mode={mode} color={color} togglemode={togglemode}  />
   {/*<div style={{position:'absolute',zIndex:'2',width:'100%'}}>*/}<Alert Alert={alert} />
   <Main  showAlert={showAlert} color={color} />
      {/*<div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About showAlert={showAlert} color={color} />} >

            </Route>

            <Route exact path="/home" element={<Main showAlert={showAlert} color={color} />}>

            </Route>
          </Routes>


      </div>


      </Router>*/}
      
 </>
  );
}

export default App;
