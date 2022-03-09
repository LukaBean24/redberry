import React, { useEffect, useState } from 'react'
import classes from '../styles/AppCard.module.css'
import { AiOutlineDown } from 'react-icons/ai'

const AppCard = ({ data, number }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [skills, setSkills] = useState([])
  useEffect(() => {
    fetch(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setSkills(data)
        console.log(data)
      })
  }, [])
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Application {number}</p>
        <AiOutlineDown
          className={classes.icon}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
      </div>
      <div className={isOpen ? classes['content-visible'] : classes.content}>
        <div className={classes['row']}>
          <div className={classes.personal}>
            <div className={classes['section-header']}>
              <h4>Personal Information</h4>
            </div>
            <div className={classes['section-content']}>
              <p>Name: {data.first_name}</p>
              <p>Last Name: {data.last_name}</p>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
            </div>
          </div>
          <div className={classes.skills}>
            <div className={classes['section-header']}>
              <h4>Skillset</h4>
            </div>
            <div className={classes['section-content-skills']}>
              {data.skills &&
                data.skills.map((skill) => {
                  const foundSkill = skills.find((s) => s.id === skill.id)
                  return (
                    <div key={skill.id} className={classes.skill}>
                      {foundSkill && foundSkill.title}
                      {'  '}
                      Years of Experience: {skill.experience}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <div className={classes['row']}>
          <div className={classes.personal}>
            <div className={classes['section-header']}>
              <h4>Covid Situation</h4>
            </div>
            <div className={classes['section-content-work']}>
              <p>How would you prefer to work?</p>
              <span>
                <input
                  type='radio'
                  disabled={data.work_preference !== 'from_office'}
                  checked={data.work_preference === 'from_office'}
                  onChange={() => {}}
                />
                <p>From Sairme Office</p>
              </span>
              <span>
                <input
                  type='radio'
                  disabled={data.work_preference !== 'from_home'}
                  checked={data.work_preference === 'from_home'}
                  onChange={() => {}}
                />
                <p>From Home</p>
              </span>
              <span>
                <input
                  type='radio'
                  disabled={data.work_preference !== 'hybrid'}
                  onChange={() => {}}
                  checked={data.work_preference === 'hybrid'}
                />
                <p>Hybrid</p>
              </span>
              <br />
              <p>Did You have Covid 19?</p>
              <span>
                <input
                  type='radio'
                  disabled={data.had_covid !== true}
                  onChange={() => {}}
                  checked={data.had_covid === true}
                />
                <p>Yes</p>
              </span>
              <span>
                <input
                  type='radio'
                  disabled={data.had_covid !== false}
                  onChange={() => {}}
                  checked={data.had_covid === false}
                />
                <p>No</p>
              </span>
              {data.had_covid && (
                <>
                  <br />
                  <p>When Did you have covid 19?</p>
                  <span>{data.had_covid_at}</span>
                </>
              )}
              <br />
              <p>Have you been vaccinated ?</p>
              <span>
                <input
                  type='radio'
                  disabled={data.vaccinated !== true}
                  onChange={() => {}}
                  checked={data.vaccinated === true}
                />
                <p>Yes</p>
              </span>
              <span>
                <input
                  type='radio'
                  disabled={data.vaccinated !== false}
                  onChange={() => {}}
                  checked={data.vaccinated === false}
                />
                <p>No</p>
              </span>
              {data.vaccinated && (
                <>
                  <br />
                  <p>When Did you get covid vaccine?</p>
                  <span>{data.vaccinated_at}</span>
                </>
              )}
            </div>
          </div>
          <div className={classes.skills}>
            <div className={classes['section-header']}>
              <h4>Insights</h4>
            </div>
            <div className={classes['section-content-insight']}>
              <p>Would you attend Devtalks and maybe also organize your own</p>
              <span className={classes.radio}>
                <input
                  type='radio'
                  disabled={data.will_organize_devtalk !== true}
                  onChange={() => {}}
                  checked={data.will_organize_devtalk === true}
                />
                <p>Yes</p>
              </span>
              <span className={classes.radio}>
                <input
                  type='radio'
                  disabled={data.will_organize_devtalk !== false}
                  onChange={() => {}}
                  checked={data.will_organize_devtalk === false}
                />
                <p>No</p>
              </span>
              {data.will_organize_devtalk === true && (
                <>
                  <br />
                  <p>What would you speak about at Devtalk?</p>
                  <span className={classes.textarea}>{data.devtalk_topic}</span>
                </>
              )}
              <br />
              <p>Tell us something special</p>
              <span className={classes.textarea}>{data.something_special}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCard
