import { useState } from 'react'
import './index.css'
import { Navbar, Welcome, Dock } from '#components'

function App() {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App
