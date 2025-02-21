"use client"

import Image from "next/image"
import Link from "next/link"

const SWISS_SAYINGS = [
  {
    swiss: "S'Läbe isch keis Ponyhof",
    german: "Das Leben ist kein Ponyhof",
    english: "Life is not a pony farm",
    meaning: "Life isn't always easy - you have to face challenges"
  },
  {
    swiss: "Wer z'spoot chunt, muess näh was übrig blibt",
    german: "Wer zu spät kommt, muss nehmen was übrig bleibt",
    english: "Those who come too late must take what's left",
    meaning: "Being punctual and early gives you more opportunities"
  },
  {
    swiss: "Öppe drüü",
    german: "Ungefähr drei",
    english: "About three",
    meaning: "A typically Swiss way of being precise about being imprecise"
  },
  {
    swiss: "Nöd geschnurrt isch gnueg globt",
    german: "Nicht gemeckert ist genug gelobt",
    english: "Not complaining is praise enough",
    meaning: "Reflects the Swiss attitude that absence of criticism is a form of praise"
  }
]

export default function Zurich() {
  return (
    <div className="min-h-screen bg-[#f4f8fb] dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1200&q=80"
            alt="Zurich"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Swiss Wisdom</h1>
              <p className="text-gray-200">Proverbs from Swiss German culture</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {SWISS_SAYINGS.map((saying, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400">
                  {saying.swiss}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  {saying.german}
                </p>
                <p className="text-xl text-gray-800 dark:text-gray-200 font-serif">
                  "{saying.english}"
                </p>
                <p className="text-gray-600 dark:text-gray-400 border-t pt-4 mt-4">
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