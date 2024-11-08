import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <div>
        <header className="drop-shadow-md w-full py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold text-teal-600">
          ProFile Pro
        </Link>
        
        {/* Navigation Links */}
        <nav className="space-x-6 underline underline-offset-4">
          <Link href="/about" className=" text-gray-600 hover:text-teal-600">
            About
          </Link>
          <Link href="/templates" className="text-gray-600 hover:text-teal-600">
            Templates
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-teal-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header