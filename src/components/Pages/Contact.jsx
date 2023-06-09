import React from 'react'
import barcode from '/barcode.png'

function Contact() {
    return (
        <div id='contact' className='text-2xl bg-black h-[550px] w-full justify-center flex flex-col justify-center items-center gap-5 lg:items-center lg:justify-center'>
            <h1 className='text-center text-white pt-[30px] lg:text-3xl'>Udah Tertarik Ga? Daftar Langsung!</h1>
            <img src={barcode} alt="barcode" className='w-[300px]' />
            <a href='https://s.id/Infinite-Learning' className=' text-black bg-white rounded-3xl py-[5px] px-[15px]'>Daftar Disini</a>
        </div>
    )
}

export default Contact
