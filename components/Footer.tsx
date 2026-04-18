import React from "react";
import { Container } from "./ui/Layout";
import { personalInfo } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-black text-white">
            {personalInfo.name}<span className="text-blue-500">.</span>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {personalInfo.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
