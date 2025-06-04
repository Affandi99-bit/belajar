import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../constant'

const BelajarModal = ({ item, onClose }) => {
    if (!item) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 relative max-w-xs">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-2xl"
                >
                    ×
                </button>
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Huruf {item.name[0].toUpperCase()} - {item.name}
                </h2>
                <img src={item.gif} alt={item.name} className="w-40 h-40 object-contain mx-auto" />
            </div>
        </div>
    )
}

const Belajar = () => {
    const [selectedItem, setSelectedItem] = useState(null)

    // Group by starting letter
    const grouped = items.reduce((acc, item) => {
        const letter = item.name[0].toUpperCase()
        if (!acc[letter]) acc[letter] = item
        return acc
    }, {})

    const letters = Object.keys(grouped).sort()

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-slate-600 bg-[url('./assets/image/bg1.webp')] bg-center bg-cover bg-no-repeat relative">
            <Link
                to="/"
                className="absolute top-1 left-1 rounded-full p-3 bg-yellow-400 hover:p-5 transition-all ease-in-out duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            </Link>

            <div className="flex flex-wrap gap-4 justify-center items-center p-4">
                {letters.map((letter) => (
                    <div
                        key={letter}
                        onClick={() => setSelectedItem(grouped[letter])}
                        className="flex items-center text-2xl font-semibold justify-center size-20 bg-blue-400 hover:bg-red-500 rounded-xl cursor-pointer transition-all ease-in-out duration-300 border border-white tracking-wider"
                    >
                        {letter}
                    </div>
                ))}
            </div>

            {selectedItem && (
                <BelajarModal item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </main>
    )
}

export default Belajar
