"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin, Send, MessageSquare } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-950 text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Let's <span className="text-blue-500">Connect</span> & Build Something Great.
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Mail className="text-blue-500" />} 
                title="Email Me" 
                value={personalInfo.email} 
                href={`mailto:${personalInfo.email}`}
              />
              <ContactInfoItem 
                icon={<PhoneCall className="text-blue-500" />} 
                title="Call Me" 
                value={personalInfo.phone} 
                href={`tel:${personalInfo.phone}`}
              />
              <ContactInfoItem 
                icon={<MapPin className="text-blue-500" />} 
                title="Location" 
                value={personalInfo.location} 
                href="#"
              />
              <ContactInfoItem 
                icon={<MessageSquare className="text-blue-500" />} 
                title="WhatsApp" 
                value={personalInfo.whatsapp} 
                href={personalInfo.socials.find(s => s.name === "WhatsApp")?.href || "#"}
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white resize-none"
                />
              </div>

              <Button size="lg" className="w-full gap-2 py-6 rounded-2xl">
                Send Message <Send size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

const ContactInfoItem = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) => (
  <a 
    href={href} 
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
      <div className="group-hover:text-white group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
      <p className="text-lg font-bold group-hover:text-blue-400 transition-colors">{value}</p>
    </div>
  </a>
);
