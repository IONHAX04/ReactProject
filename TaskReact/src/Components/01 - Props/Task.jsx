import React from 'react'

const Task = (props) => {
  return (
    <>
        <h1>{props.name}</h1>
        <p>This is a task based on props</p>
        <p>Steps : </p>
        <ul>
            <li>Create a component folder inside src</li>
            <li>Create a sub folder for our convenient & a file with jsx extension</li>
            <li>Inside app.jsx - pass an argument for component Task</li>
        </ul>
    </>
  )
}


export default Task