import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './layouts/RootLayout.jsx'
import {Route, Routes} from 'react-router-dom'
import Lab1Page from './pages/Lab1Page.jsx'
import PeoplePage from './pages/PeoplePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/lab1" element={<Lab1Page/>} />
          <Route path="/lab2" element={<h1>Laboratorium 2</h1>}/>
          <Route path="/people/:id" element={<PeoplePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </RootLayout>
    </>
  )
}

export default App
