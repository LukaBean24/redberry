import React from 'react'
import classes from '../styles/SkillCard.module.css'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { informationActions } from '../store/information-slice'

const SkillCard = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <div className={classes.card}>
      <span>{data.title}</span>
      <span>Years of Experience {data.experience}</span>
      <span>
        <AiOutlineMinusCircle
          className={classes.icon}
          onClick={() => dispatch(informationActions.removeSkill(data.id))}
        />
      </span>
    </div>
  )
}

export default SkillCard
