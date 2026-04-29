"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [result, setResult] = useState({ message: "", status: "" });
    const [showResult, setShowResult] = useState(false);

    // Auto-hide success and error messages after 5 seconds
    useEffect(() => {
        if (result.status === "success" || result.status === "error") {
            const timer = setTimeout(() => {
                setShowResult(false);
                setTimeout(() => setResult({ message: "", status: "" }), 500);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    // Show the result message whenever it changes
    useEffect(() => {
        if (result.message) {
            setShowResult(true);
        }
    }, [result]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult({ message: "Sending...", status: "loading" });
        setShowResult(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "4c98aa29-cfc7-42b3-b8dc-9780c33eb656");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult({ message: "Message sent successfully!", status: "success" });
                event.target.reset();
            } else {
                setResult({ message: data.message, status: "error" });
            }
        } catch (error) {
            setResult({ message: "Something went wrong. Please try again.", status: "error" });
        }
    };

    // Icons for different states
    const resultIcons = {
        loading: (
            <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        ),
        success: (
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
        )
    };

    return (
        <div
            id="contact"
            className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
        >
            <h4 className="text-center mb-2 text-lg font-ovo">Contact me</h4>
            <h2 className="text-center text-5xl font-ovo">Get In Touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                If you have any questions, comments, or feedback, use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90"
                        name="name"
                    />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90"
                        name="email"
                    />
                </div>
                <textarea
                    rows="6"
                    placeholder="Enter Your Message"
                    required
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkhover/30 dark:border-white/90"
                    name="message"
                ></textarea>

                <button
                    type="submit"
                    className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover">
                    Submit <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </button>

                {/* Enhanced Result Message with Animation */}
                <AnimatePresence>
                    {showResult && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="fixed bottom-6 right-6 max-w-md z-50"
                        >
                            <motion.div 
                                className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg 
                                    ${result.status === "success" ? "bg-gradient-to-r from-green-500 to-green-600" : 
                                      result.status === "error" ? "bg-gradient-to-r from-red-500 to-red-600" : 
                                      "bg-gradient-to-r from-blue-500 to-blue-600"}`}
                                animate={{ 
                                    x: [0, 5, -5, 5, 0],
                                    transition: { 
                                        x: { duration: 0.5, repeat: result.status === "error" ? 3 : 0 }
                                    }
                                }}
                            >
                                <div className="shrink-0">
                                    {resultIcons[result.status]}
                                </div>
                                <div className="text-white">
                                    <p className="font-semibold">
                                        {result.status === "success" ? "Success!" : 
                                         result.status === "error" ? "Error" : "Sending..."}
                                    </p>
                                    <p className="text-sm opacity-90">{result.message}</p>
                                </div>
                                {(result.status === "success" || result.status === "error") && (
                                    <button 
                                        onClick={() => setShowResult(false)}
                                        className="ml-auto text-white/80 hover:text-white"
                                        aria-label="Dismiss"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

export default Contact;
