import React from 'react'
import Image from 'next/image'
import Logo from '../assets/LOGO.png'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'





// Header.js
const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.5rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[120px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[1.5rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-serif font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
    button: `bg-[#04111d] mr-8 flex items-center py-1 px-8 border-zinc-600 rounded-none cursor-pointer`,
    buttonIcon: `text-xl`,
    buttonText: `ml-2 text-lg font-semibold`,
  }




const Header = () => {
  return (
    <div className={style.wrapper}>
        <Link href='/'>
            <div className={style.logoContainer}>
                <Image src={Logo} height={40} width={42} />
                <div className={style.logoText}>BlockNFT</div>
            </div>
        </Link>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch />
            </div>
            <input className={style.searchInput} 
            placeholder='Search items, Collections and Accounts' 
            />
        </div>
        <div className={style.headerItems}>
            <Link href='/collections/0xD8fF8Ce42DBFB53d657F5259fC9f9fd28848b506'>
        <div className={style.headerItem}> Collections </div>
        </Link>
        <div className={style.headerItem}> Explore </div>
        <div className={style.headerItem}> Stats </div>
        <div className={style.headerItem}> Resources </div>

        {/* <div className={style.headerIcon}>
            <CgProfile />
        </div> */}
        <div className={`${style.button} bg-[04111d] text-white border-solid border-2 border-white-900 hover:bg-[#4c505c]`}>
            <div className={style.buttonText}>Connect Wallet</div>
            &nbsp;&nbsp;<MdOutlineAccountBalanceWallet className={style.buttonIcon} />
          </div>
        </div>
    </div>
  )
}

export default Header