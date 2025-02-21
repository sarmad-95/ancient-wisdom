"use client"

import Image from "next/image";

const CITIES = [
  {
    name: "Athens, Greece",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    description: "Birthplace of democracy and Western philosophy",
    slug: "athens"
  },
  {
    name: "Rome, Italy", 
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    description: "Eternal city of the Roman Empire",
    slug: "rome"
  },
  {
    name: "Xi'an, China",
    image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&q=80",
    description: "Ancient capital of Chinese civilization",
    slug: "xian"
  },
  {
    name: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    description: "Heart of ancient Egyptian civilization",
    slug: "cairo"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-12 max-w-4xl">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Ancient Wisdom Through Time
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore timeless teachings from the world's greatest civilizations,
            where philosophy, culture, and wisdom have shaped human history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {CITIES.map((city) => (
            <a 
              key={city.name}
              href={city.slug ? `/${city.slug}` : '#'}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="text-sm text-gray-200">{city.description}</p>
              </div>
            </a>
          ))}
        </div>

        <footer className="text-center text-gray-600 dark:text-gray-400 max-w-2xl">
          <p className="italic">
            "Those who cannot remember the past are condemned to repeat it"
          </p>
          <p className="text-sm mt-2">
            — George Santayana
          </p>
        </footer>
      </main>
    </div>
  );
}
