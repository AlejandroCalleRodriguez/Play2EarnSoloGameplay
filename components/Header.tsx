import Link from 'next/link'
import React from 'react'
import ConnectBtn from './ConnectBtn'

const Header: React.FC = () => {
  return (
    <header className="shadow-sm shadow-blue-900 py-4 text-blue-700">
      <main className="lg:w-2/3 w-full mx-auto flex justify-between items-center flex-wrap">
        <Link href={'/'} className="text-2xl mb-2">
          <span className="text-gray-300">Gameplay Only </span>
          <span>Alejandro Calle Rodríguez</span>
        </Link>
      </main>
    </header>
  )
}

export default Header
