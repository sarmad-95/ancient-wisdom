"use client"

import Image from "next/image"
import Link from "next/link"

const AUSTRIAN_SAYINGS = [
  {
    german: "Morgenstund hat Gold im Mund",
    english: "The morning hour has gold in its mouth",
    meaning: "Similar to 'The early bird catches the worm' - emphasizing the value of starting early"
  },
  {
    german: "Alles hat ein Ende, nur die Wurst hat zwei",
    english: "Everything has an end, only the sausage has two",
    meaning: "A humorous way of saying that all things must come to an end"
  },
  {
    german: "Das Leben ist kein Ponyhof",
    english: "Life is not a pony farm",
    meaning: "Life isn't always easy or fun - you have to deal with difficulties"
  },
  {
    german: "Übung macht den Meister",
    english: "Practice makes the master",
    meaning: "Similar to 'Practice makes perfect' - skills improve with practice"
  }
]

export default function Vienna() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=1200&q=80"
            alt="Vienna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Austrian Wisdom</h1>
              <p className="text-gray-200">Traditional proverbs from the heart of Europe</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {AUSTRIAN_SAYINGS.map((saying, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform"
            >
              <div className="relative pl-6 border-l-4 border-amber-400">
                <h2 className="text-2xl font-semibold text-amber-600 dark:text-amber-400 mb-4">
                  {saying.german}
                </h2>
                <p className="text-xl text-gray-800 dark:text-gray-200 mb-3 font-serif italic">
                  "{saying.english}"
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {saying.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 