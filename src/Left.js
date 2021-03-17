import React from 'react';
import './css/Left.css';
import {useHistory} from 'react-router';

function Left() {
    const history = useHistory();
    return (
        <div className='Left-div'>
            <img onClick={()=> history.push('/')} id='school-logo' src='http://s3.amazonaws.com/batsman/Henegama%20Central%20College,%20Henegama_6be6a29f-8746-466b-b08f-52718f8e6be2.JPG' alt=''/>
        </div>
    )
}

export default Left
