import React from 'react'
import Image from "next/image"
import FisrtHead from './FisrtHead'
import Header from './Header'

function MainBody() {
  return (
      <div>
          {/* <Head>
        <title>Disney +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      
      <FisrtHead />
      <Header />
          <div className='pt-7 font-bold text-4xl text-black text-center'>FALCULTY OF SCIENCE AND TECHNOLOGY</div>
    <div className='p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5'>

<div className=' max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Head of Department</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        {/*  */}
      </div>
</div>
{/* Card 2 */}
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Student</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
{/* Card 3 */}
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
{/* Card 4 */}
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
{/* Card 5 */}
<div className=' max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>

<div className=' max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        {/*  */}
      </div>
</div>
{/* Card 2 */}
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
{/* Card 3 */}
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
{/* Card 4 */}
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
{/* Card 5 */}
<div className=' max-w-sm rounded overflow-hidden shadow-lg'>
    
<Image src="/images/hero-background.jpg" width={300} height={220} objectFit="cover"
           className="cursor-pointer rounded-lg transition ease-in-out hover:scale-105"
           /> 
           <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        
      </div>
</div>
    </div></div>
  )
}

export default MainBody