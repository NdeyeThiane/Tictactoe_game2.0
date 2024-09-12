import React, { useState} from 'react'
import Board from './new_components/Board'
import StartMenu from './new_components/StartMenu';
import './App.css'


function App() {
  
//state management for start menu and board
const [playMode, setPlayMode] = useState('start-menu');
//set and change mode handlers
const changeMode = (newMode) => setPlayMode(newMode)
const onReturnClick = () => changeMode('start-menu')

  return (
    
  
    
      <div className="App">
        {playMode === 'start-menu' && <StartMenu onStart={() => changeMode('board')}/>}
        {playMode === 'board' && <Board onReturnClick={onReturnClick}/>}
      </div>
      
   

  )
}

export default App
