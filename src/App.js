import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './pages/About.jsx';
import Alert from './components/Alert';
// import { BrowserRouter, Router, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import PageContainer from './components/PageContainer';



function App() {

  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null)




  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
   setTimeout(()=>{
      setAlert(null)
   },1500)
  }

  const toggleButton=()=>{
    if(mode==='light'){
    setMode('dark');
  document.body.style.backgroundColor='#5151b9';
  showAlert("success", " Dark Mode Enabled")
}
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("success", " Light Mode Enabled")

    }
  }

  return (     
    <> 
   
     <Navbar title="TextZone"  mode={mode} toggle={toggleButton}/>
     <Alert alert={alert}/>
      <div className="container my-5">   
   <TextForm  showalert={showAlert} mode={mode}  heading="Enter Your Text Below" />
      </div>   
      </>
    );
}

export default App;
