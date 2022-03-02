import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import eth from '../assets/eth.png'
import ethCurrency from '../assets/ethCurrency.png'

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center flex-wrap`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    nav: `flex justify-center items-center`,
    navItemsContainer: `flex bg-gray-900 rounded-2xl`,
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
                  Transfer <i class="fas fa-envelope-open-dollar"></i>
              </div>
              <div 
                className={`${style.navItem} ${selectedNav === 'History' && 
                style.activeNavItem}`} 
                onClick={() => setSelectedNav('History')}>
                  History
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

            <div className={`${style.button} ${style.buttonPadding}`}>
              <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                <p className='hidden sm:inline'>Connect Wallet</p> <i class="fas fa-wallet"></i>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header
