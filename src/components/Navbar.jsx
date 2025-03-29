import React, { useRef } from 'react'

const Navbar = () => {
    const navContainerRef = useRef(null)

    return (
        <div ref={navContainerRef} className=' fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>

        </div>
    )
}

export default Navbar