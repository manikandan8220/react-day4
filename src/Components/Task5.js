import React from 'react'

function Task5({name ,isStudent}) {
  return (
    <h1>
        name: {name}, Status: {isStudent ? "Student" : "Not a Student"}
    </h1>
  )
}

export default Task5