import React from 'react'
import classes from '../styles/Thank.module.css'

const Thank = () => {
  setTimeout(() => {
    document.location.href = '/'
  }, 3)
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Thanks for Joining</h1>
    </div>
  )
}

export default Thank
