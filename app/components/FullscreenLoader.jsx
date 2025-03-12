"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FullscreenLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000); // Loading selama 2 detik
    }, []);

    // Animation variants for the container
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };

    // Variants for the loading circles
    const circleVariants = {
        initial: { scale: 0 },
        animate: { scale: 1 }
    };

    // Bouncing animation for each circle
    const bounceTransition = (delay) => ({
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
    });

    return isLoading ? (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50"
        >
            <div className="flex space-x-4 mb-8">
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        variants={circleVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={bounceTransition(i * 0.1)}
                            className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-600"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                            transition={bounceTransition(i * 0.1)}
                            className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full blur-sm"
                        />
                    </motion.div>
                ))}
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white text-xl font-medium tracking-wider"
            >
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-600">
                    Loading...
                </span>
            </motion.div>
        </motion.div>
    ) : null;
}