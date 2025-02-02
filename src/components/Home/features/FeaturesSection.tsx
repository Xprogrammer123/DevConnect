import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lock, Brain, Wallet, Globe } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Verified Developers',
    description: 'Work with top-tier developers, handpicked and verified for their skills and expertise in multiple technologies.',
  },
  {
    icon: Users,
    title: 'Effortless Collaboration',
    description: 'Experience seamless communication and project tracking tools that make teamwork efficient and hassle-free.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Your money is protected with our escrow system until project milestones are met and approved.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Our smart algorithms analyze your project requirements to instantly match you with the perfect developers.',
  },
  {
    icon: Wallet,
    title: 'Affordable Plans',
    description: 'Choose from flexible pricing options that suit your budget, whether youre a startup or an enterprise.',
  },
  {
    icon: Globe,
    title: 'Global Talent Pool',
    description: 'Access skilled developers from around the world, available 24/7 to bring your projects to life.',
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenTop: { opacity: 0, y: -50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features, Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the tools and expertise you need to bring your project to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Determine the animation based on card position
            const animation =
              index === 0 || index === 3
                ? 'hiddenLeft'
                : index === 2 || index === 5
                ? 'hiddenRight'
                : 'hiddenTop';

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial={animation}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
