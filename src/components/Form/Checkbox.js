import React from 'react';

const checkbox = (props) => (
    <li>
        <input style={{width: '20px'}} 
        key={props.id} 
        type="checkbox" checked={props.isChecked} 
        value={props.name} 
        onClick={props.clicked} />{props.name} 
    </li>   
);
export default checkbox;