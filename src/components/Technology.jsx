import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiJquery } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Technology = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrMysql className='text-7xl text-cyan-900' />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJquery className='text-7xl text-blue-950' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className='text-7xl text-red-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJs className='text-7xl text-yellow-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className='text-7xl text-blue-800' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technology
