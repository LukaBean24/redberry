import { createSlice } from '@reduxjs/toolkit'
const date = new Date()
const today = date.getDate()
const dd = String(today + 1).padStart(2, '0')
const month = date.getMonth()
const mm = String(month + 1).padStart(2, '0')
const year = date.getFullYear()

const fullDate = `${year}-${mm}-${dd}`

const initialState = {
  personalInfo: { first_name: '', last_name: '', email: '', phone: '' },
  skills: [],
  covidInfo: {
    work_preference: '',
    had_covid: false,
    had_covid_at: fullDate,
    vaccinated: false,
    vaccinated_at: fullDate,
  },
  devtalk: {
    will_organize_devtalk: '',
    devtalk_topic: 'I would...',
    something_special: 'I...',
  },
}

const informationSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {
    addName(state, action) {
      state.personalInfo.first_name = action.payload
    },
    addLastName(state, action) {
      state.personalInfo.last_name = action.payload
    },
    addEmail(state, action) {
      state.personalInfo.email = action.payload
    },
    addPhone(state, action) {
      state.personalInfo.phone = action.payload
    },
    addSkill(state, action) {
      const existingSkill = state.skills.find(
        (skill) => skill.id === action.payload.id
      )
      if (existingSkill) {
        state.skills = state.skills
      } else {
        state.skills = [...state.skills, action.payload]
      }
    },
    removeSkill(state, action) {
      state.skills = state.skills.filter((skill) => skill.id !== action.payload)
    },
    addWorkPreference(state, action) {
      state.covidInfo.work_preference = action.payload
    },
    addCovid(state, action) {
      state.covidInfo.had_covid = action.payload
    },
    addCovidAt(state, action) {
      state.covidInfo.had_covid_at = action.payload
    },
    addVacinated(state, action) {
      state.covidInfo.vaccinated = action.payload
    },
    addVaccinatedAt(state, action) {
      state.covidInfo.vaccinated_at = action.payload
    },
    devtalkOrganize(state, action) {
      state.devtalk.will_organize_devtalk = action.payload
    },
    addDevtalkTopic(state, action) {
      state.devtalk.devtalk_topic = action.payload
    },
    addSpecial(state, action) {
      state.devtalk.something_special = action.payload
    },
  },
})

export const informationActions = informationSlice.actions

export default informationSlice.reducer
