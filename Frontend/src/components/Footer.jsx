import React from 'react'

function Footer() {
  return (
    <footer className="py-8 relative  bottom-0 w-full min-w-full">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Logo</h4>
          <ul className='flex gap-4'>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Service</h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Our Service</h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact us</h4>
          <ul>
            <li>phone</li>
            <li>e-mail</li>
            <li>localisation</li>
          </ul>
        </div>
      </div>
    </footer>


  )
}

export default Footer