"use client"
import { NAVITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {


    const pathname:string = usePathname()
    const isActive = (path:string) => {
        if( path === '/') return pathname === '/';
        return pathname.startsWith(path)
    }
    return (
        <ul className='flex flex-col sm:flex-row p-2 gap-3  sm:gap-10 font-medium '>
            {NAVITEMS.map(({href, title})=>(
                <li key={href}>
                    <Link href={href} className={`hover:text-yellow-200 cursor-pointer transition-colors ${
                        isActive(href)? 'text-gray-100' : ''
                    }`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>

)
}

export default NavItems