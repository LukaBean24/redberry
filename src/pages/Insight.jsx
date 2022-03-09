import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../components/Slider'
import StoryContainer from '../components/StoryContainer'
import { informationActions } from '../store/information-slice'
import { infoChangeActions } from '../store/infoChange-slice'
import classes from '../styles/Insight.module.css'
import { motion } from 'framer-motion'

const Insight = () => {
  const dispatch = useDispatch()
  const devtalkInfo = useSelector((state) => state.info.devtalk)
  const infoChange = useSelector((state) => state.infoChange.devtalk)
  console.log(infoChange)
  const radioChangeHandler = (e) => {
    dispatch(informationActions.devtalkOrganize(e.target.value))
    dispatch(infoChangeActions.devtalkChange())
  }

  const devtalkTopicChangeHandler = (e) => {
    dispatch(informationActions.addDevtalkTopic(e.target.value))
  }

  const somethingSpecialChangeHandler = (e) => {
    dispatch(informationActions.addSpecial(e.target.value))
  }

  return (
    <motion.div animate={{ x: [-2000, 0] }} className={classes.container}>
      <div className={classes['devtalk-container']}>
        <div className={classes.title}>
          <h1>What about you?</h1>
        </div>
        <div className={classes.question}>
          <p>Would you attend Devtalks and maybe also organize your own?</p>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='devtalk'
              checked={
                devtalkInfo.will_organize_devtalk === 'true' ? true : false
              }
              value='true'
              onChange={radioChangeHandler}
            />
            <label>Yes</label>
          </div>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='devtalk'
              value='false'
              checked={
                devtalkInfo.will_organize_devtalk === 'false' ? true : false
              }
              onChange={radioChangeHandler}
            />
            <label>No</label>
          </div>
        </div>
        {devtalkInfo.will_organize_devtalk === 'true' && (
          <div className={classes.textarea}>
            <p>What would you speak about a Devtalk</p>
            <textarea
              cols='30'
              rows='9'
              defaultValue={devtalkInfo.devtalk_topic}
              placeholder={devtalkInfo.devtalk_topic}
              onChange={devtalkTopicChangeHandler}
            ></textarea>
          </div>
        )}
        <div className={classes.textarea}>
          <p>Tell us something special</p>
          <textarea
            cols='30'
            rows='5'
            onChange={somethingSpecialChangeHandler}
            defaultValue={devtalkInfo.something_special}
            placeholder={devtalkInfo.something_special}
          ></textarea>
        </div>
        <Slider number={4} valid={infoChange} />
      </div>
      <StoryContainer
        title='Redberrian Insights'
        story='We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!'
      />
    </motion.div>
  )
}

export default Insight
