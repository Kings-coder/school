import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
    <div >
        <Image src="/images/prince.jpg" 
        width={100} height={100} objectFit="cover"
        layout='fill'
        />
    </div>
  )
}

export default HomePage