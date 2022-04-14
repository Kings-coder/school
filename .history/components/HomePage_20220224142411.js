import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
    <div>
        <Image src="/public/images/prince.jpg" 
        width={100} height
        />
    </div>
  )
}

export default HomePage