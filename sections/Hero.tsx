"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Smartphone, Rocket } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { personalInfo, professions } from "@/lib/data";
import { TypeAnimation } from 'react-type-animation';
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <Section id="home" className="relative min-h-screen flex items-center pt-32 lg:pt-0 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6">
              {personalInfo.greeting}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{personalInfo.name}</span>
            </h1>

            <div className="text-2xl lg:text-3xl font-bold text-gray-400 mb-8 h-12">
              <TypeAnimation
                sequence={professions.flatMap(p => [p, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-12 mb-12">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-black text-white">{stat.value}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="gap-2">
                Hire Me <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg" className="gap-2">
                <Download size={20} /> Download CV
              </Button>
            </div>

            <div className="flex items-center gap-6">
              {personalInfo.socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`text-gray-500 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto">
              {/* Profile Background Decor */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl rotate-6 -z-10" />
              <div className="absolute inset-0 bg-slate-900 border border-white/10 rounded-3xl -z-10 shadow-2xl" />
              
              <Image
                src="/images/img.jpg"
                alt="SSRN Services"
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-cover rounded-3xl p-2"
                priority
              />

              {/* Floating Cards */}
              <FloatingCard 
                icon={<Code className="text-blue-400" />} 
                text="Clean Code" 
                className="top-10 -left-10"
                delay={0}
              />
              <FloatingCard 
                icon={<Smartphone className="text-purple-400" />} 
                text="Responsive" 
                className="bottom-20 -right-12"
                delay={0.2}
              />
              <FloatingCard 
                icon={<Rocket className="text-orange-400" />} 
                text="Fast Loading" 
                className="-bottom-8 left-1/4"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

const FloatingCard = ({ icon, text, className, delay }: { icon: React.ReactNode, text: string, className: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={cn(
      "absolute flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl",
      className
    )}
  >
    {icon}
    <span className="text-sm font-bold text-white whitespace-nowrap">{text}</span>
  </motion.div>
);
