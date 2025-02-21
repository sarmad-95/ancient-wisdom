"use client"

import Image from "next/image"
import Link from "next/link"

const DANISH_SAYINGS = [
  {
    danish: "Det er den første fugl, der fanger ormen",
    english: "It's the first bird that catches the worm",
    meaning: "Similar to 'The early bird catches the worm' - emphasizing the advantage of being first or early"
  },
  {
    danish: "Der er ingen ko på isen",
    english: "There is no cow on the ice",
    meaning: "Don't worry, everything is fine (literally: there's no immediate danger like a cow stuck on frozen ice)"
  },
  {
    danish: "Man skal ikke sælge skindet, før bjørnen er skudt",
    english: "Don't sell the skin before the bear is shot",
    meaning: "Similar to 'Don't count your chickens before they hatch' - don't make plans based on future events that might not happen"
  },
  {
    danish: "Æbler falder ikke langt fra stammen",
    english: "Apples don't fall far from the trunk",
    meaning: "Children often resemble or take after their parents in behavior or characteristics"
  }
]

export default function Copenhagen() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link 
          href="/"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          ← Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80"
            alt="Copenhagen"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Famous Danish Sayings</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover the wisdom and humor in traditional Danish proverbs
          </p>
        </div>

        <div className="grid gap-6">
          {DANISH_SAYINGS.map((saying, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {saying.danish}
                </h2>
                <p className="text-lg">
                  {saying.english}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
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