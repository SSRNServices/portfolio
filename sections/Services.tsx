"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { services } from "@/lib/data";

export const Services = () => {
  return (
    <Section id="service" className="bg-slate-950 text-white">
      <Container>
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            What I Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            I help businesses and individuals build premium digital products with a focus on quality, performance, and user experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon size={32} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <Check size={12} className="text-blue-500" />
                    </div>
                    {feature}
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
