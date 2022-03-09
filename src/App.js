import Skills from './pages/Skills'
import Personal from './pages/Personal'
import Landing from './pages/Landing'
import { useSelector } from 'react-redux'
import Covid from './pages/Covid'
import Insight from './pages/Insight'
import SubmitPage from './pages/SubmitPage'
import Thank from './pages/Thank'
import Applications from './pages/Applications'

function App() {
  const page = useSelector((state) => state.page.page)
  return (
    <>
      {page == 0 && <Landing />}
      {page == 1 && <Personal />}
      {page === 2 && <Skills />}
      {page === 3 && <Covid />}
      {page === 4 && <Insight />}
      {page === 5 && <SubmitPage />}
      {page === 6 && <Thank />}
      {page === 7 && <Applications />}
    </>
  )
}

export default App
