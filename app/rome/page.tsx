"use client"

import Image from "next/image"
import Link from "next/link"

const ROMAN_WISDOM = [
  {
    latin: "Carpe diem",
    english: "Seize the day",
    author: "Horace",
    context: "From Odes, encouraging living in the present moment",
    meaning: "Make the most of the present time and give little thought to the future"
  },
  {
    latin: "Alea iacta est",
    english: "The die is cast",
    author: "Julius Caesar",
    context: "Spoken when crossing the Rubicon",
    meaning: "A point of no return has been reached; events have passed a point of no return"
  },
  {
    latin: "Mens sana in corpore sano",
    english: "A healthy mind in a healthy body",
    author: "Juvenal",
    context: "From Satire X",
    meaning: "Physical and mental well-being are equally important for a fulfilled life"
  },
  {
    latin: "Per aspera ad astra",
    english: "Through hardships to the stars",
    author: "Seneca",
    context: "Common Roman saying",
    meaning: "Difficulties and struggles lead to greatness and achievement"
  }
]

export default function Rome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e5d5] to-[#f5d5c5] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
            alt="Rome"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Roman Wisdom</h1>
              <p className="text-gray-200">Ancient wisdom from the Eternal City</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {ROMAN_WISDOM.map((wisdom, index) => (
            <div 
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-red-800 dark:text-red-400">
                  {wisdom.latin}
                </h2>
                <p className="text-2xl text-gray-800 dark:text-gray-200 font-serif italic">
                  "{wisdom.english}"
                </p>
                <div className="pt-4 border-t border-red-200 dark:border-red-900">
                  <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                    — {wisdom.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-2">
                    {wisdom.context}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {wisdom.meaning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 