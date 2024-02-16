import React from 'react'
import Logo from '../../assets/logo.svg'

export default function Title(props) {
  return (
    <div className=" border-gray-500 border-[2px] mt-8 flex justify-between p-5 w-[40%] rounded-xl mb-5 max-[400px]:w-[70%]">
            <div className=' text-white font-bold flex flex-col justify-center'>
                <img className=' w-[70%]' src={Logo} alt="" />
            </div>
            <div className='score bg-white text-blue-950 w-[8rem] flex flex-col justify-center items-center rounded-xl p-2 gap-2 max-[400px]:w-[6rem]'>
                <h1 className='text-[1rem] text-blue-700 max-[400px]:text-[0.5rem]'>SCORE</h1>
                <p className=' font-bold text-gray-700 text-4xl max-[400px]:text-[2rem]'>{props.score}</p>
            </div>
    </div>
  )
}
