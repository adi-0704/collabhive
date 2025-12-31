
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users2, Compass } from 'lucide-react';

const ForBrands: React.FC = () => {
  const offerings = [
    {
      icon: <Users2 className="w-6 h-6 text-black" />,
      title: "Niche-Relevant Creators",
      description: "Access a vetted network of creators who truly speak your brand's language, no matter the industry."
    },
    {
      icon: <Compass className="w-6 h-6 text-[#A855F7]" />,
      title: "Tailored Strategies",
      description: "Campaigns designed around your specific brand goals, ensuring maximum resonance with target audiences."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#FACC15]" />,
      title: "Authentic Performance",
      description: "Focus on genuine engagement and conversions through storytellers who have built real trust."
    }
  ];

  return (
    <div id="brands" className="scroll-mt-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="inline-block bg-purple-100 text-[#A855F7] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    For Brands & Businesses
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                    Authentic Marketing <br />
                    <span className="text-[#A855F7]">Driven by Data.</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                    Stop guessing. CollabHive provides the platform to discover, vet, and collaborate with creators who drive real business value through authentic storytelling.
                </p>

                <div className="grid gap-6 mb-10">
                    {offerings.map((offering, idx) => (
                        <div key={idx} className="flex gap-4 items-start group">
                            <div className="p-3 bg-neutral-100 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all">
                                {offering.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-black">{offering.title}</h4>
                                <p className="text-neutral-500 text-sm">{offering.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#A855F7] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
                >
                    Work With Us
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-16 lg:mt-0 grid grid-cols-2 gap-4"
            >
                <div className="space-y-4">
                    <div className="h-64 bg-neutral-200 rounded-3xl overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=300&h=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Marketing Meeting" />
                    </div>
                    <div className="h-48 bg-[#FACC15] rounded-3xl flex items-center justify-center p-8 text-center font-black text-xl text-black">
                        MULTICHANNEL REACH
                    </div>
                </div>
                <div className="space-y-4 pt-12">
                    <div className="h-48 bg-black rounded-3xl flex items-center justify-center p-8 text-center font-black text-xl text-white">
                        VETTED TALENT
                    </div>
                    <div className="h-64 bg-neutral-200 rounded-3xl overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&h=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Collaboration" />
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default ForBrands;
