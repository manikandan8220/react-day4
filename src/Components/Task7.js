import React from 'react'

function Task7({hobbies}) {
  return (
    <>
    <ul>
        {hobbies.map((hobby, i) => 
           <li key={i}>{hobby}</li>)
        }
    </ul>;
    </>
  )
}

export default Task7