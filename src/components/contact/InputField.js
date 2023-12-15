import React from 'react'
import '../../styles/contact.css'

function InputField({label, name, type}) {
  return (
    <div className='input-field'>
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} id={name}></input>
    </div>
  )
}

export default InputField
