import React, { useEffect, useState } from 'react'
import AppCard from '../components/AppCard'
import classes from '../styles/Applications.module.css'
import { pageActions } from '../store/page-slice'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

const Applications = () => {
  const [apps, setApps] = useState([])
  const dispatch = useDispatch()
  let number = 1
  useEffect(() => {
    fetch(
      `https://bootcamp-2022.devtest.ge/api/applications?token=59513494-213d-4f9d-a35c-178604ae438b`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setApps(data)
        console.log(data)
      })
  }, [])
  return (
    <motion.div animate={{ x: [-2000, 0] }}>
      <div className={classes.container}>
        <div className={classes['back-button']}>
          <AiOutlineArrowLeft
            onClick={() => {
              dispatch(pageActions.change(0))
            }}
          />
        </div>
        <div className={classes['card-container']}>
          <h1>Submitted Applications</h1>
          {apps &&
            apps.length > 0 &&
            apps.map((app) => {
              return (
                <AppCard key={Math.random()} data={app} number={number++} />
              )
            })}
        </div>
      </div>
    </motion.div>
  )
}

export default Applications
