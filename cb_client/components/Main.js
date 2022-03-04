import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import eth from '../assets/eth.png'
import Image from 'next/image'
import { MdOutlineArrowCircleDown } from "react-icons/md";

const Main = () => {
  
  const style = {
    wrapper: `w-screen flex items-center justify-center mt-32 p-1`,
    content: `bg-[#191B1F] w-[40rem] rounded-lg p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    arrowButtonDiv: `flex items-center justify-center -mt-4 -mb-4`,
    arrowButton: `w-8 h-8 bg-[#191B1F] rounded-full text-blue-500 border-4 border-[#191B1F]`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-lg p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-lg text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#2172E5] my-2 rounded-lg py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>
            Transfer
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input 
            type='text'
            className={style.transferPropInput}
            placeholder='0.00'
            pattern='[0-9]*[.,]?[0-9]*$'
            onChange={e => console.log(e)}
          />
          <div>
            <Image src={eth} height={40} width={40} />
          </div>
        </div>
        <div className={style.arrowButtonDiv}>
          <MdOutlineArrowCircleDown className={style.arrowButton} />
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0x...'
            onChange={e => console.log(e)}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={e => console.log(e)} className={style.confirmButton}>
          <span className='pr-2'>Send</span> <RiSendPlaneFill className='w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default Main
