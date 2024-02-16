import React, { useState } from 'react'
import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'
import './Result.css'


export default function Result(props) {

    let choixImages = {
        rock: Rock,
        paper: Paper,
        scissors: Scissors
    };

    let borderColors = {
        rock: 'border-[#df3d5b]',
        paper:'border-[#576ff5]',
        scissors:'border-[#F2AB26]',
    }
    

    let userChoixImage = choixImages[props.userChoice];
    let computerChoixImage = choixImages[props.computerChoice];
  


  return (
    <div className="result-container mt-[7rem] flex text-white justify-center items-center gap-[10rem] max-[400px]:gap-0">
        <div className="choice-container flex flex-col justify-normal items-center gap-9 max-[400px]:mt-[-13rem] max-[400px]:me-[-2rem] max-[400px]:gap-4 max-[400px]:flex-col-reverse">

            <p className=' uppercase font-bold max-[400px]:text-sm'>You picked</p>

            <div className={`choixUser animate-fadeInLeft bg-white rounded-[60%] p-8  border-[10px] ${borderColors[props.userChoice]}`}>           
                 {userChoixImage && <img className='w-[3.5rem] h-[3rem] max-[400px]:w-[1rem] max-[400px]:h-[1rem]  ' src={userChoixImage} alt={props.userChoice} />} 
            </div> 

        </div>

        <div className="result-message flex flex-col justify-normal items-center gap-5 max-[400px]:mt-[7rem]">
            <p className=' max-[400px]:me-[3rem] font-bold max-[400px]:text-[2rem]'>  
                {props.choices[props.userChoice].beats === props.computerChoice ? 'You Win' : (props.choices[props.computerChoice].beats === props.userChoice ?  ' You Lose' : 'DRAW')} 
            </p> 
            
            <button className='play bg-white text-black p-2 px-10 rounded-xl  border-white border-[2px] hover:bg-gray-200 max-[400px]:me-[3rem]' onClick={props.playAgain}>PLAY AGAIN</button>
        </div>

        <div className="choice-container flex flex-col justify-normal items-center gap-9 max-[400px]:mt-[-13rem] max-[400px]:ms-[-7rem] max-[400px]:gap-4 max-[400px]:flex-col-reverse">
            <p className=' uppercase font-bold max-[400px]:text-sm'>The house picked</p>
            <div className={`choixComputer animate-fadeInRight bg-white rounded-[60%] p-8  border-[10px] ${borderColors[props.computerChoice]}`}>
                {computerChoixImage && <img className='w-[3.5rem] h-[3rem] max-[400px]:w-[1rem] max-[400px]:h-[1rem]' src={computerChoixImage} alt={props.computerChoice} />}
            </div> 
        </div>
  </div>

  )
}






