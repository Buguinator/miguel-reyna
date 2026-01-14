"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/components/fancy/image/parallax-floating"

const Phrase = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div className="relative z-10">
      <div
        className="flex w-dvw h-dvh justify-center items-center bg-[#020202] overflow-hidden"
        ref={scope}
      >
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 1.5 }}
        >
          <p className="text-xl md:text-4xl z-50 text-white font-calendas italic w-5/6 md:w-1/2">
            "Con la bendición de Dios y el amor de nuestras familias, queremos compartir contigo el día más especial de nuestras vidas."
          </p>
        </motion.div>

        <Floating sensitivity={-1} className="overflow-hidden">
          <FloatingElement depth={0.5} className="top-[15%] left-[5%] md:top-[8%] md:left-[11%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase1.jpg"}
              className="w-24 h-32 md:w-48 md:h-58 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[10%] left-[25%] md:top-[15%] md:left-[35%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase2.jpg"}
              className="w-24 h-24 md:w-48 md:h-48 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[10%] left-[62%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase3.webp"}
              className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[20%] left-[83%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase4.webp"}
              className="w-24 h-32 md:w-48 md:h-64 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>

          <FloatingElement depth={1} className="md:top-[40%] top-[60%] md:left-[2%] left-[2%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase5.webp"}
              className="w-24 h-32 md:w-64 md:h-86 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="md:top-[70%] top-[60%] md:left-[77%] left-[77%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase6.webp"}
              className="w-24 h-32 md:w-64 md:h-86 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>

          <FloatingElement depth={4} className="md:top-[85%] top-[80%] md:left-[20%] left-[20%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase7.webp"}
              className="w-40 md:w-92 h-full object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[75%] left-[60%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={"/phrase8.webp"}
              className="w-24 h-24 md:w-64 md:h-64 object-cover hover:scale-150 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
        </Floating>
      </div>
    </div>
  )
}

export default Phrase
