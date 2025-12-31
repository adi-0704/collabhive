
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const TransparencyNote: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-neutral-50 border-2 border-dashed border-neutral-200 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
      >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0">
          <Info className="w-8 h-8 text-[#A855F7]" />
        </div>
        <div>
          <h4 className="font-extrabold text-black text-lg mb-2">Transparency Note</h4>
          <p className="text-neutral-500 leading-relaxed italic">
            "Joining the creator network does not guarantee immediate collaborations. Shortlisted creators will be contacted only when relevant opportunities that match their profile arise."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TransparencyNote;
