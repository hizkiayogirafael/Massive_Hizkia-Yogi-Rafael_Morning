import React from 'react'
import header from '../Assets/header.png'

function Home() {
    return (
        <div id='home' className='text-white h-[410px] flex flex-col gap-3 items-center justify-center bg-black lg:h-[760px] pt-[20px] p-[0px]'>
            <h1 className='mt-[50px] font-climate text-white text-2xl lg:text-[70px] md:text-4xl sm:text-4xl'>RAFAEL GOES TO IL</h1>
            <h3 className='text-center text-xl lg:mt-7'>[ Uwak Uwak Peluk Manja, Kalo Di IL Ngapain Aja? ]</h3>
            <img src={header} alt="header" />
        </div>
    )
}

export default Home
