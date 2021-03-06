import { configureStore } from '@reduxjs/toolkit'
import infoChangeSlice from './infoChange-slice'
import informationSlice from './information-slice'
import pageSlice from './page-slice'

const store = configureStore({
  reducer: {
    info: informationSlice,
    page: pageSlice,
    infoChange: infoChangeSlice,
  },
  devTools: false,
})

export default store
