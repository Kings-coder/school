import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
      <section className=' mx-auto shadow-2xl p-14 '>
    <div >
        <Image src="/images/prince.jpg" 
        width={1500} height={500} objectFit="cover"
        className=''
        />
    </div></section>
  )
}

export default HomePage