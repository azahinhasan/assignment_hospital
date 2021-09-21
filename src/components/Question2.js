
import '../App.css';
import React,{useState,useEffect} from 'react';

const Question2=(props)=> {

  const [doctors ,setDoctors ]=useState([
    {
      doctorID: "6215",
      firstName: "Jalaluddin",
      lastName: "Mahbub",
      teamID: "008",
      doctorType: "Consultant",
      email: "jabub@hospital.com",
      active: true,
      doctorRequests: []
  },
  {
      doctorID: "6216",
      firstName: "Amin",
      lastName: "Morshed",
      teamID: "008",
      doctorType: "Assistant Consultant",
      email: "amhed@hospital.com",
      active: true
  },
  {
      doctorID: "6214",
      firstName: "Mahady",
      lastName: "Selim",
      teamID: "005",
      doctorType: "Consultant",
      email: "malim@hospital.com",
      active: true,
      doctorRequests: ["6213", ]
  },
  {
      doctorID: "6213",
      firstName: "Jamela",
      lastName: "Begum",
      teamID: "005",
      doctorType: "RMO",
      email: "jagum@hospital.com",
      active: false
  }]);

  const [teams ,setTeams ]=useState([
    {
      teamName: "nephrology",
      teamID: "008",
      consultantInCharge: "6215",
      teamMates: ["6216",]
  },
  {
      teamName: "cardiology",
      teamID: "005",
      consultantInCharge: "6214",
      teamMates: []
  }])



  var doctorsDataSorted = [...doctors];
  doctorsDataSorted.sort((a,b) => a.doctorID - b.doctorID);
  //sorting by doctor ID


  const [addMsg,setAddMsg]=useState('');
  const [fastName,setFastName]=useState('');
  const [lastName,setLastname]=useState('');
  const [docReqs,setDocReqs]=useState([]);

  const uniqueID=()=>{

    const min = 6217;
    const max = 6300;
    const rand = min + Math.random() * (max - min);

    return Math.floor(rand);

  }

  const addNewDoc=()=>{


    if(localStorage.getItem('doctorType')=='Consultant'){
      if(fastName =='' || lastName ==''){
        setAddMsg('Text box is Empty!! Please fill up')
      }
      else{
        const newID= uniqueID();
        const Email = fastName.slice(0, 2)+lastName.slice(0, 3)+'@hospital.com';

        let newDoc={doctorID: newID,firstName: fastName,lastName: lastName,teamID: "none",doctorType: "RMO",email: Email,active: false};
        let concat= [newDoc,...doctors]; //new doc added

        //setDoctors(concat);
        setAddMsg('New doctor Added!');

        let updateUser=[];

        doctors.map(d=>{
          {d.doctorID==localStorage.getItem('doctorID') ?
          
          updateUser=d : console.log(d.doctorRequests)}
        })


        updateUser.doctorRequests.push(newID);
        
        const filterDoc = concat.filter(d => d.doctorID!=localStorage.getItem('doctorID'));
        //concat is-- with New doc.

        setDoctors([updateUser,...filterDoc])
        //console.log(updateUser);
      }
    }
    else{
      setAddMsg('Failed!!...Only Consultant Type Doctor can add new Doctor!');
    }

  }


  const doctorRequestsList=()=>{
    doctors.map(d=>{

       {d.doctorID==localStorage.getItem('doctorID') ?setDocReqs(d.doctorRequests):console.log(d.doctorRequests)}
    })

    // d.doctorID==localStorage.getItem('doctorID')?
    // null:null;


  }


  const addDocToTeam=(id)=>{

    const teamID = localStorage.getItem('teamID');
    let newData=doctors.map(el => (el.doctorID === id ? {...el, teamID,active:true} : el))
    setDoctors(newData);
    console.log('addDocToTeam');
  }


  useEffect(()=>{
    localStorage.setItem('doctorID', 6215);
    localStorage.setItem('doctorType', 'Consultant');
    localStorage.setItem('teamID', '008');
    //Assuming that he is logged in
    doctorRequestsList();
  },[])

  return (
    <div className="App">
    
    <h1>Question 2</h1>
    <br/>

    

    <h2>List all Doctor sroted by ID</h2>
      <br/>
      <table>
                
          <tr>
                <th>doctorID</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>teamID</th>
                <th>doctorType</th>
                <th>email</th>
                <th>active status</th>

          </tr>
      { doctorsDataSorted.map(data=>{
            return(
              <tr>
                <td>{data.doctorID}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.teamID}</td>
                <td>{data.doctorType}</td>
                <td>{data.email}</td>
                <td>{data.active?'Active':'Not Active'}</td>
              </tr>
            )
        })
      }
    </table>


    {/* ----------------------------------------------- */}
    <h2>Add New Doctor</h2>
    <br/>
    <p>[P.S. I store DoctorID(6215) and Type(Consultant) in the loacal storage. Assuming that he is logged in.]</p>
    <div>
        <table>       
          <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Type</th>
              <th>Action</th>
          </tr>

          <tr>
            <td><input onChange={e=>setFastName(e.target.value)}/></td>
            <td><input onChange={e=>setLastname(e.target.value)}/></td>
            <td>RMO</td>
            <td onClick={()=>addNewDoc()}>ADD</td>
          </tr>
        </table>

        <h5>{addMsg}</h5>
    </div>
    <br/>
    {/* ----------------------------------------------- */}
    <h2>Doctor Request of {localStorage.getItem('doctorID')}</h2>
    <br/>

      <table>
          <tr>
                <th>doctorRequests</th>
                <th>active status</th>
          </tr>
        {docReqs.map(d=>{
              return(
                <tr>
                  <td>{d}</td>
                  <td onClick={()=>addDocToTeam(d)}>ADD to TEAM</td>
                </tr>
                )
        })}
      </table>


    {/* ----------------------------------------------- */}
    <h2>Teams Members of {localStorage.getItem('teamID')}</h2>
    <br/>

      <table>
          <tr>
                <th>DoctorID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>DoctorType</th>
                <th>Email</th>
                <th>Active</th>
          </tr>
          {doctorsDataSorted.map(data=>{
           
            return(
            data.teamID==localStorage.getItem('teamID')?
              <tr>
                <td>{data.doctorID}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.doctorType}</td>
                <td>{data.email}</td>
                <td>REMOVE | PROMOTION</td>
              </tr>
              :null
            )
        })
      }
      </table>

    </div>
  );
}

export default Question2;
