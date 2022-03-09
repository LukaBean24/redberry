import React, { useState } from 'react'
import StoryContainer from '../components/StoryContainer'
import classes from '../styles/Covid.module.css'
import Slider from '../components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { informationActions } from '../store/information-slice'
import { infoChangeActions } from '../store/infoChange-slice'
import { motion } from 'framer-motion'

const Covid = () => {
  const covidInfo = useSelector((state) => state.info.covidInfo)
  const infoChange = useSelector((state) => state.infoChange.covidInfo)
  const [valid, setIsValid] = useState()
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const workPrefferenceChangeHandler = (e) => {
    // if (e.target.checked === false) {
    //   setMessage('Please select work preference')
    // } else {
    dispatch(informationActions.addWorkPreference(e.target.value))
    setMessage('')
    dispatch(infoChangeActions.workChange())
    // /}
  }

  const covidChangeHandler = (e) => {
    // if (e.target.checked === false) {
    //   setMessage('Please select if you had covid')
    // } else {
    dispatch(informationActions.addCovid(e.target.value))
    setMessage('')
    dispatch(infoChangeActions.hadCovidChange())
    //}
  }

  const vaccinationChangeHandler = (e) => {
    // if (e.target.checked === false) {
    //   setMessage('Please select your vaccination status')
    // } else {
    dispatch(informationActions.addVacinated(e.target.value))
    setMessage('')
    dispatch(infoChangeActions.vaccinatedChange())
    //}
  }
  return (
    <motion.div animate={{ x: [-2000, 0] }} className={classes.container}>
      <div className={classes.questionnaire}>
        <div className={classes.title}>
          <h1>Covid Stuff</h1>
        </div>
        <div className={classes['covid-questions']}>
          <div className={classes.question}>
            <p>how would you prefer to work</p>
            <div className={classes['radio-container']}>
              <input
                onChange={workPrefferenceChangeHandler}
                checked={
                  covidInfo.work_preference === 'from_office' ? true : false
                }
                type='radio'
                name='work-preference'
                value='from_office'
              />
              <label>From Sairme Office</label>
            </div>
            <div className={classes['radio-container']}>
              <input
                type='radio'
                name='work-preference'
                checked={
                  covidInfo.work_preference === 'from_home' ? true : false
                }
                onChange={workPrefferenceChangeHandler}
                value='from_home'
              />
              <label>From Home</label>
            </div>
            <div className={classes['radio-container']}>
              <input
                type='radio'
                name='work-preference'
                checked={covidInfo.work_preference === 'hybrid' ? true : false}
                onChange={workPrefferenceChangeHandler}
                value='hybrid'
              />
              <label>Hybrid</label>
            </div>
          </div>

          <div className={classes.question}>
            <p>Did you contact covid 19? :(</p>
            <div className={classes['radio-container']}>
              <input
                type='radio'
                name='covidContact'
                checked={covidInfo.had_covid === 'true' ? true : false}
                onChange={covidChangeHandler}
                value='true'
              />
              <label>Yes</label>
            </div>
            <div className={classes['radio-container']}>
              <input
                type='radio'
                name='covidContact'
                value='false'
                checked={covidInfo.had_covid === 'false' ? true : false}
                onChange={covidChangeHandler}
              />
              <label>No</label>
            </div>
          </div>
          {covidInfo.had_covid === 'true' && (
            <input
              type='date'
              name=''
              id=''
              className={classes.calendar}
              // onChange={(e) => {
              //   dispatch(informationActions.addCovidAt(e.target.value))
              // }}
              defaultValue={covidInfo.had_covid_at}
            />
          )}

          <div className={classes.question}>
            <p>Have you been vaccinated?</p>
            <div className={classes['radio-container']}>
              <input
                type='radio'
                name='vaccination'
                onChange={vaccinationChangeHandler}
                checked={covidInfo.vaccinated === 'true' ? true : false}
                value='true'
              />
              <label>Yes</label>
            </div>
            <div className={classes['radio-container']}>
              <input
                type='radio'
                name='vaccination'
                checked={covidInfo.vaccinated === 'false' ? true : false}
                value='false'
                onChange={vaccinationChangeHandler}
              />
              <label>No</label>
            </div>
          </div>
          {covidInfo.vaccinated === 'true' && (
            <input
              type='date'
              className={classes.calendar}
              defaultValue={covidInfo.vaccinated_at}
              // onChange={(e) => {
              //   dispatch(informationActions.addVaccinatedAt(e.target.value))
              // }}
            />
          )}
        </div>
        <Slider
          number={3}
          message={'Select three options'}
          valid={
            infoChange.had_covid && infoChange.vaccinated && infoChange.work
              ? true
              : false
          }
        />
      </div>
      <StoryContainer
        title='Redberry Covid Policies'
        story='As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.'
      />
    </motion.div>
  )
}

export default Covid
