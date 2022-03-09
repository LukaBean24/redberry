import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions } from '../store/page-slice'
import classes from '../styles/SubmitPage.module.css'
import { motion } from 'framer-motion'

const SubmitPage = () => {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.info)
  const url = `https://bootcamp-2022.devtest.ge/api/application`
  const token = `59513494-213d-4f9d-a35c-178604ae438b`
  const skills = useSelector((state) => state.info.skills)

  // const vaccinationDate =
  //   String(info.vaccinated_at.getDate()).padStart(2, '0') +
  //   '-' +
  //   String(info.vaccinated_at.getMonth()).padStart(2, '0') +
  //   '-' +
  //   submittedInfo.vaccinated_at.getFullYear()
  // const covidnDate =
  //   String(info.covid_at.getDate()).padStart(2, '0') +
  //   '-' +
  //   String(info.covid_at.getMonth()).padStart(2, '0') +
  //   '-' +
  //   submittedInfo.covid_at.getFullYear()

  const submittedInfo = {
    token,
    had_covid: info.covidInfo.had_covid === 'true' ? true : false,
    had_covid_at:
      info.covidInfo.had_covid === 'true'
        ? info.covidInfo.had_covid_at
        : 'No covid',
    vaccinated: info.covidInfo.vaccinated === 'true' ? true : false,
    vaccinated_at:
      info.covidInfo.vaccinated === 'true'
        ? info.covidInfo.vaccinated_at
        : 'No vaccination',
    work_preference: info.covidInfo.work_preference,
    devtalk_topic: info.devtalk.will_organize_devtalk,
    will_organize_devtalk:
      info.devtalk.will_organize_devtalk === 'true' ? true : false,
    something_special: info.devtalk.something_special,
    skills,
    email: info.personalInfo.email,
    phone:
      info.personalInfo.phone !== '' ? info.personalInfo.phone : 'No Number',
    first_name: info.personalInfo.first_name,
    last_name: info.personalInfo.last_name,
  }
  return (
    <motion.div animate={{ x: [-2000, 0] }} className={classes.container}>
      <button
        onClick={() => {
          axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: submittedInfo,
            url,
          }).catch((err) => console.log(err))
          dispatch(pageActions.increment())
        }}
      >
        Submit
      </button>
      <p
        onClick={() => {
          dispatch(pageActions.decrement())
        }}
      >
        go back
      </p>
    </motion.div>
  )
}

export default SubmitPage
