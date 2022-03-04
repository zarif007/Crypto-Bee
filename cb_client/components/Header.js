import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import eth from '../assets/eth.png'
import ethCurrency from '../assets/ethCurrency.png'
import { FaWallet, FaHistory } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center flex-wrap`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    nav: `flex justify-between items-center`,
    navItemsContainer: `flex bg-gray-900 rounded-2xl mx-auto justify-center`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-2xl`,
    activeNavItem: `bg-[#20242A]`,
    buttonsContainer: `flex w-1/4 justify-end items-center`,
    button: `flex items-center bg-gray-900 rounded-xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-xl flex items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('Transfer')

    return (
        <div className={style.wrapper}>
          <div className={style.headerLogo}>
            <Image src={logo} alt='logo' height={80} width={80} />
          </div>
          <div className={style.nav}>
            <div className={style.navItemsContainer}>
              <div 
                className={`${style.navItem} ${selectedNav === 'Transfer' && 
                style.activeNavItem}`} 
                onClick={() => setSelectedNav('Transfer')}>
                  <span className='hidden sm:inline pr-1'>Transfer</span> <RiSendPlaneFill className='w-4 h-4' />
              </div>
              <div 
                className={`${style.navItem} ${selectedNav === 'History' && 
                style.activeNavItem}`} 
                onClick={() => setSelectedNav('History')}>
                  <span className='hidden sm:inline pr-1'>History</span> <FaHistory className='w-4 h-4' />
              </div>
            </div>

            <div className={style.buttonsContainer}>
              <div className={`${style.button} ${style.buttonPadding}`}>
                <div className={style.buttonIconContainer}>
                  <Image src={eth} alt='eth' height={20} width={20} />
                </div>
                <p className='hidden sm:inline'>Etherium</p>
              </div>
            </div>

            <div className={`${style.button} ${style.buttonPadding} w-full`}>
              <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                <p className='hidden sm:inline pr-1'>Connect Wallet</p> <FaWallet className='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header
