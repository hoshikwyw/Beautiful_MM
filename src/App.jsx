import React, { useRef } from 'react'
import bg from './images/bagan_bg.jpg'
import bagan from './images/bagan1.1.png'
import { motion, useScroll, useTransform } from 'framer-motion'

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
      <div className=" bg-[#23160D] pt-5">
        <div className=" w-full flex flex-col justify-center items-center text-white">
          <p className=' w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sint distinctio atque non! Fuga tenetur vel animi iure? Minus autem quisquam atque eaque neque esse labore expedita libero nemo excepturi?</p>
          <p className=' w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, et! Rem, est asperiores obcaecati dolorem autem sit sapiente ex molestias nobis ab sunt unde aliquam eius qui perferendis nesciunt reiciendis!
            Quaerat dolorum voluptate enim, optio voluptates consectetur id minus sunt voluptatibus cupiditate nisi autem dolor ipsum? Animi quam mollitia ea praesentium ducimus modi esse soluta, libero neque, magni sint alias.
            Consequatur dolore aspernatur dolor vitae corporis ipsum sunt, earum, temporibus quos assumenda hic ab! Provident laborum, consectetur, tempora reprehenderit nostrum possimus amet dolor exercitationem quasi aperiam iusto quam repellat ipsum.</p>
          <p className=' w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas asperiores quisquam blanditiis nemo? Maiores culpa officia provident debitis eum minus. Esse est, ipsam provident recusandae fugiat ullam aut dolor </p>
          <p className=' w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus facere sunt expedita aspernatur dicta maiores eaque iusto placeat eius, fuga mollitia sed accusantium velit in laudantium exercitationem atque perferendis!
            Non beatae veritatis fugit natus id, unde nesciunt accusamus cum, quae ea officia voluptate ex dolorem sint? Aperiam ipsum in maiores, corrupti, ratione inventore tenetur, sit a sunt accusamus laborum!
            Iusto incidunt quam fugit est, quibusdam eum similique non cumque atque, perferendis totam. Est, placeat? Doloremque consectetur beatae nobis officiis, recusandae qui dolore eos dignissimos? Similique nihil inventore magni perspiciatis?
            Autem numquam officia consequatur quos laboriosam omnis ab facere cumque, possimus ratione molestiae nobis earum saepe. Magni, obcaecati fuga sapiente exercitationem fugit, labore nam provident nemo error nulla amet quisquam.
            Dolorem, aliquam error? Quaerat, eos eum nobis aliquam ea quae maxime nam quo reprehenderit vitae magnam numquam perferendis enim odit exercitationem, laudantium excepturi, sit aliquid! Ullam natus sapiente itaque magni!
            Amet blanditiis nostrum eligendi a aliquam esse, vero unde laboriosam? Est neque culpa praesentium veritatis autem sint reprehenderit architecto assumenda, voluptas, repellendus vero hic iusto fuga corrupti numquam accusamus quibusdam.
            Error tenetur veniam provident modi dolorem iure numquam illo officia sapiente harum, fugit corporis maiores incidunt, repudiandae ab alias consequuntur quasi, qui voluptas commodi? Vel deleniti magni nisi illum esse.
            Beatae vero rem aperiam dignissimos, at hic incidunt corrupti alias accusamus, voluptates distinctio molestiae animi quibusdam. Laudantium, odio ipsa voluptatem aspernatur dolorum tenetur, earum ipsum tempore, repellendus facilis cupiditate aperiam?
            Sunt laborum quos voluptate ipsam doloribus. Enim iure labore quia asperiores facere veniam deleniti commodi minima, animi a eum eos tempora unde consectetur molestiae amet et laborum sint quam delectus?</p>
        </div>
      </div>
    </div>
  )
}

export default App