import React from 'react'
import classes from '../styles/Landing.module.css'
import rocketman from '../photos/rocketman.png'
import stars from '../photos/stars.png'
import { useDispatch } from 'react-redux'
import { pageActions } from '../store/page-slice'
import { motion } from 'framer-motion'

const Landing = () => {
  const dispatch = useDispatch()
  return (
    <motion.div animate={{ x: [-2000, 0] }} className={classes.container}>
      <img src={stars} alt='Main Background' className={classes.background} />
      <div className={classes.title}>
        <h1>Welcome Rocketeer ! </h1>
      </div>
      <div className={classes['button-container']}>
        <button onClick={() => dispatch(pageActions.increment())}>
          Start Questionnaire
        </button>
      </div>
      <p
        className={classes.submitted}
        onClick={() => {
          dispatch(pageActions.change(7))
        }}
      >
        Submitted Applications
      </p>
      <div className={classes['rocketman-container']}>
        <img src={rocketman} alt='Rocketman' className={classes.rocketman} />
      </div>
    </motion.div>
  )
}

export default Landing
