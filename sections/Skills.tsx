"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Layout";
import { skills } from "@/lib/data";

export const Skills = () => {
  return (
    <Section id="skills" className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            My technical toolkit is constantly evolving. Here's a breakdown of the technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-700">{skill.name}</span>
                      <span className="text-xs font-black text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
