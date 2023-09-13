'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' //optimized image loading
import Logo from '@/assets/images/logo.png'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt3'>
      
      <Link href="/" className='flex gap-2 flex-center'>
          <Image className='rounded-lg m-2' src={Logo} width={100} height={50} />
        
      </Link>
      <Link href="/">Home</Link>
      <Link href="/about" className=''>About</Link>
      <Link href="/myCharacters">My Characters</Link>
      <Link href="/login">Login</Link>
      <Link href="/api/auth/signin">Sign In</Link>
      <Link href="/api/auth/signout">Sign Out</Link>
      <Link href="/api/auth/session">Session</Link>
    </nav>

  )
}

export default nav