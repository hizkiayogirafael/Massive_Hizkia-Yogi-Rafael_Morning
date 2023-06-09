import React from 'react'
import mmm from '/mmm.jpeg'
import depes from '/depes.jpeg'
import belajar from '/belajar.jpeg'
import bermain from '/bermain.jpeg'

function Skills() {
    return (
        <div className='flex flex-col lg:flex-row w-full'>
            <div style={{ backgroundImage: "url('/belajar.jpeg')" }} className='w-full bg-cover bg-no-repeat h-[500px] flex flex-col p-[15px] gap-2 items-center justify-center lg:items-center'>
                <h1 className='font-light text-xl text-white pl-[20] text-center pt-[300px] stroke-neutral-800'>- Belajar Desain dan Teknikal Web Development -</h1>
            </div>
            <div style={{ backgroundImage: "url('/mmm.jpeg')" }} className='w-full bg-cover bg-no-repeat h-[500px] flex flex-col p-[15px] gap-2 items-center justify-center lg:items-center'>
                <h1 className='font-light text-xl text-light text-white pl-[20] text-center pt-[300px] '>- Micro, Macro dan Massive Project -</h1>
            </div>
            <div style={{ backgroundImage: "url('/depes.jpeg')" }} className='w-full bg-cover bg-no-repeat h-[500px] flex flex-col p-[15px] gap-2 items-center justify-center lg:items-center'>
                <h1 className='font-light text-xl text-white pl-[20] text-center pt-[300px]'>Developer Festival 2023</h1>
            </div>
            <div style={{ backgroundImage: "url('/bermain.jpeg')" }} className='w-full bg-cover bg-no-repeat h-[500px] flex flex-col p-[15px] gap-2 items-center justify-center lg:items-center'>
                <h1 className='font-light text-xl text-white pl-[20] text-center pt-[300px]'>Bermain Bersama Teman Teman</h1>
            </div>
        </div>
    )
}

export default Skills
