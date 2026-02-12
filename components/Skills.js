'use client';
import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React/Next.js', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'Vue.js', level: 85 },
            ],
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'PostgreSQL', level: 88 },
                { name: 'MongoDB', level: 87 },
            ],
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git/GitHub', level: 93 },
                { name: 'Docker', level: 82 },
                { name: 'AWS', level: 80 },
                { name: 'Figma', level: 88 },
            ],
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4">Skills & Expertise</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="card glass"
                        >
                            <h3 className="mb-6 text-center text-gradient">{category.category}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                                className="h-full rounded-full"
                                                style={{
                                                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
