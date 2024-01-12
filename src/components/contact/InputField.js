import React from 'react'
import '../../styles/contact.css'

function InputField({label, name, type, required, optional=false}) {
  return (
    <div className='input-field'>
        <label htmlFor={name}>
          {label}
          {
            optional ?
            <span className='optional'> (Optional)</span>
            : ''
          }
          {
            required ?
            <span className='empty-field'>*  Field cannot be empty</span> 
            : ''
          }
        </label>
        <input name={name} type={type} id={name}></input>
        
    </div>
  )
}

export default InputField
