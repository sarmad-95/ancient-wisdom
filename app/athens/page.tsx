"use client"

import Image from "next/image"
import Link from "next/link"

const GREEK_WISDOM = [
  {
    greek: "γνῶθι σεαυτόν",
    pronunciation: "gnōthi seauton",
    english: "Know thyself",
    origin: "Temple of Apollo at Delphi",
    meaning: "Understanding oneself is the beginning of all wisdom"
  },
  {
    greek: "μηδὲν ἄγαν",
    pronunciation: "mēden agan",
    english: "Nothing in excess",
    origin: "Ancient Greek Sages",
    meaning: "Moderation in all things leads to harmony and balance"
  },
  {
    greek: "ἓν οἶδα ὅτι οὐδὲν οἶδα",
    pronunciation: "hen oida hoti ouden oida",
    english: "I know that I know nothing",
    origin: "Socrates",
    meaning: "True wisdom begins with acknowledging our own ignorance"
  },
  {
    greek: "ἀρετὴ μέσον",
    pronunciation: "aretē meson",
    english: "Excellence lies in the middle",
    origin: "Aristotle",
    meaning: "Virtue is found in the balance between extremes"
  }
]

export default function Athens() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80"
            alt="Athens"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Ancient Greek Wisdom</h1>
              <p className="text-gray-200">Timeless philosophy from the cradle of Western civilization</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {GREEK_WISDOM.map((wisdom, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-blue-500"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-blue-600 dark:text-blue-400">
                  {wisdom.greek}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  {wisdom.pronunciation}
                </p>
                <p className="text-2xl text-gray-800 dark:text-gray-200 font-serif">
                  "{wisdom.english}"
                </p>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Origin: {wisdom.origin}
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