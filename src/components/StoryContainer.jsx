import React from 'react'
import classes from '../styles/StoryContainer.module.css'

const StoryContainer = ({ title, story }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.story}>
        <p>{story}</p>
      </div>
    </div>
  )
}

export default StoryContainer
