
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const creatorFormUrl = "https://forms.gle/poErNGgmKbqT6qLt5";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-neutral-100 px-4 py-1.5 rounded-full mb-8">
            <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">Onboarding Creators Across All Niches</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 leading-tight">
            Where Brands & Creators <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#A855F7]">Collaborate</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-medium">
            CollabHive connects creators with brands through authentic influencer marketing. We build meaningful bridges for storytellers in Food, Lifestyle, Fashion, Tech, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={creatorFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2 group transition-all"
            >
              Join as a Creator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#brands"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black border-2 border-neutral-200 rounded-full font-bold text-lg hover:border-black transition-colors"
            >
              For Brands
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
            <div className="h-48 md:h-64 bg-neutral-100 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=400&h=500&auto=format&fit=crop" alt="Fashion Creator" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="h-48 md:h-64 bg-neutral-100 rounded-2xl overflow-hidden relative group mt-8">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&h=500&auto=format&fit=crop" alt="Tech Creator" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="h-48 md:h-64 bg-neutral-100 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop" alt="Lifestyle Content" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="h-48 md:h-64 bg-neutral-100 rounded-2xl overflow-hidden relative group mt-8">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&h=500&auto=format&fit=crop" alt="Food Content" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
