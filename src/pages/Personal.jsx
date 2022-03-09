import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../components/Slider'
import StoryContainer from '../components/StoryContainer'
import { informationActions } from '../store/information-slice'
import classes from '../styles/Personal.module.css'
import { motion } from 'framer-motion'

const Personal = () => {
  const page = useSelector((state) => state.page.page)
  const [valid, setIsValid] = useState(false)
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const info = useSelector((state) => state.info.personalInfo)

  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const firstNameChangeHandler = (event) => {
    setIsValid(false)
    dispatch(informationActions.addName(event.target.value))
    if (info.first_name === '') {
      setIsValid(false)
      setMessage('Name field is required')
    } else {
      setMessage('')
      setIsValid(true)
    }
  }
  const lastNameChangeHandler = (event) => {
    setIsValid(false)
    dispatch(informationActions.addLastName(event.target.value))
    if (info.last_name === '') {
      setIsValid(false)
      setMessage('Last Name field is required')
    } else {
      setMessage('')
      setIsValid(true)
    }
  }
  const emailChangeHandler = (event) => {
    setIsValid(false)
    dispatch(informationActions.addEmail(event.target.value))
    if (info.email === '') {
      setIsValid(false)
      setMessage('Email field is required')
    } else {
      setIsValid(true)
      setMessage('')
    }
  }
  const phoneChangeHandler = (event) => {
    dispatch(informationActions.addPhone(event.target.value))
  }

  return (
    <motion.div animate={{ x: [-2000, 0] }} className={classes.container}>
      <div className={classes.collector}>
        <div className={classes.title}>
          <h1>
            Hey, Rocketeer, what <br /> are your coordinates?
          </h1>
        </div>
        <div className={classes.inputs}>
          <input
            type='text'
            placeholder='First Name'
            onBlur={firstNameChangeHandler}
            onChange={firstNameChangeHandler}
            value={info.first_name}
            className={
              info.first_name && info.first_name.length < 2
                ? classes.invalid
                : classes.valid
            }
          />
          <input
            type='text'
            placeholder='Last Name'
            onBlur={lastNameChangeHandler}
            onChange={lastNameChangeHandler}
            value={info.last_name}
            className={
              info.last_name && info.last_name.length < 2
                ? classes.invalid
                : classes.valid
            }
          />
          <input
            type='email'
            placeholder='Email'
            onBlur={emailChangeHandler}
            onChange={emailChangeHandler}
            value={info.email}
            className={
              info.email && !info.email.match(emailValidator)
                ? classes.input_class
                : classes.valid
            }
          />
          <input
            type='text'
            placeholder='+995'
            value={info.phone}
            onBlur={phoneChangeHandler}
            onChange={phoneChangeHandler}
            className={
              (info.phone && info.phone.length === 13) || !info.phone
                ? classes.valid
                : classes.invalid
            }
          />
          <Slider
            valid={valid}
            number={page}
            message={
              info.first_name === '' &&
              info.last_name === '' &&
              info.email === ''
                ? 'Please fill all required fields'
                : message
            }
          />
        </div>
      </div>
      <StoryContainer
        title='Redberry Origins'
        story='You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇'
      />
    </motion.div>
  )
}

export default Personal
