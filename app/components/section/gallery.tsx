"use client"

import React, { useRef } from "react"

import SimpleMarquee from "@/components/fancy/blocks/simple-marquee"

const exampleImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
]

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer duration-300 ease-in-out">
    {children}
  </div>
)

export default function Gallery() {
  const firstThird = exampleImages.slice(
    0,
    Math.floor(exampleImages.length / 3)
  )
  const secondThird = exampleImages.slice(
    Math.floor(exampleImages.length / 3),
    Math.floor((2 * exampleImages.length) / 3)
  )
  const lastThird = exampleImages.slice(
    Math.floor((2 * exampleImages.length) / 3)
  )

  const container = useRef<HTMLDivElement>(null)

  return (
    <div
      className="flex w-dvw h-dvh relative justify-center items-center flex-col bg-[#020202] mb-[150vh] px-12"
      ref={container}
    >
      <div className="relative z-10 text-center text-white font-calendas font-serif pb-64">
        <h1 className="text-4xl sm:text-5xl">Confirmación de Asistencia</h1>
        <div className="text-white text-center text-base md:text-xl font-sans pt-4">
          <p className="px-8">
            Agradecemos confirmar antes del
            <span className="font-semibold italic"> 10 de Febrero 2026</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center md:space-x-4 space-y-8 sm:space-y-0 pt-16">
          <a href="https://wa.me/526621421896?text=¡Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda" className="px-6 py-3 bg-white text-black rounded font-sans text-base cursor-pointer hover:bg-sky-50 duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">Confirmar con Reyna</a>
          <a href="https://wa.me/526622750405?text=¡Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda" className="px-6 py-3 bg-white text-black rounded font-sans text-base cursor-pointer hover:bg-sky-50 duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">Confirmar con Miguel</a>
        </div>
      </div>

      {/* imagenes overflow */}
      <div className="absolute h-[170%] sm:h-[200%] top-0 w-full justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4 overflow-hidden z-0">
        <SimpleMarquee
          className="w-full"
          baseVelocity={6}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          scrollContainer={container}
          useScrollVelocity={true}
          direction="left"
        >
          {firstThird.map((src, i) => (
            <MarqueeItem key={i}>
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="h-20 w-32 sm:h-24 sm:w-40 md:h-48 md:w-64 object-cover"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={6}
          repeat={4}
          scrollAwareDirection={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowdownOnHover
          slowDownFactor={0.1}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          useScrollVelocity={true}
          scrollContainer={container}
          draggable={false}
          direction="right"
        >
          {secondThird.map((src, i) => (
            <MarqueeItem key={i}>
              <img
                src={src}
                alt={`Image ${i + firstThird.length}`}
                className="h-20 w-32 sm:h-24 sm:w-40 md:h-48 md:w-64 object-cover"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={6}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          scrollContainer={container}
          useScrollVelocity={true}
          direction="left"
        >
          {lastThird.map((src, i) => (
            <MarqueeItem key={i}>
              <img
                src={src}
                alt={`Image ${i + firstThird.length + secondThird.length}`}
                className="h-20 w-32 sm:h-24 sm:w-40 md:h-48 md:w-64 object-cover"
              />
            </MarqueeItem>
          ))}
        </SimpleMarquee>
      </div>
    </div>
  );
}
