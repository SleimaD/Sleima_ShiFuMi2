import React from 'react'
import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'
import '../Choices/Choices.css'
import Triangle from '../../assets/bg-triangle.svg'

export default function (props) {

  return (
    <div className='fightContainer flex flex-col justify-center items-center mt-16 w-[100%] gap-20 max-[400px]:mt-5 max-[400px]:gap-14'>
        <div className='flex items-center justify-between gap-[8rem] max-[400px]:gap-[4.5rem] '>
            <div className='paper bg-white rounded-[60%] p-8 border-[#576ff5] border-[10px] w-[35%] max-[400px]:flex max-[400px]:justify-center max-[400px]:items-center max-[400px]:p-3' onClick={() => props.play('paper')}>
                <img className='w-[100%] h-[3rem] rounded  max-[400px]:w-[50%]' src={Paper} alt="Paper" />
            </div>
            <div className='scissors bg-white rounded-[50%] p-8 border-[#F2AB26] border-[10px] w-[35%] max-[400px]:flex max-[400px]:justify-center max-[400px]:items-center max-[400px]:p-3' onClick={() => props.play('scissors')}>
                <img className='w-[100%] h-[3rem] max-[400px]:w-[50%]' src={Scissors} alt="Scissors" />
            </div>
        </div>

        <div>
            <div className='rock bg-white rounded-[50%] p-8 border-[#df3d5b] border-[10px] max-[400px]:p-4' onClick={() => props.play('rock')}>
                <img className='w-[3rem] max-[400px]:w-[2.7rem]' src={Rock} alt="Rock" />
            </div>
        </div>
        <img className='triangle absolute max-[400px]:w-[11rem]' src={Triangle} alt="" />
  </div>

  )
}






