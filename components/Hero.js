'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="mb-6">
                            Hi, I'm <span className="text-gradient">Your Name</span>
                        </h1>
                        <p className="text-2xl md:text-3xl mb-4 text-gray-300">
                            Full Stack Developer & Creative Designer
                        </p>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            I craft beautiful, functional web experiences with modern technologies.
                            Passionate about clean code and stunning user interfaces.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex gap-6 mb-12"
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <Mail size={28} />
                        </a>
                    </motion.div>

                    <motion.a
                        href="#about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="animate-bounce"
                    >
                        <ArrowDown size={32} className="text-gray-400" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
