'use client'

import { NavLinks } from "@/utils/NavLinks"
import InfoEggDropdown from "./dropdown/InfoEggDropdown"
import Link from "next/link"
import Image from "next/image"
import { AlignJustify, X } from "lucide-react"

import { useState } from "react"
import { usePathname } from 'next/navigation';
import MenuEggDropdown from "./dropdown/MenuEggDropdown"


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const pathname = usePathname()

    
    const openNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }

    const isActiveHome = ( pathname === '/' ) 
          ? `relative w-fit font-semibold after:content-[''] 
              after:h-[4px] after:block after:bg-emerald-500
              hover:after:w-full hover:after:transition-all 
              after:duration-500
            ` 
          : ''
    
    const isActiveAbout = ( pathname === '/about' ) 
          ? `relative w-fit font-semibold after:content-[''] 
              after:h-[4px] after:block after:bg-emerald-500
              hover:after:w-full hover:after:transition-all 
              after:duration-500
            ` 
          : ''

    const isActiveContact = ( pathname === '/contact' ) 
          ? `relative w-fit font-semibold after:content-[''] 
              after:h-[4px] after:block after:bg-emerald-500
              hover:after:w-full hover:after:transition-all 
              after:duration-500
            ` 
          : ''

  return (
    <div className="bg-[var(--main-color)] w-full z-[999] fixed top-0 left-0 shadow-xl/20 overflow-hidden">
      <div className="container flex mx-auto justify-between items-center py-1">
          <div>
            <Link href={'/'} className="flex items-center">
              <Image 
                src="/images/element/logo1.png" 
                alt="logo" 
                width={100} 
                height={100} 
                className="w-18 h-18 rounded-full object-cover p-2"
              />
              <h1 className="uppercase font-bold text-[20px] sm:text-[25px] md:text-[29px] line-clamp-4 leading-6">the magic eggs</h1>
            </Link>
            
          </div>
          <div className="hidden md:flex overflow-hidden justify-center items-center gap-4">
          
            <Link href={'/'} className={`cursor-pointer ${isActiveHome} `}> หน้าแรก </Link>
            <InfoEggDropdown />
            <MenuEggDropdown />
            <Link href={'/about'} className={`cursor-pointer ${isActiveAbout}`}> เกี่ยวกับ </Link>
            <Link href={'/contact'} className={`cursor-pointer ${isActiveContact}`}> ติดต่อ </Link>

            {/* {
              NavLinks.map((item, index) => {

                const isActive = ( pathname === item.path ) ? 
                `relative w-fit font-semibold after:content-[''] 
                  after:h-[4px] after:block after:bg-emerald-500
                  hover:after:w-full hover:after:transition-all 
                  after:duration-500
                ` 
                
                : ''

                return (
                  <Link 
                    key={index} href={item.path} 
                    className={`cursor-pointer ${isActive}`}
                  >
                    <h3 className="
                         hover:text-white px-3 hover:after:transition-all 
                          after:duration-500
                ` 
                    ">
                      {item.label} 
                    </h3>
                  </Link>
                )
              })
            } */}
          </div>


          {/* mobile mode */}
          <div onClick={openNav} className="z-[888] flex md:hidden">
              {
                  nav ? <X color="white" className="w-8 h-8 cursor-pointer md:hidden" /> : <AlignJustify className="w-8 h-8 cursor-pointer md:hidden" />
              }
          </div>
          <div className={`
                  fixed top-0 left-0 w-full h-screen bg-black/90 z-[200] 
                  transform transition-transform duration-300  
                  ${ nav ? 'translate-x-0' : '-translate-x-full' }
          `}>
              <div className="flex flex-col  md:hidden justify-center items-center h-full space-y-8 text-2xl">
                  {/* {
                      NavLinks.map((item, index) => {
                          return (
                              <Link key={index} href={item.path} onClick={closeNav}>
                                  <h3 className="hover:text-amber-500 hover:font-semibold text-white"> {item.label} </h3>
                              </Link>
                          )
                      })
                  } */}

                  
                    <Link href={'/'} className={`cursor-pointer text-[var(--main-color)] font-bold ${isActiveHome} `} onClick={closeNav}> หน้าแรก </Link>
                    <InfoEggDropdown />
                    <MenuEggDropdown />
                    <Link href={'/about'} className={`cursor-pointer text-[var(--main-color)] font-bold ${isActiveAbout}`} onClick={closeNav}> เกี่ยวกับ </Link>
                    <Link href={'/contact'} className={`cursor-pointer text-[var(--main-color)] font-bold ${isActiveContact}`} onClick={closeNav}> ติดต่อ </Link>
                  
              </div>
          </div>
      </div>
    </div>
  )
}
export default Navbar