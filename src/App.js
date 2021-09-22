import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Qustion1 from './components/Question1';
import Qustion2 from './components/Question2';
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

  const [patientsFromOhterHos,setPatientsFromOhterHos]=useState([
    { firstName: "Agent", lastName: "Pena",diseases: ["COVID"]},
    { firstName: "Heisenberg", lastName: "Bear",diseases: ["Headache"]},
    { firstName: "Okarin", lastName: "May",diseases: ["Broken Wrist", "Mad-scientist"]},
    { firstName: "Hououin", lastName: "Kyoma",diseases: ["Delusional disorder", "Memory loss"]}
  ]);

  const [doctors ,setDoctors ]=useState([
    {doctorID: "6215",firstName: "Jalaluddin",lastName: "Mahbub",teamID: "008",doctorType: "Consultant",email: "jabub@hospital.com",active: true,doctorRequests: []},
    {doctorID: "6216",firstName: "Amin",lastName: "Morshed",teamID: "008",doctorType: "Assistant Consultant",email: "amhed@hospital.com",active: true},
    {doctorID: "6214",firstName: "Mahady",lastName: "Selim",teamID: "005",doctorType: "Consultant",email: "malim@hospital.com",active: true,doctorRequests: ["6213",]},
    {doctorID: "6213",firstName: "Jamela",lastName: "Begum",teamID: "005",doctorType: "RMO",email: "jagum@hospital.com",active: false}]);

  const [teams ,setTeams ]=useState([
    {teamName: "nephrology",teamID: "008",consultantInCharge: "6215",teamMates: ["6216",]},
    {teamName: "cardiology",teamID: "005",consultantInCharge: "6214",teamMates: []}
  ]);


  const [pageDataOf, setPageDataOf]=useState('Qustion1');
  const [kidneyNeeded,SetkidneyNeeded]=useState('0');
  const [showMsgQus3,setShowMsgQus3]=useState(false);




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
    pageData= <Qustion1 patientsDataSorted={patientsDataSorted} kidneyNeeded={kidneyNeeded} admittePatient={admittePatient} kidneysInStock={kidneysInStock}/>;
  }
  else if(pageDataOf=='Qustion2'){
    pageData=<Qustion2 doctors={doctors} setDoctors={setDoctors} 
              teams={teams} setTeams={setTeams}/>;
  }
  else{
    pageData=<Qustion3 
              patients={patientsFromOhterHos} 
              setPatients={setPatientsFromOhterHos} 
              patientsDataSorted={patientsDataSorted} 
              addNewPatientFromOtherHospital={addNewPatientFromOtherHospitalHandler}
              showMsg={showMsgQus3} setShowMsg={setShowMsgQus3}
              />;
  }


  return (
    <div className="App">
      
      <button onClick={()=>setPageDataOf('Qustion1')}>Qustion1</button>
      <button onClick={()=>setPageDataOf('Qustion3')}>Qustion3</button>
      <button onClick={()=>setPageDataOf('Qustion2')}>Qustion2</button>

      {pageData}






    </div>
  );
}

export default App;
