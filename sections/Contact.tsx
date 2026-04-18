"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin, Send, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setErrorMessage("Name is required");
      setStatus("error");
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }
    if (trimmedMessage.length < 5) {
      setErrorMessage("Message must be at least 5 characters long");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://n8n.ssrn.online/webhook/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          source: "Portfolio Website",
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the server. Please try again later.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              SSRN Services is always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Mail className="text-blue-500" />} 
                title="Email Us" 
                value={personalInfo.email} 
                href={`mailto:${personalInfo.email}`}
              />
              <ContactInfoItem 
                icon={<PhoneCall className="text-blue-500" />} 
                title="Call Us" 
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
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 size={80} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-8">
                  Thank you for reaching out. SSRN Services will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="rounded-xl"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                  <input 
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-bold bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                    {errorMessage}
                  </p>
                )}

                <Button 
                  disabled={status === "loading"}
                  type="submit"
                  size="lg" 
                  className="w-full gap-2 py-6 rounded-2xl"
                >
                  {status === "loading" ? (
                    <>Sending... <Loader2 className="animate-spin" size={20} /></>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </Button>
              </form>
            )}
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
