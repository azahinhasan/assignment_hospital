import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Qustion1 from './components/Question1';
import Qustion3 from './components/Question3';

const App=()=> {
  let a=1;
  const kidneysInStock = 5;
  const [patients,setPatients]=useState([
    { firstName: "Shakira", lastName: "Hossain",patientID: "007",diseases: ["COVID", "1-kidney", "3/4-dissolved-brain"],isAdmitted: true},
    { firstName: "Uzumaki", lastName: "Naruto",patientID: "008",diseases: ["Obesity"],isAdmitted: true},
    { firstName: "Sheikh", lastName: "Selim Ahmed",patientID: "006",diseases: ["Broken heart", "Depression"],isAdmitted: true},
    { firstName: "Rafsan", lastName: "Wayne",patientID: "009",diseases: ["COVID", "1-kidney", "Impaired vision"],isAdmitted: false}
  ]);

  const [pageDataOf, setPageDataOf]=useState('Qustion1');

  const [kidneyNeeded,SetkidneyNeeded]=useState('0');

  var patientsDataSorted = [...patients];
  patientsDataSorted.sort((a,b) => a.patientID - b.patientID);
  //sorting by patientID

  


  const admittePatient=(id)=>{
    const isAdmitted= true;
    let newData = patients.map(el => (el.patientID === id ? {...el, isAdmitted} : el));

    setPatients(newData);
  }

  const countKendyPatient=()=>{
    let count = 0;
    
    //  data.diseases.find(e=>e=='1-kidney')!=undefined?

    patients.map(data=>{
      if (data.diseases.find(e=>e=='1-kidney')!=undefined){
        count++;
      }
    })

    SetkidneyNeeded(count);
  }

  const uniqueID=()=>{
    const min = 100;
    const max = 999;
    const rand = min + Math.random() * (max - min);

    return Math.floor(rand);

  }

  const addNewPatientFromOtherHospitalHandler=(data)=>{

    // let d= [{patientID:50,isAdmitted: true}]
    // let newPa=[...d,data];


   setPatients([{firstName: data.firstName, lastName:data.lastName,patientID: uniqueID(),diseases: data.diseases,isAdmitted: true},...patients]);


    console.log(patients);
  }


  useEffect(()=>{
    countKendyPatient();
  },[]);

  useEffect(()=>{
    countKendyPatient();
  },[patients]);


  let pageData='';

  if(pageDataOf=='Qustion1'){
    pageData= <Qustion1 patientsDataSorted={patientsDataSorted} kidneyNeeded={kidneyNeeded} admittePatient={admittePatient}/>;
  }
  else if(pageDataOf=='Qustion2'){
    pageData=<Qustion3 patientsDataSorted={patientsDataSorted} addNewPatientFromOtherHospital={addNewPatientFromOtherHospitalHandler}/>;
  }
else{
  pageData=<Qustion3 patientsDataSorted={patientsDataSorted} addNewPatientFromOtherHospital={addNewPatientFromOtherHospitalHandler}/>;
}


  return (
    <div className="App">
      
      <button onClick={()=>setPageDataOf('Qustion1')}>Qustion1</button>
      <button onClick={()=>setPageDataOf('Qustion2')}>Qustion2</button>
      <button onClick={()=>setPageDataOf('Qustion3')}>Qustion3</button>

      {pageData}

     

      




    </div>
  );
}

export default App;
