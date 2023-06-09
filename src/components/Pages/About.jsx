import React from 'react'
import rafael from '../Assets/rafael.png'
import il from '../Assets/il.png'

function About() {
    return (
        <div id='about' className='flex flex-col lg:flex-row'>
            <div className='flex flex-col items-center justify-center lg:w-[50%]'>
                <img src={rafael} alt="rafael" className='w-full' />
                <h1 className='font-semibold text-2xl pt-3'>Tentang Gue</h1>
                <p className='text-center px-[20px] py-[5px] pb-3 '>Hai, Saya Hizkia Yogi Rafael. Saya adalah salah satu mentee Infinite Learning atau yang biasa kita sebut IL. Saya merupakan mentee web development. Saya berkuliah di Politeknik Negeri Batam dengan Jurusan D3 Teknik Informatika. Saya Memiliki Hobi desain grafis. </p>
            </div>
            <div className='flex flex-col items-center justify-center lg:w-[50%] text-white bg-black'>
                <img src={il} alt="il" className='w-full' />
                <h1 className='font-medium text-2xl pt-3'>IL Itu Apa Sih Bang?</h1>
                <p className='text-center px-[20px] py-[5px] pb-3'>Infinite Learning, sebuah divisi dari PT Kinema Systrans multimedia (anak perusahaan dari Infinite Studios), berpusat pada pengembangan kursus pelatihan kejuruan yang relevan dengan aktivitas Infinite Studios dan meningkatnya permintaan bakat terampil dalam ekosistem Nongsa Digital Park.</p>
            </div>
        </div>
    )
}

export default About
