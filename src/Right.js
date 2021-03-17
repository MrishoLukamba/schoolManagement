import React from 'react'
import './css/Right.css'
import {useHistory} from 'react-router';

function Right() {
    const history = useHistory();
    return (
        <div className='Right-div'>
            <div className='Right-div-title'>
                <h1>HENEGAMA CENTRAL COLLEGE</h1>
                <h3>SCHOOL MANAGEMENT SYSTEM</h3>
            </div>
            <div className='Right-div-main'>
                <h1 onClick={()=>history.push('/teachers')}>TEACHERS</h1>
                <h1 onClick={()=>history.push('/students')}>STUDENTS</h1>
                <h1 onClick={()=>history.push('/about')}>ABOUT</h1>
                <h1 onClick={()=>history.push('/logout')}>LOG OUT</h1>
            </div>
        </div>
    )
}

export default Right;

