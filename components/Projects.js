'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store with payment integration, admin dashboard, and real-time inventory management.',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Task Management App',
            description: 'Collaborative project management tool with real-time updates, team chat, and advanced analytics.',
            tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'AI Content Generator',
            description: 'AI-powered content creation platform using GPT-4 for generating blog posts, social media content, and more.',
            tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Portfolio Builder',
            description: 'Drag-and-drop portfolio website builder with customizable templates and one-click deployment.',
            tags: ['Vue.js', 'Express', 'PostgreSQL', 'AWS'],
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for managing multiple social media accounts with scheduling and insights.',
            tags: ['Angular', 'NestJS', 'Redis', 'Chart.js'],
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Code Editor (This Site!)',
            description: 'Offline-capable code editor with syntax highlighting, file management, and live preview.',
            tags: ['Next.js', 'Monaco Editor', 'IndexedDB', 'PWA'],
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            demoUrl: '/editor',
            githubUrl: '#',
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4">Featured Projects</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card glass group"
                        >
                            <div
                                className="h-48 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-2xl"
                                style={{ background: project.gradient }}
                            >
                                {project.title}
                            </div>

                            <h3 className="mb-3">{project.title}</h3>
                            <p className="mb-4 text-sm">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full glass"
                                        style={{ color: 'var(--text-gray)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.demoUrl}
                                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                                    style={{ color: 'var(--text-gray)' }}
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                                    style={{ color: 'var(--text-gray)' }}
                                >
                                    <Github size={16} />
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
