import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn, slideIn } from '../../animations/variants';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4A90E2] to-[#764BA2] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <motion.div variants={slideIn} className="flex-1 text-center lg:text-left">
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
              Ready to Transform Your Projects?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-white/90 mb-8">
              Join thousands of satisfied developers and clients today.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 bg-white text-[#4A90E2] px-6 py-3 rounded-lg font-semibold transition-all hover:bg-white/90"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-white/10"
              >
                Showcase Your Skills
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex-1"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Developers collaborating"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};