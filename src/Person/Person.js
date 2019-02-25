import React from 'react';
import './Person.css';


const person = (props) => {
    
    return (
        //props.children to return parent content between opening and closing tags for Person
        //props.changed refers to a function in App.js
        //input type value refers to the name shown by default within the input field.
        <div className="Person" >
            <p onClick={props.click}>Hi, my name is {props.name} and I am {props.age} Years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    
    )
};

export default person;