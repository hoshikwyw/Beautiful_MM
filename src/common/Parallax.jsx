import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = () => {

    const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div className=" p-0 m-0 w-full">
      <div ref={ref} className=" w-full h-screen overflow-hidden bg-cover flex justify-center items-center relative">
        <motion.h1 className=' text-[80px] font-extrabold font-serif text-white z-40' style={{ y: textY }}>Welcome To Bagan</motion.h1>

        <motion.div
          className=' absolute z-0'
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            y: backgroundY
          }}>
        </motion.div>
        <div
          className=' absolute z-20'
          style={{
            backgroundImage: `url(${bagan})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            width: "100%",
            height: "100%"
          }}>
        </div>
      </div>
    </div>
  )
}

export default Parallax
