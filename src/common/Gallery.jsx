import React, { useEffect, useState } from 'react'
import "./gallery.css"
import { IoCloseCircle } from "react-icons/io5";

const Gallery = () => {
    const [data, setData] = useState(null)
    // console.log(data);
    const [model, setModel] = useState(false)
    const [tempImg, setTempImg] = useState('')

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const getImg = (imgSrc) => {
        // console.log(imgSrc);
        setTempImg(imgSrc)
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }

    return (
        <div className=' relative'>
            <div className={model ? ` opacity-100 z-50 fixed bg-[#000000] h-screen top-0 left-0 w-full visible flex justify-center items-center` : ` fixed top-0 left-0 opacity-0 hidden`}>
                <img src={tempImg} alt="" className=' w-auto h-auto max-h-screen shadow-md shadow-gray-800' />
                <IoCloseCircle color='white' fontSize={'40px'} className=' right-10 fixed top-10 cursor-pointer' onClick={() => closeModel()} />
            </div>
            <div className='gallery'>
                {data && data.map((item, index) => (
                    <div key={index} className='imgContainer' onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" className=' w-full' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery
