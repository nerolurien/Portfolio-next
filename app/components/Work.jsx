"use client";
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Work = ({ isDarkMode }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(workData);
    const [selectedProject, setSelectedProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    
    // Extract unique categories from workData
    const categories = ['all', ...new Set(workData.map(project => project.category || 'other'))];
    
    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredProjects(workData);
        } else {
            setFilteredProjects(workData.filter(project => project.category === activeFilter));
        }
    }, [activeFilter]);
    
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };
    
    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 24 
            }
        }
    };

    return (
        <div id='work' className='w-full md:px-[10%] py-20 scroll-mt-20 relative overflow-hidden' ref={containerRef} onMouseMove={handleMouseMove}>
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-300/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16 px-4"
            >
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-lime-300/30 dark:bg-lime-300/20 px-4 py-1 rounded-full text-sm font-semibold text-lime-800 dark:text-lime-300 inline-block mb-4">
                        MY PORTFOLIO
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-ovo font-bold mb-6 leading-tight">
                        <span className="inline-block">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Latest</span> Work
                        </span>
                    </h2>
                </motion.div>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-ovo"
                >
                    Explore my creative projects that showcase my design abilities and technical expertise.
                </motion.p>
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeFilter}
                    variants={staggerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 md:px-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            variants={childVariants}
                            whileHover={{ 
                                y: -10, 
                                transition: { type: "spring", stiffness: 400 } 
                            }}
                            className="group"
                        >
                            <div 
                                className='w-full h-64 sm:h-72 lg:h-80 bg-no-repeat bg-center rounded-2xl relative cursor-pointer overflow-hidden shadow-xl group'
                                style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover' }}
                                onClick={() => setSelectedProject(project)}
                            >

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                
                                <div className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-[92%] rounded-xl absolute -bottom-full left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-4 shadow-xl border border-gray-100/20'>
                                    <div className="flex-1 pr-3">
                                        <h2 className='font-bold text-sm sm:text-base truncate'>
                                            {project.title}
                                        </h2>
                                        <p className='text-xs text-gray-600 dark:text-gray-300 line-clamp-2'>
                                            {project.description}
                                        </p>
                                    </div>
                                    <Link 
                                        href={project.link || '/'} 
                                        target='_blank' 
                                        onClick={(e) => e.stopPropagation()}
                                        alt='Visit Icon'
                                    >
                                        <motion.div 
                                            whileHover={{ scale: 1.1, backgroundColor: '#bef264' }}
                                            whileTap={{ scale: 0.9 }}
                                            className='border rounded-full border-gray-400 dark:border-gray-600 w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#666] bg-white dark:bg-gray-700 transition-all duration-300'
                                        >
                                            <Image src={assets.send_icon} alt='Visit' className="w-5" />
                                        </motion.div>
                                    </Link>
                                </div>
                                
                                {project.category && (
                                    <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-y-1">
                                        <span className="px-3 py-1 bg-lime-300/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                                            {project.category}
                                        </span>
                                    </div>
                                )}

                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                                    <div className="bg-lime-400/80 rotate-45 transform origin-bottom-left w-24 h-24 -translate-y-12 translate-x-6"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <div className="mb-4">😕</div>
                    <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                </motion.div>
            )}

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 z-10"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            
                            {/* Modal Content Placeholder */}
                            <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                                <img 
                                    src={selectedProject.bgImage} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
                            
                            <div className="flex justify-end mt-6">
                                <Link 
                                    href={selectedProject.link || '/'} 
                                    target="_blank"
                                    className="px-6 py-2 bg-lime-500 text-white rounded-full inline-flex items-center gap-2 hover:bg-lime-600 transition-colors"
                                    alt="Visit"
                                >
                                    Visit Project
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Work;