"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ${index === currentImage ? "opacity-100 animate-zoom-slow" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />
      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <h1 className="text-center text-4xl md:text-8xl font-extralight text-white"> Miguel y Reyna </h1>
      </div>
    </section>
  )
}