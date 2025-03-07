import React from 'react'

function Task12(props) {
  return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      );
    }

export default Task12