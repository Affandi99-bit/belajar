import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../constant'
const getRandomQuestion = () => {
    const validItems = items.filter(item => /^[A-Z]/i.test(item.name))

    const correctItem = validItems[Math.floor(Math.random() * validItems.length)]
    const correctLetter = correctItem.name[0].toUpperCase()

    const wrongItems = validItems.filter(item => item.name[0].toUpperCase() !== correctLetter)
    const wrongItem = wrongItems[Math.floor(Math.random() * wrongItems.length)]

    const choices = Math.random() > 0.5
        ? [correctItem, wrongItem]
        : [wrongItem, correctItem]

    return {
        letter: correctLetter,
        correctName: correctItem.name,
        choices,
    }
}

const Bermain = () => {
    const [question, setQuestion] = useState(getRandomQuestion())
    const [selected, setSelected] = useState(null)
    const [answered, setAnswered] = useState(false)

    const handleAnswer = (choiceName) => {
        if (answered) return
        setSelected(choiceName)
        setAnswered(true)
    }

    const nextQuestion = () => {
        setQuestion(getRandomQuestion())
        setSelected(null)
        setAnswered(false)
    }

    const isCorrect = selected === question.correctName

    return (
        <main
            className="w-full h-screen flex flex-col items-center justify-center bg-[url('./assets/image/bg1.webp')] bg-center bg-cover bg-no-repeat">
            <Link
                to={"/"}
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
            </Link>
            <p className="py-5 font-semibold font-major tracking-widest text-dark animate-bounce">Manakah yang berawalan huruf {question.letter}?</p>
            <main className="">
                <div className="flex justify-center gap-4">
                    {question.choices.map((item) => (
                        <div
                            key={item.name}
                            className={`overflow-hidden cursor-pointer border-4 rounded-xl transition-all duration-300 ${answered
                                ? item.name === question.correctName
                                    ? 'border-green-500'
                                    : item.name === selected
                                        ? 'border-red-500'
                                        : 'border-transparent'
                                : 'border-transparent'
                                }`}
                            onClick={() => handleAnswer(item.name)}
                        >
                            <img src={item.gif} alt={item.name} className="w-32 h-32 object-contain" />
                        </div>
                    ))}
                </div>
                {answered && (
                    <>
                        <p className={`mt-4 font-minor font-bold tracking-widest ${isCorrect ? 'text-dark' : 'text-red-500'}`}>
                            {isCorrect ? 'Benar!' : `Salah! Jawaban benar: ${question.correctName}`}
                        </p>
                        <button
                            onClick={nextQuestion}
                            className="mt-4 px-4 py-2 rounded-lg font-minor font-bold tracking-widest text-light bg-dark"
                        >
                            Pertanyaan Berikutnya
                        </button>
                    </>
                )}
            </main>
        </main>
    )
}

export default Bermain