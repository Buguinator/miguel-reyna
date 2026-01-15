"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const images = ["/hero.jpg", "/hero3.jpg", "/herov2.jpg"]
  const [currentImage, setCurrentImage] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Animacion de Imagenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  // Contador
  useEffect(() => {
    const targetDate = new Date('2026-03-06T17:30:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="fixed h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? "opacity-100 animate-zoom-slow" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#020202]/20" />
      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2 pt-56">
          <h3 className="text-center text-xl md:text-2xl font-normal text-white"> Nos Casamos </h3>
          <h1 className="text-center text-4xl md:text-8xl font-normal text-white">Reyna y Miguel</h1>
          <p className="text-center text-2xl md:text-4xl font-normal text-white"> 6 de Marzo de 2026 </p>

          {/* Contador */}
          <div className="mt-12 flex gap-4 md:gap-8">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[100px]">
              <span className="text-3xl md:text-5xl font-light text-white">{timeLeft.days}</span>
              <span className="text-xs md:text-sm text-white/80 mt-1">Días</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[100px]">
              <span className="text-3xl md:text-5xl font-light text-white">{timeLeft.hours}</span>
              <span className="text-xs md:text-sm text-white/80 mt-1">Horas</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[100px]">
              <span className="text-3xl md:text-5xl font-light text-white">{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm text-white/80 mt-1">Minutos</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[100px]">
              <span className="text-3xl md:text-5xl font-light text-white">{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm text-white/80 mt-1">Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}