import React from 'react'
import './filter.css'

const Filter = props => (
  <div className='movie-filter'>
    <input type='checkbox' onChange={props.onChange} id={props.value} />
    <label htmlFor={props.value}>{props.name}</label>
  </div>
)

export default Filter
