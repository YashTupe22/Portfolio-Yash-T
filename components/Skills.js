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

    const highlights = [
        'Interface systems with a strong visual rhythm',
        'Performance-aware component architecture',
        'Accessible interactions and keyboard flows',
        'Motion that supports comprehension',
    ];

    const toolbelt = ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma', 'Docker'];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="skills-header"
                >
                    <span className="skills-eyebrow">Skillset</span>
                    <h2 className="mb-4">Tools, Tactics, and Taste</h2>
                    <p className="text-xl max-w-3xl">
                        A focused stack for shipping fast, resilient interfaces and scalable systems.
                    </p>
                </motion.div>

                <div className="skills-layout">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="skills-intro glass-strong"
                    >
                        <h3 className="mb-4">Design-led engineering</h3>
                        <p className="mb-6">
                            I bridge product design and engineering to create interfaces that feel fast,
                            intuitive, and intentional.
                        </p>
                        <div className="skills-highlights">
                            {highlights.map((item, index) => (
                                <div key={index} className="skills-highlight">
                                    <span className="skills-highlight-dot" aria-hidden="true" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="skills-toolbelt">
                            {toolbelt.map((tool) => (
                                <span key={tool} className="skills-chip">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="skills-grid">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                                className="skills-card glass"
                            >
                                <div className="skills-card-header">
                                    <h3>{category.category}</h3>
                                    <span className="skills-count">{category.skills.length} tools</span>
                                </div>
                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-row">
                                            <div className="skill-row-top">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-level">{skill.level}%</span>
                                            </div>
                                            <div className="skill-meter">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.08 }}
                                                    className="skill-meter-fill"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
