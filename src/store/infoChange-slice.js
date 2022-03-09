import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  covidInfo: {
    had_covid: false,
    vaccinated: false,
    work: false,
  },
  devtalk: {
    will_organize_devtalk: false,
  },
}

const infoChange = createSlice({
  name: 'infoChange',
  initialState,
  reducers: {
    hadCovidChange(state) {
      state.covidInfo.had_covid = true
    },

    vaccinatedChange(state) {
      state.covidInfo.vaccinated = true
    },

    devtalkChange(state) {
      state.devtalk.will_organize_devtalk = true
    },
    workChange(state) {
      state.covidInfo.work = true
    },
  },
})

export const infoChangeActions = infoChange.actions

export default infoChange.reducer
