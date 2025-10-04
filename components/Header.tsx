import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'

const Header = () => {
  return (
    <div className='sticky top-0  header'>
        <div className='container header-wrapper '>

            <Link href='/'>
                <Image src="public/assets/icons/logo.svg" alt="Stock Buddy Logo"  width={140} height={32} className='h-8 w-auto cursor-pointer'/>
            </Link>
            <nav className='hidden sm:block '>
                <NavItems/>
            </nav>
            {/*User Dropdown*/}
        </div>
        </div>
  )
}

export default Header