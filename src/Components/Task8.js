import React from 'react'

function Task8({User}) {
  return (
    <div>
    <h2>User Details</h2>
    <h1>name:{User.name}</h1>
    <h1>email:{User.email}</h1>
    <h1><strong>Phone:</strong> {User.phone}</h1>
  </div>
  )
}

export default Task8