'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuEggs } from "@/utils/NavLinks";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuEggDropdown = () => {

  const pathname = usePathname()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="
                  flex justify-center items-center 
                  cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 
                  hover:decoration-emerald-500 hover:transition-all hover:duration-500
                  text-[var(--main-color)] md:text-current font-bold md:font-normal
          ">
            เมนูไข่
          </div> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className={'bg-white z-[1000]'}>
          {
            MenuEggs.map((item, index) => {

              const isActive = ( pathname === item.path ) ? 
                `relative w-fit font-semibold after:content-[''] 
                  after:h-[4px] after:block after:bg-emerald-500
                  hover:after:w-full hover:after:transition-all 
                  after:duration-500
                ` 
                
                : ''

              return (
                  <DropdownMenuItem key={index}> 
                    <Link 
                      href={item.path} 
                      className={`cursor-pointer hover:text-[var(--highlight)] ${isActive}`}
                    > 
                      {item.label} 
                    </Link>
                  </DropdownMenuItem>
              )
            })
          }          
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default MenuEggDropdown;
