import React, { useEffect, useRef, useState } from 'react';
import { Route, NavLink, createRoutesFromElements, Outlet } from 'react-router-dom';
import InfoBox from './InfoBox'
import styles from './Projects.module.css';
import { motion, useInView } from 'framer-motion';
import upArrow from '../../assets/triangleUpArrow.svg'
import downArrow from '../../assets/TriangleDownArrow.svg'
import { createBrowserRouter } from 'react-router-dom';

const Projects = (props) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [upArrowOp, setUpArrowOp] = useState('hidden');
    const [downArrowOp, setDownArrowOp] = useState('flex');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const spacing = 130;



    const data = props.projects;
    const leftSlide = data.filter(item => item.id % 2 === 0);

    const rightSlide = data.filter(item => item.id % 2 != 0);

    const initialR = {
        top: `100%`,
        opacity: 0
    }
    const initialL = {
        top: `-100%`,
        opacity: 0
    }
    const animate = {
        top: `0`,
        opacity: 1
    }


    const nextSlide = () => {
        if (slideIndex < (data.length / 2 - 1))
            setSlideIndex((prev) => prev + 1);
    }
    const prevSlide = () => {
        if (slideIndex > 0)
            setSlideIndex((prev) => prev - 1);
    }

    useEffect(() => {
        if(slideIndex === 0)
            setUpArrowOp('hidden');
        else    setUpArrowOp('flex');
        
        if(slideIndex === leftSlide.length-1){
            setDownArrowOp('hidden');
        }else   setDownArrowOp('flex');
    },[slideIndex])

    const router = createBrowserRouter(
        createRoutesFromElements(
            data.map((data,index) => {
                
                    return (
                    <Route key={index} 
                           path={`/${data.id}`} 
                           element={<InfoBox languages={data.languages} name={data.name} info={data.desc}/>}
                    />
                )
            })
        )
    )

    return (
        <div className={`${styles.container} flex w-full rounded-3xl`}>
            <motion.div ref={ref} className={`${styles.info} 
                                              p-8 
                                              flex-col
                                              -translate-x-1/4 
                                              justify-between 
                                              items-center 
                                              bg-slate-400`
                                              } 
                                              initial={{ scale: 0.5, opacity: 0 }} 
                                              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }} 
                                              transition={{ duration: 0.5 }}
            >
                {/* <Outlet /> */}
            </motion.div>



            <div className={`${styles.slider}`}>

                {/* UP ARROW */}
                <div className={`${styles.btn} top-2 ${upArrowOp}`} onClick={prevSlide}>
                    <img src={upArrow} alt="Up Button" />
                </div>

                {/* DOWN ARROW */}
                <div className={`${styles.btn} bottom-2 ${downArrowOp}`} onClick={nextSlide}>
                    <img src={downArrow} alt="Down Button" />
                </div>

                <motion.div ref={ref} initial={initialL} animate={isInView ? animate : initialL} transition={{ duration: 0.5 }} className={`${styles.slide} ${styles.invert}`}>
                    <section className='flex w-auto h-full justify-center items-center '>
                        {
                            leftSlide.map((item, idx) => {
                                return <motion.div
                                    key={item.id}
                                    className={`${styles.project} ${styles.invert}`}
                                    animate={{ transform: `translateY(${(idx - slideIndex) * spacing}%)` }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <NavLink path={item.id} className='rotate-180' transition={`none`}>{item.name}</NavLink>
                                </motion.div>
                            })
                        }
                    </section>
                </motion.div>

                <motion.div ref={ref} initial={initialR} animate={isInView ? animate : initialR} transition={{ duration: 0.5 }} className={`${styles.slide}`}>
                    <section className='flex w-auto h-full justify-center items-center '>
                        {
                            rightSlide.map((item, idx) => {
                                return <motion.div
                                    key={item.id}
                                    className={`${styles.project}`}
                                    animate={{ transform: `translateY(${(idx - slideIndex) * spacing}%)` }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {item.name}
                                </motion.div>
                            })
                        }
                    </section>
                </motion.div>
            </div>
        </div>
    )
}


export default Projects;