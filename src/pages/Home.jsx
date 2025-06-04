import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <main className="bg-[url('./assets/image/bg1.webp')] bg-center bg-cover bg-no-repeat">
            <main className="w-full h-screen flex flex-col items-center justify-center">
                <p className="font-bold my-5 text-3xl tracking-widest font-minor text-ter animate-bounce">
                    MENGENAL ALPHABET
                </p>
                <Link to={"/menu"}
                    className="p-5 bg-sec hover:bg-ter rounded-full flex items-center justify-center hover:p-7 cursor-pointer transition-all ease-in-out duration-300"
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
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                    </svg>
                </Link>
            </main>
        </main >
    )
}

export default Home