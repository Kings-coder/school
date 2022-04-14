import Image from "next/image"
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from "@heroicons/react/solid"


function Header() {
    return( 
        <div className="sticky bg-[#0B345C] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12 justify-center">
           {/* <Image src="/images/logo.svg" width={80} height={80}
           className="cursor-pointer"
           /> */}
           <div className="hidden ml-10 md:flex items-center space-x-9">
              
           <a href={H} className="header-link group">
                  <span className="span">Home</span>
               </a>
               <a className="header-link group">
                  <span className="span">Department</span>
               </a>
               <a className="header-link group">
           
            <span className="span">Confrences</span>
          </a>
          <a className="header-link group">
           
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
           
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            {/* <img src="/images/movie-icon.svg" alt="" className="h-5" /> */}
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            {/* <img src="/images/series-icon.svg" alt="" className="h-5" /> */}
            <span className="span">Series</span>
          </a>
           </div>
           {/* <button onClick={()=> signIn("google", {callbackUrl: "http://localhost:3000/"})} className="ml-auto border px-4 py-1.5 -tracking-wide uppercase hover:bg-white hover:text-black ">Login</button> */}
        </div>
    )
}

export default Header
