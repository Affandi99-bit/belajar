import React from 'react'

const Bermain = () => {
    return (
        <main
            className="w-full h-screen flex flex-col items-center justify-center bg-[url('./assets/image/bg1.webp')] bg-center bg-cover bg-no-repeat">
            <a
                href="/home.html"
                className="absolute top-1 left-1 rounded-full p-3 bg-yellow-400 hover:p-5 transition-all ease-in-out duration-300"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
            >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            </a>
            <p className="py-5 font-semibold">Manakah yang berawalan huruf A?</p>
            <main className="flex flex-col md:flex-row items-center justify-center gap-5">
                <button
                    onclick='alert("Kamu benar")'
                    className="flex flex-col items-center justify-center size-56 rounded-xl cursor-pointer transition-all ease-in-out duration-300 border border-yellow-200 hover:border-black overflow-hidden font-bold text-xl tracking-wider"
                >
                    <img src="/assets/chicken.webp" alt="" />
                </button>
                <button
                    onclick='alert("Kamu salah")'
                    className="flex flex-col items-center justify-center size-56 rounded-xl cursor-pointer transition-all ease-in-out duration-300 border border-yellow-200 hover:border-black overflow-hidden font-bold text-xl tracking-wider"
                >
                    <img src="/assets/horse.webp" alt="" />
                </button>
            </main>
        </main>
    )
}

export default Bermain