import React,{useState,useEffect} from 'react';
import './css/Teacher.css';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import instance from './api/api';
import endpoints from './api/endpoints';

function Student() {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        async function fetchStudents(){
            const response = await instance.get(endpoints.students)
            const result =response.data
            setStudents(result)
            return response;
            
        }
        fetchStudents();
    },[])
    
    
    return (
        <div className='Teacher-div'>
            <div className='Teacher-Top'>
                <h3>ADD STUDENT <AddIcon/></h3>
                <input type='text' placeholder='search teacher'/>
            </div>

            <div className='Teacher-Bottom'>
                <h3>STUDENTS</h3>
                <div className='Teacher-Bottom-Main'>
                    <div className='Teacher-Bottom-Main-Titles'>
                        <h4>Name</h4>
                        <h4>Gender</h4>
                        <h4>age</h4>
                        <h4>NIC</h4>
                        <div></div>
                    </div>
                    {students.map((value) =>(
                      <div className='Teacher-Bottom-Main-Context'>
                      
                          <img src={value?.studentImage} alt='image'/>
                          <h5>{value?.name}</h5>
                          <h5>{value?.gender}</h5>
                          <h5>{value?.age}</h5>
                          <h5>{value?.nic}</h5>
                          <MoreVertIcon style={{ fontSize: 20 }}/>
                      </div>     
                      ))}
                            
                               
                                            
                </div>
            </div>
        </div>
        
    )
}
    


export default Student
