import React from 'react'
import Rules from '../../assets/image-rules.svg'

export default function Modal(props) {
  return (
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50 max-[400px]:">
          <div className="bg-white p-10 rounded-lg shadow-lg relative max-[400px]:h-[100vh] max-[400px]:flex max-[400px]:flex-col $ max-[400px]:items-center">
            <h2 className="text-2xl font-bold mb-10 max-[400px]:mb-[8rem]">RULES</h2>
            <img src={Rules} alt="GameRules" className="mb-4 max-[400px]:mt-[-2rem]" />
            <button onClick={props.myModal} className="absolute top-3 right-5 text-black text-3xl leading-none hover:text-red-700 focus:outline-none max-[400px]:bottom-0 max-[400px]:top-[30rem] max-[400px]:right-[11rem]">
              &times;
            </button>
          </div>
        </div>

  )
}
