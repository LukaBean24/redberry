import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StoryContainer from '../components/StoryContainer'
import { informationActions } from '../store/information-slice'
import classes from '../styles/Skills.module.css'
import SkillCard from '../components/SkillCard'
import Slider from '../components/Slider'
import { motion } from 'framer-motion'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [selectedSkill, setSelectedSkill] = useState()
  const [selectedSkillId, setSelectedSkillId] = useState()
  const [experience, setExperince] = useState()
  const [message, setMessage] = useState()
  const getSkills = () => {
    fetch(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setSkills(data)
      })
  }
  const programmingLanguages = useSelector((state) => state.info.skills)
  const dispatch = useDispatch()

  useEffect(() => {
    getSkills()
  }, [])
  return (
    <motion.div animate={{ x: [-2000, 0] }} className={classes.container}>
      <div className={classes.collector}>
        <div className={classes.title}>
          <h1>Tell us about your skills</h1>
        </div>
        <div className={classes['skills-inputs']}>
          <select
            onChange={(e) => {
              const index = e.target.selectedIndex
              const el = e.target.childNodes[index]
              const option = el.getAttribute('id')
              setSelectedSkill(e.target.value)
              setSelectedSkillId(option)
            }}
          >
            <option>-</option>
            {skills &&
              skills.map((skill) => {
                return (
                  <option key={skill.id} value={skill.title} id={skill.id}>
                    {skill.title}
                  </option>
                )
              })}
          </select>
          <input
            type='text'
            placeholder='Years of Experience'
            onChange={(e) => {
              setExperince(e.target.value)
            }}
          />
          <button
            onClick={() => {
              if (
                selectedSkill !== undefined &&
                selectedSkillId !== undefined &&
                experience !== undefined
              ) {
                const skill = {
                  id: selectedSkillId,
                  title: selectedSkill,
                  experience,
                }
                dispatch(informationActions.addSkill(skill))
                setMessage('')
              } else {
                setMessage('Please enter skill and experience')
              }
            }}
          >
            Add Programming Language
          </button>
          <br />
          {programmingLanguages &&
            programmingLanguages.map((p) => {
              return <SkillCard key={p.id} data={p} />
            })}
          {/* {message && <p>{message}</p>} */}
          <Slider
            number={2}
            valid={programmingLanguages.length === 0 ? false : true}
            message={
              programmingLanguages.length === 0
                ? 'Select At least one Skill'
                : ''
            }
            message2={message}
          />
        </div>
      </div>
      <StoryContainer
        story='As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.'
        title='A bit about our batttles'
      />
    </motion.div>
  )
}

export default Skills
