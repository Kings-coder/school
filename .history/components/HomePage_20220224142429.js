import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
    <div>
        <Image src="/public/images/prince.jpg" 
        width={100} height={100} objectFit=""
        />
    </div>
  )
}

export default HomePage