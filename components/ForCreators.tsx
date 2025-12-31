
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, Zap, CheckCircle } from 'lucide-react';

const ForCreators: React.FC = () => {
  const creatorFormUrl = "https://forms.gle/poErNGgmKbqT6qLt5";

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-[#A855F7]" />,
      title: "Diverse Niche Network",
      description: "Join a curated circle of storytellers across Food, Lifestyle, Fashion, Tech, and Fitness."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#FACC15]" />,
      title: "Curated Opportunities",
      description: "Be considered for future campaigns that match your unique style and audience demographic."
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "Professional Workflow",
      description: "Experience a transparent, headache-free process from onboarding to campaign execution."
    }
  ];

  return (
    <div id="creators" className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">Join Our Creator Network</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">We're currently onboarding talent across all niches. Build your profile today to be part of the Hive.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
            <p className="text-neutral-500 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <motion.a
          href={creatorFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
        >
          Join Creator Network
        </motion.a>
        <div className="mt-6 flex items-center gap-2 text-neutral-400 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Registration is free for all creators</span>
        </div>
      </div>
    </div>
  );
};

export default ForCreators;
