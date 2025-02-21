"use client"

import Image from "next/image"
import Link from "next/link"

const CHINESE_WISDOM = [
  {
    chinese: "知己知彼，百战不殆",
    pinyin: "Zhī jǐ zhī bǐ, bǎi zhàn bù dài",
    english: "Know yourself and know your enemy, and you will never be defeated",
    author: "Sun Tzu",
    context: "From The Art of War",
    meaning: "Understanding both yourself and others is key to success in any endeavor"
  },
  {
    chinese: "千里之行，始于足下",
    pinyin: "Qiān lǐ zhī xíng, shǐ yú zú xià",
    english: "A journey of a thousand miles begins with a single step",
    author: "Laozi",
    context: "From Tao Te Ching",
    meaning: "Even the greatest tasks begin with small actions"
  },
  {
    chinese: "温故而知新",
    pinyin: "Wēn gù ér zhī xīn",
    english: "Review the old and know the new",
    author: "Confucius",
    context: "From The Analects",
    meaning: "Understanding the past helps us comprehend the present and future"
  },
  {
    chinese: "己所不欲，勿施于人",
    pinyin: "Jǐ suǒ bù yù, wù shī yú rén",
    english: "Do not do to others what you do not want done to yourself",
    author: "Confucius",
    context: "The Golden Rule in Chinese philosophy",
    meaning: "Treat others as you would like to be treated"
  }
]

export default function Xian() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5e6] to-[#ffe4cc] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span> Back to cities
        </Link>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&q=80"
            alt="Xi'an - Terracotta Warriors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Chinese Wisdom</h1>
              <p className="text-gray-200">Ancient teachings from the Middle Kingdom</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {CHINESE_WISDOM.map((wisdom, index) => (
            <div 
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-amber-800/20"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-amber-800 dark:text-amber-400">
                  {wisdom.chinese}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  {wisdom.pinyin}
                </p>
                <p className="text-2xl text-gray-800 dark:text-gray-200 font-serif">
                  "{wisdom.english}"
                </p>
                <div className="pt-4 border-t border-amber-800/20">
                  <p className="text-sm text-amber-800 dark:text-amber-400 mb-2">
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