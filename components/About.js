'use client';
import { motion } from 'framer-motion';
import { User, Heart, Zap } from 'lucide-react';

export default function About() {
    const features = [
        {
            icon: <User size={32} />,
            title: 'Who I Am',
            description: 'A passionate developer with a keen eye for design and user experience.',
        },
        {
            icon: <Heart size={32} />,
            title: 'What I Love',
            description: 'Building innovative solutions that make a real difference in people\'s lives.',
        },
        {
            icon: <Zap size={32} />,
            title: 'What I Do',
            description: 'Creating fast, scalable, and beautiful web applications with modern tech.',
        },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4">About Me</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        I'm a full-stack developer who loves turning ideas into reality through code.
                        With expertise in modern web technologies, I create seamless digital experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card glass text-center"
                        >
                            <div className="text-gradient mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="mb-3">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 glass-strong card max-w-4xl mx-auto"
                >
                    <h3 className="mb-4 text-center">My Journey</h3>
                    <p className="text-center mb-4">
                        With years of experience in web development, I've worked on diverse projects
                        ranging from e-commerce platforms to complex web applications. My approach
                        combines technical expertise with creative problem-solving.
                    </p>
                    <p className="text-center">
                        I'm constantly learning and exploring new technologies to stay at the
                        forefront of web development. Let's build something amazing together!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
