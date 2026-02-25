'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Topbar from './Topbar'
import { getMedia } from '../../lib/media'
import { THeaderData } from '../../types/layout'

export default function Header({ data }: { data: THeaderData }) {
  const logoUrl = getMedia(data.logo)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsSticky(window.scrollY > heroHeight * 0.9)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Topbar email={data.email} phone={data.phone} socialLinks={data.socialLinks} />

      <header className="main-header">
        <div className={`header-sticky ${isSticky ? 'active' : ''}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo */}
              <Link href="/" className="navbar-brand">
                {logoUrl && (
                  <Image src={logoUrl.url} alt={logoUrl.alt} width={180} height={60} priority />
                )}
              </Link>

              {/* Main Menu */}
              <div className="collapse navbar-collapse main-menu">
                <ul className="navbar-nav mr-auto" id="menu">
                  {data.navItems?.map((item) => (
                    <li key={item.id} className={`nav-item ${item.hasSubMenu ? 'submenu' : ''}`}>
                      <Link href={item.link} className="nav-link">
                        {item.label}
                      </Link>

                      {item.hasSubMenu && item.subMenuItems && (
                        <ul>
                          {item.subMenuItems.map((subItem) => (
                            <li key={subItem.id} className="nav-item">
                              <Link href={subItem.link || '#'} className="nav-link">
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  )
}
