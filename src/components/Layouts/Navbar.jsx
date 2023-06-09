import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-screen flex justify-center py-4 gap-5 bg-black text-white fixed'>
                <a href='#home'>Intro</a>
                <a href='#about'>About</a>
                <a href='#skills'>Activity</a>
                <a href='#contact'>Join</a>
            </div>
        </>
    )
}

export default Navbar