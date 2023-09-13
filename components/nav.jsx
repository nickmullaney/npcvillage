<<<<<<< HEAD
'use client';

=======
>>>>>>> b53a0355dc2f85aed967787077e5a4cb2708351f
import React from 'react'
import Link from 'next/link'
import Image from 'next/image' //optimized image loading
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/assets/images/logo.png" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/myCharacters">My Characters</Link>
      <Link href="/login">Login</Link>
      <Link href="/api/auth/signin">Sign In</Link>
      <Link href="/api/auth/signout">Sign Out</Link>
      <Link href="/api/auth/session">Session</Link>
    </nav>

  )
}

export default nav