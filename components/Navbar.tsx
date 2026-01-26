'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import posthog from 'posthog-js'

const Navbar = () => {
  const handleNavClick = (linkName: string, href: string) => {
    posthog.capture('nav_link_clicked', {
      link_name: linkName,
      link_href: href,
    });
  };

  return (
    <header>
        <nav>
            <Link href="/" className='logo' onClick={() => handleNavClick('Logo', '/')}>
                <Image src="/icons/logo.png" alt="Dev Events Logo" width={24} height={24} />
                <p>DevEvent</p>
            </Link>

            <ul>
                <Link href="/explore" onClick={() => handleNavClick('Home', '/explore')}>Home</Link>
                <Link href="/about" onClick={() => handleNavClick('Events', '/about')}>Events</Link>
                <Link href="/contact" onClick={() => handleNavClick('Create Event', '/contact')}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar