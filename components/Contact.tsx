
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Let's Build the <br />
                <span className="text-[#FACC15]">Next Big Story.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-md">
                Have questions or looking to start a campaign? We're just a message away. Reach out and join the Hive today.
            </p>
            
            <div className="space-y-6">
                <a href="mailto:collabhive.in@gmail.com" className="flex items-center gap-4 text-xl font-bold hover:text-[#FACC15] transition-colors group">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-black transition-all">
                        <Mail />
                    </div>
                    collabhive.in@gmail.com
                </a>
                <a href="https://instagram.com/collabhive.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-bold hover:text-[#A855F7] transition-colors group">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-[#A855F7] transition-all">
                        <Instagram />
                    </div>
                    @collabhive.in
                </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 lg:mt-0 bg-neutral-900 p-8 md:p-12 rounded-[2rem] border border-neutral-800"
          >
            <h3 className="text-2xl font-bold mb-8">Send us a Quick Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-neutral-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15] text-white transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">I am a...</label>
                        <select className="w-full bg-neutral-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15] text-white transition-all outline-none appearance-none">
                            <option>Food Creator</option>
                            <option>Brand / Business</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                    <textarea 
                        rows={4}
                        placeholder="Tell us a bit about yourself or your project..." 
                        className="w-full bg-neutral-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15] text-white transition-all outline-none resize-none"
                    ></textarea>
                </div>
                <button className="w-full bg-[#FACC15] text-black py-4 rounded-xl font-black text-lg shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
                    Send Message
                    <Send className="w-5 h-5" />
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
