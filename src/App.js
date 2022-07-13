import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [alert, setAlert] = useState(null);
  const [col, setCol] = useState("primary");

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        ty : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggle = (cls) =>{
    setCol(cls);
    if(cls === 'primary'){
      document.body.style.backgroundColor = "#FFFFFF";
    }

    else if(cls === 'black'){
      document.body.style.backgroundColor = "#3A3B3C";
    }

    else if(cls === 'danger'){
      document.body.style.backgroundColor = "#F75D59";
    }

    else if(cls === 'success'){
      document.body.style.backgroundColor = "#4CC552";
    }

    else if(cls === 'warning'){
      document.body.style.backgroundColor = "#FFEF00";
    }
  }

  return(
  <>
  

<Navbar title="ModifyText"toggle = {toggle} col = {col}/>
<Alert alert = {alert}/>
<div className="container my-4">
  <TextForm showAlert= {showAlert} heading = "Enter your text here...." col = {col}/>
</div>
  </>
  );
}

export default App;
