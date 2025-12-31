
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
                Niche Expertise, <br />
                <span className="text-[#A855F7]">Authentic Impact.</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                CollabHive is a specialized agency dedicated to building long-term, authentic collaborations. We prioritize creator-first values while delivering professional, goal-oriented results for brands across multiple niches.
            </p>
            
            <div className="space-y-6">
                {[
                    { 
                        icon: <Layers className="text-[#FACC15]" />, 
                        title: "Multi-Niche Focus", 
                        desc: "Expertise across Food, Lifestyle, Fashion, Fitness, Tech, and more." 
                    },
                    { 
                        icon: <Heart className="text-[#A855F7]" />, 
                        title: "Creator-First Advocacy", 
                        desc: "We protect your creative voice while connecting you to the right brands." 
                    },
                    { 
                        icon: <ShieldCheck className="text-black" />, 
                        title: "Authentic Partnerships", 
                        desc: "Transparent processes focused on real value, not just vanity metrics." 
                    }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-black text-lg">{item.title}</h4>
                            <p className="text-neutral-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#FACC15] to-[#A855F7] rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=800&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover -rotate-3 hover:scale-105 transition-transform duration-700 opacity-90" 
                />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black text-xl">
                    CH
                </div>
                <div>
                    <p className="text-sm font-bold text-black leading-none">Curated Network</p>
                    <p className="text-xs text-neutral-500">Global Standards, Local Touch</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
