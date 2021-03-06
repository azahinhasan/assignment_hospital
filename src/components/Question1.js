
import '../App.css';
import React,{useState,useEffect} from 'react';

const Question1=(props)=> {


    const [count, setCount]=useState(0);

    const countNotAdmitted=()=>{
        let count = 0;
        props.patientsDataSorted.map(data=>{
          if (!data.isAdmitted){
            count++;
          }
        })
    
        setCount(count);
      }


      useEffect(()=>{
        countNotAdmitted();
      },[props.patientsDataSorted]);

return (
    <div className="App">
      

      <h1>Question 1</h1>

      <br/>

      <h2>List all patients in order of their patient IDs</h2>
      <br/>
      <table>
                
          <tr>
                <th>PatientID</th>
                <th>LastName</th>
                <th>FirstName</th>
                <th>Admitted Status</th>
          </tr>
      { props.patientsDataSorted.map(data=>{
            return(
              <tr key={data.patientID}>
                <td>{data.patientID}</td>
                <td>{data.lastName}</td>
                <td>{data.firstName}</td>
                <td>{data.isAdmitted?'Admitted':'Not Admitted'}</td>
              </tr>
            )
        })
      }
    </table>

      <br/>

      {/* ---------------------------------------------------------------------- */}


      <h2>List the patients who are not admitted yet</h2>
      <br/>
      {count>0?
        <table>      
            <tr >
                    <th>PatientID</th>
                    <th>LastName</th>
                    <th>FirstName</th>
                    <th>Action</th>
            </tr>
        { props.patientsDataSorted.map(data=>{
                return(
                !data.isAdmitted?
                  <tr key={data.patientID}>
                      <td>{data.patientID}</td>
                      <td>{data.lastName}</td>
                      <td>{data.firstName}</td>
                      <td style={{cursor: 'pointer',color: 'blue'}} onClick={()=>props.admittePatient(data.patientID)}>Admitte</td>
                  </tr>
                :null
                )
            })
        }
        </table>

    :<h4 style={{color: 'green'}}>NO DATA LEFT!!!</h4>}

 {/* ---------------------------------------------------------------------- */}

    <h2>List of the patients who require kidneys</h2>
    <br/>
    <h4>--We need more <span style={{color: 'blue',fontWeight:'bold'}}> {props.kidneysInStock-props.kidneyNeeded}</span> patients to finish the kidney stock--</h4>
    <br/>
    <table>      
          <tr>
              <th>PatientID</th>
              <th>LastName</th>
              <th>FirstName</th>
          </tr>
      { props.patientsDataSorted.map(data=>{
            return(
   
              data.diseases.find(e=>e=='1-kidney')!=undefined?
              
              // data.diseases=='1-kidney'?
                  <tr key={data.patientID}>
                    <td>{data.patientID}</td>
                    <td>{data.lastName}</td>
                    <td>{data.firstName}</td>
                  </tr>
                :null
            )
        })
      }
    </table>



    {/* ---------------------------------------------------------------------- */}

    <br/>

    <h2>List of the patients who have COVID</h2>
    <br/>

    <table>      
          <tr>
                <th>LastName</th>
                <th>FirstName</th>
                <th>Total Deseases</th>
          </tr>
      { props.patientsDataSorted.map(data=>{
            return(

              data.diseases.find(e=>e=='COVID')!=undefined?
                  <tr key={data.patientID}>
                    <td>{data.lastName}</td>
                    <td>{data.firstName}</td>
                    <td>{data.diseases.length} {data.diseases.length>1?'diseases':'disease'}</td>
                  </tr>
                :null
            )
        })
      }
    </table>
    <p style={{color: 'blue'}}>[P.S. Diseases number less then 2 will show Disease]</p>

    </div>
  );
}

export default Question1;
