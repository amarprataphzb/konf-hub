
import './App.css';
import Header from './header/Header';
import MainPage from './mainpage/MainPage';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  
  const[fetchingData,setFetchingData]=useState()
  useEffect(()=>{
      getfetchData();
  },[])

  const getfetchData=async()=>{
      try {
          const result= await axios('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task')
        setFetchingData(result.data)
      } catch (error) {
          console.log(error)
      }
  }
  return (
    <div className="App">
     <Header data={fetchingData}/>
     <MainPage data={fetchingData}/>
    </div>

    
  );
}

export default App;
