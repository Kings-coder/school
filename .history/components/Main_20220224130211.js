import React from 'react'
import Image from "next/image"
function MainBody() {
  return (
    <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
<div className='rounded overflow-hidden shadow-lg'>
<Image src="/images/hero-background.jpg" w
           className="cursor-pointer"
           /> 
</div>

    </div>
  )
}

export default MainBody