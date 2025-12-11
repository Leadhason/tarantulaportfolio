

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

import './index.css'
import { Navbar, Welcome, Dock } from '#components'
import { TerminalWindow } from '#windows/index.js'



function App() {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
    </main>
  )
}

export default App
