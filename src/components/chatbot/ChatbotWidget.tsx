import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getChatbotResponse } from './chatbotKnowledge';
import { ChatMessage } from '../../types';
import { Link } from 'react-router-dom';
import { sendEmailNotification } from '../../services/emailService';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: 'Hi, welcome to NEWHEIGHT AI SYSTEMS. I can help you explore our AI automation solutions, identify areas of your business that could be automated, or help you book a consultation. What are you looking to improve?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLeadCaptureMode, setIsLeadCaptureMode] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', business: '', email: '', challenge: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLeadCaptureMode]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    setTimeout(() => {
      const response = getChatbotResponse(currentInput);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: response.showBookingBtn ? [{ label: 'Book a Consultation', action: 'book' }] : undefined
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setLeadSubmitted(true);

    await sendEmailNotification({
      type: 'CHATBOT_LEAD',
      name: leadForm.name,
      email: leadForm.email,
      company: leadForm.business,
      message: leadForm.challenge || 'Submitted via Chatbot Audit Request Widget',
      details: {
        chatConversationLength: messages.length
      }
    });

    setMessages((prev) => [
      ...prev,
      {
        id: `bot-lead-confirm-${Date.now()}`,
        sender: 'assistant',
        text: `Thank you ${leadForm.name}! We've logged your request for ${leadForm.business || 'your business'} and notified our team at shegunfunmi81@gmail.com. A NEWHEIGHT system architect will review your challenge and email you shortly.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setIsLeadCaptureMode(false);
    setLeadSubmitted(false);
    setLeadForm({ name: '', business: '', email: '', challenge: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0B0D0F] border border-white/20 text-white font-sans text-xs uppercase tracking-wider font-bold shadow-2xl hover:bg-[#5B7CFA] hover:border-[#5B7CFA] transition-all"
          aria-label="Open Assistant"
        >
          <MessageSquare className="w-4 h-4 text-[#5B7CFA] group-hover:text-white" />
          <span>NEWHEIGHT AI ASSISTANT</span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[540px] max-h-[85vh] rounded-2xl bg-[#0B0D0F] border border-white/20 shadow-2xl flex flex-col overflow-hidden font-sans">
          {/* Header (Instrument Serif Title) */}
          <div className="p-4 bg-[#15191D] border-b border-white/10 flex items-center justify-between">
            <div>
              <h4 className="font-heading text-2xl text-white font-normal leading-tight">
                NEWHEIGHT AI ASSISTANT
              </h4>
              <p className="text-[10px] font-mono text-slate-400">Automated System Advisory</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#5B7CFA] text-white rounded-tr-none font-medium'
                      : 'bg-[#15191D] text-slate-200 border border-white/10 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[9px] font-mono text-slate-400 mt-1">
                    {msg.timestamp}
                  </span>

                  {msg.options && (
                    <div className="mt-3 pt-2 border-t border-white/10 flex flex-wrap gap-2">
                      <Link
                        to="/book-consultation"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#5B7CFA] text-white font-sans font-bold text-[10px] hover:bg-[#4a6be4] transition-colors"
                      >
                        Book Consultation
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <button
                        onClick={() => setIsLeadCaptureMode(true)}
                        className="px-3 py-1.5 rounded-full bg-white/10 text-slate-200 font-sans text-[10px] hover:bg-white/20 transition-colors"
                      >
                        Request Audit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLeadCaptureMode && (
              <div className="p-4 rounded-xl bg-[#15191D] border border-white/15 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-white font-sans text-[11px]">Audit Request</span>
                  <button onClick={() => setIsLeadCaptureMode(false)} className="text-slate-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-2 font-sans text-xs">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#5B7CFA]"
                  />
                  <input
                    type="email"
                    placeholder="Work Email *"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#5B7CFA]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded bg-[#5B7CFA] text-white font-bold text-xs"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-[#15191D] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about AI automation systems..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#5B7CFA]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#5B7CFA] text-white font-bold hover:bg-[#4a6be4] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
