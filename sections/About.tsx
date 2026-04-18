"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Download } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export const About = () => {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 transition-transform group-hover:rotate-3 -z-10" />
              <div className="absolute inset-0 bg-slate-100 rounded-2xl -z-10" />
              
              <Image
                src="/images/img.jpg"
                alt="About Amine"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover rounded-2xl shadow-xl p-2"
              />

              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl flex flex-col items-center min-w-[140px]">
                <span className="text-4xl font-black">{personalInfo.experience}</span>
                <span className="text-xs uppercase font-bold tracking-tighter text-blue-100 text-center">
                  Years<br />Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-8 relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-20 h-1.5 bg-blue-600 rounded-full" />
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                I'm a passionate web developer based in Algeria with a strong foundation in both frontend and backend technologies. My journey in web development started 3 years ago, and I've been constantly learning and adapting to new technologies ever since.
              </p>
              <p>
                I specialize in creating responsive, user-friendly websites and web applications using modern frameworks and libraries. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-10">
              <HighlightItem 
                icon={<GraduationCap className="text-blue-600" />} 
                title="Education" 
                desc="Computer Science" 
              />
              <HighlightItem 
                icon={<MapPin className="text-blue-600" />} 
                title="Location" 
                desc={personalInfo.location} 
              />
              <HighlightItem 
                icon={<Briefcase className="text-blue-600" />} 
                title="Experience" 
                desc={`${personalInfo.experience} Years in Web Development`} 
              />
            </div>

            <Button variant="outline" size="lg" className="gap-2">
              <Download size={20} /> Download CV
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

const HighlightItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 leading-none mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  </div>
);
