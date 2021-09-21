
import '../App.css';
import React,{useState,useEffect} from 'react';

const Question2=({doctors,setDoctors,teams,setTeams})=> {

  // const [doctors ,setDoctors ]=useState([
  //   {doctorID: "6215",firstName: "Jalaluddin",lastName: "Mahbub",teamID: "008",doctorType: "Consultant",email: "jabub@hospital.com",active: true,doctorRequests: []},
  //   {doctorID: "6216",firstName: "Amin",lastName: "Morshed",teamID: "008",doctorType: "Assistant Consultant",email: "amhed@hospital.com",active: true},
  //   {doctorID: "6214",firstName: "Mahady",lastName: "Selim",teamID: "005",doctorType: "Consultant",email: "malim@hospital.com",active: true,doctorRequests: ["6213",]},
  //   {doctorID: "6213",firstName: "Jamela",lastName: "Begum",teamID: "005",doctorType: "RMO",email: "jagum@hospital.com",active: false}]);

  // const [teams ,setTeams ]=useState([
  //   {teamName: "nephrology",teamID: "008",consultantInCharge: "6215",teamMates: ["6216",]},
  //   {teamName: "cardiology",teamID: "005",consultantInCharge: "6214",teamMates: []}
  // ]);



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
        setFastName('');
        setLastname('');
        let updateUser=[];

        doctors.map(d=>{
          {d.doctorID==localStorage.getItem('doctorID') ?
          
          updateUser=d : console.log(d.doctorRequests)}
        })


        updateUser.doctorRequests.push(newID);
        
        const filterDoc = concat.filter(d => d.doctorID!=localStorage.getItem('doctorID'));
        //concat is-- with New doc.

        setDoctors([updateUser,...filterDoc]);
     
        //console.log(updateUser);
      }
    }
    else{
      setAddMsg('Failed!!...Only Consultant Type Doctor can add new Doctor!');
    }

  }


  const doctorRequestsList=()=>{
    doctors.map(d=>{

      {d.doctorID==localStorage.getItem('doctorID') ?setDocReqs(d.doctorRequests):console.log(['doctorRequestsList'])}
    })

    // d.doctorID==localStorage.getItem('doctorID')?
    // null:null;


  }


  const addDocToTeam=(id,teamid)=>{

    const teamID = localStorage.getItem('teamID');
    let newData=doctors.map(el => (el.doctorID === id ? {...el, teamID,active:true} : el))
    setDoctors(newData);
    console.log('addDocToTeam');

    removeFromDocReq(id,newData);


    //add to team array 
    let updateUser=[];

      teams.map(d=>{
          {d.teamID==localStorage.getItem('teamID') ?
          
          updateUser=d : console.log(d.teamID)}
        })
        updateUser.teamMates.push(id);

        const filterDoc = teams.filter(d => d.teamID!=localStorage.getItem('teams'));
        setTeams([updateUser,...filterDoc]);

        console.log(teams,'newTeam');


  }

  const removeFromDocReq=(id,updatedData)=>{

    let updateUser=[];
    updatedData.map(d=>{
      {d.doctorID==localStorage.getItem('doctorID') ?
      
      updateUser=d : console.log(d.doctorRequests)}
    })


    
    // updateUser.doctorRequests.filter(item => item != 6282);

    // let a = [...updateUser.doctorRequests, ...updateUser.doctorRequests.filter(item => item != 6282)]
    
    // const filterDoc = doctors.filter(d => d.doctorID!=localStorage.getItem('doctorID'));

    // setDoctors([updateUser,...filterDoc]);

    let doctorRequestsRemove = updateUser.doctorRequests.filter(item => item != id);

    let newData=updatedData.map(el => (el.doctorID ===  localStorage.getItem('doctorID') ? {...el, doctorRequests:doctorRequestsRemove} : el));
    
    setDoctors(newData);
    setDocReqs(doctorRequestsRemove);

    console.log(doctorRequestsRemove);

  }


  const promotionDoc=(id)=>{
    let doctorType='Assistant Consultant';
    
    setDoctors(doctors.map(el => (el.doctorID == id ? {...el, doctorType} : el)));

    console.log("promotionDoc");
  }

  const removeDocFromTeam=(id)=>{

    setDoctors(doctors.map(el => (el.doctorID == id ? {...el, teamID:'none',active:false} : el)));


    console.log("promotionDoc");
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

    
      <h4>[-- I store DoctorID(6215),Type(Consultant) and TeamNumber in the loacal storage]</h4>
      <h4>[-- Because Assuming that he is logged in. After login those data will store in LoacalStorage]</h4>
      <h4>[-- You can find localStorage.setItem in useEffect hook of Question2.js file]</h4>
      <br/>
      <h2>List all Doctor sroted by ID</h2>
      <br/> 
      <table>
                
          <tr>
                <th>DoctorID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>TeamID</th>
                <th>DoctorType</th>
                <th>Email</th>
                <th>Account Active Status</th>

          </tr>
      { doctorsDataSorted.map(data=>{
            return(
              <tr key={data.doctorID}>
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
    <p>Only Consultant can added new doctor and no emply text box is allowed</p>
    <br/>
    <div>
        <table>       
          {/* <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Type</th>
              <th>Action</th>
          </tr> */}

          <tr>
            <td><input placeholder="FirstName" value={fastName} onChange={e=>setFastName(e.target.value)}/></td>
            <td><input placeholder="LastName" value={lastName} onChange={e=>setLastname(e.target.value)}/></td>
            {/* <td>Type: RMO</td> */}
            <td onClick={()=>addNewDoc()}  style={{cursor: 'pointer',color: 'blue'}}>ADD</td>
          </tr>
        </table>

        <h5  style={{color: 'blue'}}>{addMsg}</h5>
    </div>
    <br/>


    {/* ----------------------------------------------- */}
    <h2>Doctor Request of {localStorage.getItem('doctorID')} no. Doctor</h2>
    <br/>

      <table>
          <tr>
                <th>Doctor Requests ID</th>
                <th>Active Status</th>
          </tr>
        {docReqs.map(d=>{
              return(
                <tr key={d}>
                  <td>{d}</td>
                  <td onClick={()=>addDocToTeam(d)} style={{cursor: 'pointer',color: 'blue'}}>ADD to TEAM</td>
                </tr>
                )
        })}
      </table>




    {/* ----------------------------------------------- */}
    <h2>Teams Members of {localStorage.getItem('teamID')} no. Team</h2>
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
            data.teamID==localStorage.getItem('teamID')&& data.doctorID!=localStorage.getItem('doctorID')?
              <tr key={data.doctorID}>
                <td>{data.doctorID}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.doctorType}</td>
                <td>{data.email}</td>
                <td>
                  <span onClick={()=>removeDocFromTeam(data.doctorID)} style={{cursor: 'pointer',color: 'red'}}>REMOVE </span> 
                  | 
                  <span  onClick={()=>promotionDoc(data.doctorID)} style={{cursor: 'pointer',color: 'green'}}> PROMOTION</span></td>
              </tr>
              :null
            )
        })
      }
      </table>

      <p style={{color: 'blue'}}>[P.S. Promotion will chnage Doctor type only to Assistant Consultant]</p>

    </div>
  );
}

export default Question2;
