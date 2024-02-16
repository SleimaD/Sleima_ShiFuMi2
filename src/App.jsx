import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Choices from './components/Choices/Choices'
import Result from './components/Result/Result'
import Modal from './components/Modal/Modal'

function App() {
  
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [gameState,setGamestate] = useState("jouer")
  const [modalVisible, setModalVisible] = useState(false);
  const [attempts,setAttempts] = useState(0)

  const choices = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' },
  };


  let play = (userChoice) => {

    let computerChoice = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)];

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    setScore( score + (choices[userChoice].beats === computerChoice ? 1 : (choices[computerChoice].beats === userChoice ? -1 : 0)) );
    if (attempts >= 5) {
      alert("vous avez atteint le nombre maximum de tentatives")
      return
    }
    setAttempts(attempts+1)
  };
  

  let playAgain = () => {
    setGamestate("jouer") 
    setUserChoice(null);
    setComputerChoice(null);
    setAttempts(0)
  }


  let myModal = () => {
    setModalVisible(!modalVisible);
  };



  return (
    <div className="App w-full h-[100vh] flex  items-center flex-col">
      <Title 
        score={score}
      />
 
      {userChoice && computerChoice ? 
        <Result userChoice={userChoice} computerChoice={computerChoice} choices={choices} playAgain={playAgain}/> : 
        <Choices play={play}/> 
      }

      <button onClick={myModal} className="rules-button border-white border-2 p-2 px-4 rounded-lg text-white absolute bottom-[10%] right-[5%] max-[400px]:right-[39%] max-[400px]:bottom-[2%]">
          RULES
      </button>

      {modalVisible && <Modal myModal={myModal} />}

       
      </div>
  )
}

export default App






