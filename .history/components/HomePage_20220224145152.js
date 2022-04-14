import Image from 'next/image'
import React from 'react'

import FisrtHead from '../components/FisrtHead'
import Header from '../components/Header'

import Head from "next/head";

function HomePage() {
  return (
      <section >
           <Head>
        <title>Disney +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FisrtHead />
      <Header />
    <div className=' mx-auto shadow-2xl p-20 '>
       
    </div></section>
  )
}

export default HomePage