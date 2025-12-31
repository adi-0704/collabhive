
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Hi! I am the CollabHive AI. How can I help you today? I can explain how we work with creators and brands!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the CollabHive AI assistant for the CollabHive Influencer Marketing Agency. 
          Your tone is professional, friendly, helpful, and premium.
          Key Information:
          - CollabHive connects creators from various niches (Food, Lifestyle, Fashion, Tech, Fitness, etc.) with brands for authentic collaborations.
          - We are currently in the creator onboarding phase. 
          - To join as a creator: Creators can click the "Join Creator Network" button on the website to build their profile.
          - For Brands: Brands can click "Work With Us" to share campaign goals.
          - IMPORTANT: Transparency Note: Joining the network does not guarantee immediate collaborations. Shortlisted creators are contacted when relevant opportunities arise.
          - Location: India.
          - Email: collabhive.in@gmail.com.
          - Instagram: @collabhive.in.
          Be concise and helpful. If asked something unrelated, politely steer the conversation back to CollabHive.`,
        },
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or email us at collabhive.in@gmail.com.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Oops! I am having some trouble connecting. Please try again later or reach out via email.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-3xl shadow-2xl border border-neutral-100 w-[350px] md:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-black text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center">
                  <Sparkles className="text-black w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold leading-none">CollabHive AI</h4>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Always Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-[#FACC15] transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-neutral-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#A855F7] text-white rounded-tr-none' 
                      : 'bg-white border border-neutral-200 text-black rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-neutral-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#A855F7]" />
                    <span className="text-xs text-neutral-500">Hive thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-neutral-100 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask CollabHive AI..."
                className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#FACC15] outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-[#A855F7] transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3 justify-end">
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white shadow-lg border border-neutral-100 px-4 py-2 rounded-full text-xs font-bold text-neutral-700 hidden sm:block"
          >
            Ask CollabHive AI
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#FACC15] text-black rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;
