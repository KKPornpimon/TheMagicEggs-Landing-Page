'use client'

import { NavLinks } from "@/utils/NavLinks"
import InfoEggDropdown from "./dropdown/InfoEggDropdown"
import Link from "next/link"
import Image from "next/image"
import { AlignJustify, X } from "lucide-react"

import { useState } from "react"
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const pathname = usePathname()
  
      const openNav = () => {
          setNav(!nav)
      }
      const closeNav = () => {
          setNav(false)
      }

  return (
    <div className="bg-[var(--main-color)] w-full z-[999] fixed top-0 left-0 shadow-xl/20">
      <div className="container flex mx-auto justify-between items-center py-1">
          <div className="flex items-center">
            <Link href={'/'}>
              <Image 
                src="/images/element/logo1.png" 
                alt="logo" 
                width={100} 
                height={100} 
                className="w-18 h-18 rounded-full object-cover p-2"
              />
            </Link>
            <h1 className="uppercase font-bold text-[20px] sm:text-[25px] md:text-[29px] line-clamp-4 leading-6">the magic eggs</h1>
          </div>
          <div className="hidden md:flex overflow-hidden">
            {/* <InfoEggDropdown /> */}
            {
              NavLinks.map((item, index) => {

                const isActive = ( pathname === item.path ) ? 
                `text-0 w-fit px-4 relative after:content-[''] 
                  after:h-[4px] after:block after:bg-emerald-500
                ` 
                : ''

                return (
                  <Link 
                    key={index} href={item.path} 
                    className={`text-gray-700 cursor-pointer ${isActive}`}
                  >
                    <h3 className="
                        relative hover:text-white w-fit block px-4
                        hover:after:content-[''] hover:after:h-[3px] 
                        hover:after:block hover:after:bg-emerald-500 
                        hover:after:w-full hover:after:transition-all 
                        after:duration-500
                    ">
                      {item.label} 
                    </h3>
                  </Link>
                )
              })
            }
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
              <div className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
                  {
                      NavLinks.map((item, index) => {
                          return (
                              <Link key={index} href={item.path} onClick={closeNav}>
                                  <h3 className="hover:text-amber-500 hover:font-semibold text-white"> {item.label} </h3>
                              </Link>
                          )
                      })
                  }
              </div>
          </div>
      </div>
    </div>
  )
}
export default Navbar