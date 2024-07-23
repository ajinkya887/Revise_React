import React from 'react'

const student = (props) => {
  return (
    <div>
        <h1>Name - {props.name}</h1>
        <h3>branch = {props.branch}</h3>
        <h3>city = {props.city}</h3>
    </div>
  )
}

export default student