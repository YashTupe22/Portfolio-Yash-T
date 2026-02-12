'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        { icon: <Mail size={24} />, label: 'Email', value: 'your.email@example.com' },
        { icon: <Phone size={24} />, label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: <MapPin size={24} />, label: 'Location', value: 'Your City, Country' },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4">Get In Touch</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="text-gradient">{info.icon}</div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{info.label}</p>
                                        <p className="text-white font-medium">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 card glass">
                            <h4 className="mb-4">Why Work With Me?</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li>✨ Clean, maintainable code</li>
                                <li>🚀 Fast delivery and communication</li>
                                <li>💡 Creative problem-solving</li>
                                <li>🎯 Attention to detail</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="card glass">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-20 pt-8 border-t border-gray-800"
                >
                    <p className="text-gray-400">
                        © 2024 Your Name. Built with Next.js and ❤️
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
