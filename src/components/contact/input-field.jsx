import React from 'react'
import '../../styles/contact.css'

function InputField({label, name, type, required, optional=false, children, ...register}) {
  return (
    <div className={'input-field ' + name}>
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
        {
          children ?
          children :
          <input name={name} type={type} id={name} {...register}></input>
        }
    </div>
  )
}

export default InputField
