
import '../App.css';
import React,{useState,useEffect} from 'react';

const Question3=(props)=> {

  // const [patients,setPatients]=useState([
  //   { firstName: "Agent", lastName: "Pena",diseases: ["COVID"]},
  //   { firstName: "Heisenberg", lastName: "Bear",diseases: ["Headache"]},
  //   { firstName: "Okarin", lastName: "May",diseases: ["Broken Wrist", "Mad-scientist"]},
  //   { firstName: "Hououin", lastName: "Kyoma",diseases: ["Delusional disorder", "Memory loss"]}
  // ]);

  


    const deleteData=(data)=>{
        props.setShowMsg(true);
        props.addNewPatientFromOtherHospital(data);
        const p = props.patients.filter(d => d!=data);

        props.setPatients(p);
    }

  return (
    <div className="App">
    
    <h1>Question 3</h1>
    <br/>

    <h2>List the patients from another hospital</h2>
      <br/>
    {props.patients.length>0?
      <table>      
          <tr>
                <th>LastName</th>
                <th>FirstName</th>
                <th>Action</th>
          </tr>


      {props.patients.map(data=>{
            return(
              <tr>
                <td>{data.lastName}</td>
                <td>{data.firstName}</td>
                <td 
                    style={{cursor: 'default',color: 'blue'}}
                    onClick={()=>deleteData(data)}
                    
                    >ADD</td>
              </tr>
            )
        })}
        </table>


        :<h4 style={{color: 'green'}}>NO DATA LEFT!!!</h4>}




      {props.showMsg?<div style={{color: 'red'}}>

        <h4>P.S: Data ADDED! Plaese go to Question-1 tab to check the update.</h4>
        <h4>Donn't reload the page. Othewise it will reset everything!</h4>
      </div>:null}

    </div>
  );
}

export default Question3;
