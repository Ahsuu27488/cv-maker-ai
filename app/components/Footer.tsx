import React from 'react'

function Footer() {
  return (
    <div> 
        <footer className="w-full bg-gray-100 py-6 mt-10 border-t-2">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-600">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} ProFile Pro. All rights reserved.
      </p>
      
      {/* Footer Links */}
      <div className="flex space-x-6 mt-4 md:mt-0 underline underline-offset-1">
        <a href="#" className="hover:text-teal-600">Privacy Policy</a>
        <a href="#" className="hover:text-teal-600">Terms of Service</a>
        <a href="#" className="hover:text-teal-600">Contact</a>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer