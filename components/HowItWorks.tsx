
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Creators Join",
      description: "Talented storytellers from various niches apply and join the CollabHive creator network.",
      color: "bg-[#FACC15]"
    },
    {
      number: "Step 2",
      title: "Brands Connect",
      description: "Businesses share their campaign goals, target audience, and specific industry requirements with us.",
      color: "bg-[#A855F7]"
    },
    {
      number: "Step 3",
      title: "The Match",
      description: "CollabHive uses expert curation to match brands with the perfect creators for authentic campaigns.",
      color: "bg-black"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">The CollabFlow</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Connecting visionaries with voices through a simple, effective three-step process.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 -z-10" />

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative bg-white"
              >
                <div className={`px-4 py-2 ${step.color} rounded-full inline-flex items-center justify-center text-white font-black text-xs uppercase tracking-widest mb-8 shadow-sm`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 text-center lg:text-left">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-center lg:text-left">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
