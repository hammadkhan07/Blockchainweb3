import React from 'react'
import Image from 'next/image'
import { CgInfo } from 'react-icons/cg'



// Hero.js
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/9KlOmj2LnRmmvgeTSBKX8cZRNQtvO_Jdh-SyDNjzw8DVjJftfOI8bBsdQWcfiAbr4mOC-e42onTm6XxugzJAKtwSbc-X8a1PAQ-TP9A=s650')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-bold`,
    description: `text-[#8a939b] container-[350px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-15 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
  return (
  <div className={style.wrapper}>
   <div className={style.container}>
    <div className={style.contentWrapper}>
     <div className={style.copyContainer}>
        <div className={style.title}>
            Discover, Collect, and Sell Extraordinary NFT&apos;s
        </div>
        <div className={style.description}>
            A Marketplace where you can buy the world&apos;s <br/> best 
            NFT in very low price
        </div>
        <div className={style.ctaContainer}>
            <button className={style.accentedButton}>Explore</button>
            <button className={style.button}>Create &nbsp;</button>
        </div>
     </div>
     <div className={style.cardContainer}>
        <img className="rounded-t-lg" src='https://lh3.googleusercontent.com/9KlOmj2LnRmmvgeTSBKX8cZRNQtvO_Jdh-SyDNjzw8DVjJftfOI8bBsdQWcfiAbr4mOC-e42onTm6XxugzJAKtwSbc-X8a1PAQ-TP9A=s450' 
        alt='' />
        <div className={style.infoContainer}>
        <img className="h-[2.25rem] rounded-full" src="https://lh3.googleusercontent.com/UW-Aqhd0PhvKeTz2Lqev7a3obxAfZ6Nq3VXoim4k7_IquiaHAJaX4kk2MeBFv3Ff0ysdczjXxtY0R87VI_5brUjU69_2YMNC1_FbXw=s60" 
        alt='' />
         <div className={style.author}>
            <div className={style.name}>Maddy Koserck</div>
            <a className='text-[#1868b7]' href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/47050624504478471478915337056063588106451395168756074145226306873065950150657'>
              Bora-Bora
            </a>
         </div>
         <div className={style.infoIcon}>
         <CgInfo />
         </div>
     </div>
     </div>
    </div>
   </div>
  </div>
  )
}

export default Hero