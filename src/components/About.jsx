import React from 'react'

const About = () => {
    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Zentry</h2>

                <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
                    Disc<b>o</b>ver the world's<br /> l<b>a</b>rgest shared adventure
                </div>

                <div className='about-subtext'>
                    <p>The Game of Games begins-your life, now an epic MMORPG</p>
                    <p>Zentry unites every player from countless games and platforms</p>
                </div>
            </div>

            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>

                </div>
            </div>
        </div>
    )
}

export default About