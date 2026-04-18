"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { projects } from "@/lib/data";

export const Projects = () => {
  return (
    <Section id="project" className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-xl text-lg">
              A collection of my recent work, ranging from complex web applications to experimental UI experiments.
            </p>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
          >
            <Code2 size={20} /> View All GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.live} 
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href={project.github} 
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl hover:scale-110 transition-transform"
                  >
                    <Code2 size={24} />
                  </a>

                </div>
              </div>

              {/* Info Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1 bg-white text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">Next-gen Application</span>
                  <a href={project.live} className="text-sm font-black text-blue-600 flex items-center gap-1 group/btn">
                    View Project <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ArrowUpRight = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
