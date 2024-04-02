import React from 'react'

const Button = ({children, onClick, disabled}) => {
  return (
    <button type="submit" onClick={onClick} className="absolute right-0 top-0 mt-3 mr-4" disabled={disabled}>{children}</button>
  )
}

export default Button