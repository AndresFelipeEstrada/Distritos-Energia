
import './App.css'

import { Tables } from './components/Tables'
import { DistritoTermico } from './components/DistritoTermico'
import { useState } from 'react'
import { NavBar } from './components/Navbar'

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      <NavBar />
      {currentPath === '/' && <DistritoTermico />}

      {currentPath === '/tables' && <Tables />}
    </main>
  )
}

export default App
