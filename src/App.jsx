import React, { useRef } from 'react'
import bg from './images/bagan_bg.jpg'
import bagan from './images/bagan1.1.png'
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Gallery from './common/Gallery'

AOS.init();

const App = () => {

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
      <div className=" bg-[#23160D] pt-10 pb-20 flex flex-col justify-center items-center">
        <h1 className=' text-[70px] font-extrabold font-serif text-white underline pb-10'>About</h1>
        <div className=" w-full flex flex-col justify-center items-center text-white gap-40">
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className=' w-[900px] flex justify-between items-center gap-10'>
            <img src={one} alt="" className=' w-[40%] rounded-md drop-shadow-md sideImg' />
            <p className=' w-[40%] font-mono'><span className=' font-bold'>Bagan</span> is an ancient city and a UNESCO World Heritage Site in the Mandalay Region of Myanmar. From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom, the first kingdom that unified the regions that would later constitute Myanmar. </p>
          </div>
          <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className=' w-[900px] flex justify-between items-center gap-10'>
            <p className=' w-[40%] font-mono'><span className=' font-bold'>Bagan</span> is an ancient city and a UNESCO World Heritage Site in the Mandalay Region of Myanmar. From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom, the first kingdom that unified the regions that would later constitute Myanmar. </p>
            <img src={two} alt="" className=' w-[40%] rounded-md drop-shadow-md sideImg' />
          </div>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className=' w-[900px] flex justify-between items-center gap-10'>
            <img src={three} alt="" className=' w-[40%] rounded-md drop-shadow-md sideImg' />
            <p className=' w-[40%] font-mono'><span className=' font-bold'>Bagan</span> is an ancient city and a UNESCO World Heritage Site in the Mandalay Region of Myanmar. From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom, the first kingdom that unified the regions that would later constitute Myanmar. </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="  bg-[#23160D] images flex flex-col justify-center items-center py-5">
        <h1 className=' text-[70px] font-extrabold font-serif text-white underline'>Images</h1>
        <div className=" w-[1000px] py-10 relative">
          <Gallery />
        </div>
      </div>
    </div>
  )
}

export default App