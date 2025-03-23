"use client";

import { motion } from 'framer-motion';
import { Shield, Truck, Clock, Award } from 'lucide-react';

const features = [
    {
        icon: Shield,
        title: 'Secure Technology',
        description: 'Advanced security features in all our products'
    },
    {
        icon: Truck,
        title: 'Free Shipping',
        description: 'Free delivery on orders above ₹999'
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Round-the-clock customer assistance'
    },
    {
        icon: Award,
        title: 'Premium Quality',
        description: 'High-quality materials and craftsmanship'
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
                    <p className="text-gray-600 dark:text-gray-400">Experience the Arista Vault difference</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-block p-4 rounded-full bg-gold/10 mb-4">
                                <feature.icon className="w-8 h-8 text-gold dark:text-gold-light" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
