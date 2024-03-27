import './App.css'
import { useEffect, useState } from 'react'
import Menu from './Menu.jsx'
import Game from './Game.jsx'
import ScoreBoard from './ScoreBoard.jsx'

function App() {
  //Score
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)

  useEffect(()=>{
    setMaxScore(ms => ms>score?ms:score)
  },[score])

  //Page Logic
  const [pageIndex, setPageIndex] = useState(0)
  const pages = ['Menu', 'Game', 'Winning', 'Losing'];
  let curPage = <Menu setPageIndex={setPageIndex}></Menu>

  if(pageIndex == 1){
    curPage = <Game score ={score} setScore={setScore} setMaxScore={setMaxScore}></Game>
  }

  return (
  <div className='app'>
    <ScoreBoard score={score} maxScore={maxScore}></ScoreBoard>
    {curPage}
  </div>
  )
}

export default App
