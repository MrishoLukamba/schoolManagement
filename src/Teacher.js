import React,{useState,useEffect} from 'react';
import './css/Teacher.css';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import instance from './api/api';
import endpoints from './api/endpoints';

function Teacher() {
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        async function fetchTeachers(){
            const response = await instance.get(endpoints.teachers);
            setTeachers(response.data);
            return response;
        }
        fetchTeachers();
    },[])
    return (
        <div className='Teacher-div'>
            <div className='Teacher-Top'>
                <h3>ADD TEACHER <AddIcon/></h3>
                <input type='text' placeholder='search teacher'/>
            </div>

            <div className='Teacher-Bottom'>
                <h3>TEACHERS</h3>
                <div className='Teacher-Bottom-Main'>
                    <div className='Teacher-Bottom-Main-Titles'>
                        <h4>Name</h4>
                        <h4>Gender</h4>
                        <h4>Subject</h4>
                        <h4>Class</h4>
                        <div></div>
                    </div>
                    {teachers.map(({name, gender, teachersubect, teacherclass,teacherImage})=>(
                        <div className='Teacher-Bottom-Main-Context'>
                            <img src={teacherImage} alt=''/>
                            <h5>{name}</h5>
                            <h5>{gender}</h5>
                            <h5>{teachersubect}</h5>
                            <h5>{teacherclass}</h5>
                            <MoreVertIcon style={{ fontSize: 20 }}/>     
                                            
                        </div>
                    ))}
                    



                    
                    </div>
                </div>
            </div>
        
    )
}

export default Teacher
