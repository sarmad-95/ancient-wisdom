"use client"

import Image from "next/image"
import Link from "next/link"

const EGYPTIAN_WISDOM = [
  {
    hieroglyphic: "𓂀 𓃀 𓆣",
    transliteration: "Mdw nTr",
    english: "The eyes of the lord are everywhere",
    source: "The Maxims of Ptahhotep",
    period: "Old Kingdom, c. 2400 BCE",
    meaning: "Truth and justice will always prevail as nothing escapes divine observation"
  },
  {
    hieroglyphic: "𓃭 𓅓 𓊪",
    transliteration: "ir mAat",
    english: "Do what is right and just",
    source: "The Instructions of Amenemope",
    period: "New Kingdom, c. 1300 BCE",
    meaning: "Living according to Ma'at (truth, justice, and cosmic order) brings harmony"
  },
  {
    hieroglyphic: "𓄤 𓅱 𓊹",
    transliteration: "rx xwt",
    english: "Knowledge is power",
    source: "Ancient Egyptian Proverb",
    period: "Middle Kingdom, c. 2000 BCE",
    meaning: "Understanding and wisdom are the foundations of true strength"
  },
  {
    hieroglyphic: "𓃻 𓄿 𓆓",
    transliteration: "anx wDA snb",
    english: "Life, Prosperity, Health",
    source: "Common Egyptian Blessing",
    period: "All Periods",
    meaning: "The three fundamental wishes for a good life in ancient Egyptian culture"
  }
]

export default function Cairo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf6e3] to-[#f5e6d3] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80"
            alt="Cairo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Egyptian Wisdom</h1>
              <p className="text-gray-200">Ancient teachings from the land of the Pharaohs</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {EGYPTIAN_WISDOM.map((wisdom, index) => (
            <div 
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-serif text-yellow-800 dark:text-yellow-500">
                  {wisdom.hieroglyphic}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  {wisdom.transliteration}
                </p>
                <p className="text-2xl text-gray-800 dark:text-gray-200 font-serif">
                  "{wisdom.english}"
                </p>
                <div className="pt-4 border-t border-yellow-800/20">
                  <p className="text-sm text-yellow-800 dark:text-yellow-500 mb-2">
                    {wisdom.source}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-2">
                    {wisdom.period}
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