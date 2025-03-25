"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        id: 1,
        name: 'Smart Luggage',
        image: '/assets/smart-luggage.jpg',
        description: 'Revolutionary smart luggage solutions'
    },
    {
        id: 2,
        name: 'Smart Bags',
        image: '/assets/smart-bags.jpg',
        description: 'Tech-enabled bags for modern lifestyle'
    },
    {
        id: 3,
        name: 'Smart Wallets',
        image: '/assets/smart-wallets.jpg',
        description: 'Secure and innovative smart wallets'
    },
];

export default function Categories() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Shop by Category</h2>
                    <p className="text-gray-600 dark:text-gray-400">Explore our range of smart technology products</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/category/${category.id}`}>
                                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                                    <div className="relative h-80 w-full">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                        <p className="text-sm text-gray-200">{category.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}