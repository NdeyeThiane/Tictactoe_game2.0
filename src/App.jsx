import { useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/Users/tpl822_6/project-techtonica/tictactoe_game2.0/src/App.css'
import "/Users/tpl822_6/project-techtonica/tictactoe_game2.0/src/compounds/Tictac.css"
import Board from './compounds/Board'
// import { Home } from './pages/Home'
import {Play, Name}  from './Playbutton'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    // <Board />
    
      <div className="App">
        <Name />
        <Play />
      </div>
      
   

  )
}

export default App
