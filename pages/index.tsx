import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'



// index.js
const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] hover:bg-cyan-300 w-96 p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-left text-white`,
  button2: `border border-[#040505] bg-[#262929] hover:bg-cyan-900 w-96 p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-left text-white`,
  details: `text-lg text-center text=[#fff] font-semibold mt-4`,
}


export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName == '' ? ` ${userName}`: ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    
    ;(async () => {
    const userDoc = {
    _type: 'users',
    _id: address,
    userName: 'Unnamed',
    walletAddress: address,
    }
    
    const result = await client.createIfNotExists(userDoc)
    welcomeUser(result.userName)
    })()
    
    }, [address]) 
  

  return (
    <div className={style.wrapper}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
{address ? (
    <>
  <Header />
  <Hero />
  </>
) : (
  <div className={style.walletConnectWrapper}>
 <button
 className={style.button}
 onClick={() => connectWallet("injected")}
 >
 Connect With Metamask
 </button>
 <button
 className={style.button2}
 >
 Connect With Safepal
 </button>
 <div className={style.details}>
 You need chrome to <br />
 be able to run this app
 </div>
 </div>
 )}
 </div>
  )
}

