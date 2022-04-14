import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
      <section c>
    <div className='min-h-[cal(100vh-72px] '>
        <Image src="/images/prince.jpg" 
        width={100} height={100} objectFit="cover"
        layout='fill' className=''
        />
    </div></section>
  )
}

export default HomePage