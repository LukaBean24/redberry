import React, { useState } from 'react'
import classes from '../styles/Slider.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { pageActions } from '../store/page-slice'

const Slider = ({ number, message, message2, valid }) => {
  const [printMessage, setPrintMessage] = useState(false)
  const dispatch = useDispatch()
  const pageIncrement = () => {
    if (valid) {
      dispatch(pageActions.increment())
    } else {
      setPrintMessage(true)
    }
  }
  const pageDecrement = () => {
    if (valid) {
      dispatch(pageActions.decrement())
    } else {
      setPrintMessage(true)
    }
  }
  return (
    <>
      <div className={classes.slider}>
        <AiOutlineLeft onClick={pageDecrement} className={classes.arrow} />
        <span
          style={number >= 1 ? { backgroundColor: '#fe3b1f' } : {}}
          onClick={() => {
            if (valid) {
              dispatch(pageActions.change(1))
            } else {
              setPrintMessage(true)
            }
          }}
        ></span>
        <span
          onClick={() => {
            if (valid) {
              dispatch(pageActions.change(2))
            } else {
              setPrintMessage(true)
            }
          }}
          style={number >= 2 ? { backgroundColor: '#fe3b1f' } : {}}
        ></span>
        <span
          onClick={() => {
            if (valid) {
              dispatch(pageActions.change(3))
            } else {
              setPrintMessage(true)
            }
          }}
          style={number >= 3 ? { backgroundColor: '#fe3b1f' } : {}}
        ></span>
        <span
          onClick={() => {
            if (valid) {
              dispatch(pageActions.change(4))
            } else {
              setPrintMessage(true)
            }
          }}
          style={number >= 4 ? { backgroundColor: '#fe3b1f' } : {}}
        ></span>
        <span
          onClick={() => {
            if (valid) {
              dispatch(pageActions.change(5))
            } else {
              setPrintMessage(true)
            }
          }}
          style={number >= 5 ? { backgroundColor: '#fe3b1f' } : {}}
        ></span>
        <AiOutlineRight onClick={pageIncrement} className={classes.arrow} />
      </div>
      {printMessage && <p className={classes.message}>{message}</p>}
      {message2 && <p className={classes.message}>{message2}</p>}
    </>
  )
}

export default Slider
