"use client"

import Image from "next/image"
import Link from "next/link"

const CANADIAN_SAYINGS = [
  {
    saying: "Beauty, eh?",
    meaning: "An expression of appreciation for something wonderful, distinctly Canadian",
    context: "Often used when admiring nature or a particularly impressive sight"
  },
  {
    saying: "Out for a rip",
    meaning: "Going for a drive or adventure",
    context: "Commonly used in casual conversation to describe heading out for fun"
  },
  {
    saying: "The true north strong and free",
    meaning: "From the national anthem, represents Canadian values of independence and resilience",
    context: "Often used to express Canadian pride and connection to the northern landscape"
  },
  {
    saying: "Give'r",
    meaning: "To put in maximum effort or go for it with enthusiasm",
    context: "Used to encourage someone to try their hardest or pursue something with passion"
  }
]

export default function Vancouver() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1560814304-4f05b62af116?w=1200&q=80"
            alt="Vancouver"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Canadian Expressions</h1>
              <p className="text-gray-200">West Coast wisdom and colloquialisms</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {CANADIAN_SAYINGS.map((saying, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-xl p-8 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">🍁</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {saying.saying}
                  </h2>
                </div>
                <p className="text-xl text-gray-800 dark:text-gray-200 italic">
                  {saying.meaning}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {saying.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 