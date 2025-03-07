import React from 'react'

function Task9({name}) {
  return (
    <div>
        <h2>Welcome, {name ? name : "Guest"}!</h2>
    </div>
  )
}

export default Task9