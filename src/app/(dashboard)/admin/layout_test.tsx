'use client'

import SideBar from './Sidebar'
import HeaderDashBoard from './Header'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
           <div className="flex">
           <SideBar  tab="houses" />

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
               {children}
             </div>
        </div>
  
    </div>
  )
}
