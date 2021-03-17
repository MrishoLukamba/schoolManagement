import React from 'react';
import './css/Teacher.css';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Teacher() {
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
                    </div>
                    <div className='Teacher-Bottom-Main-Context'>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg' alt=''/>
                        <h5>Akida Mwabaya</h5>
                        <h5>Male</h5>
                        <h5>Math</h5>
                        <h5>Form 4B</h5>
                        <div className='icons'>
                            <MoreVertIcon style={{ fontSize: 20 }}/>     
                            <EditIcon style={{ fontSize: 20 }}/>
                            <DeleteIcon style={{ fontSize: 25 }} color="secondary"/>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher
