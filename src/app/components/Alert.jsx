import React from 'react'

const Alert = ({text}) => {
  return (
    <div className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
    <span className="font-medium">{text}</span> 
  </div>
  )
}

export default Alert