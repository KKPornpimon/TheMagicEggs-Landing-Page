'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InfoEggs } from "@/utils/NavLinks";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const InfoEggDropdown = () => {

  const pathname = usePathname()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex justify-center items-center cursor-pointer text-[var(--main-color)] md:text-current font-bold md:font-normal">
            ข้อมูลไข่ <ChevronDown size={20}  />
          </div> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className={'bg-white z-[999]'}>
          {
            InfoEggs.map((item, index) => {

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
export default InfoEggDropdown;
