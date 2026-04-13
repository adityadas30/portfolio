"use client";

import { useEffect, useState, useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CyberGlitchText } from "@/components/ui/cyber-glitch-text";
import { MusicCard } from "@/components/hero/music-card";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.3-1.5 6.3-6.74a5.2 5.2 0 0 0-1.4-3.6 5.1 5.1 0 0 0-.1-3.6s-1.1-.4-3.5 1.3a12.5 12.5 0 0 0-6.2 0C6.6 3.1 5.5 3.5 5.5 3.5a5.1 5.1 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.3 6.74a4.8 4.8 0 0 0-1 3.26v4"></path>
    <path d="M9 20.1C5 21.5 3 19 2 18"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// 1. Custom Cursor
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return;
    
    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");
    
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest(".group")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-[#ee6c36] rounded-full pointer-events-none z-[9999]"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        scale: isHovering ? 2.5 : 1,
        opacity: isHovering ? 0.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
    />
  );
}

// Section Reveal Component
function Reveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const heroFonts = [
  "var(--font-geist)",
  "var(--font-bitcount)",
  "var(--font-saira)",
];

function AnimatedHeroName() {
  const [mounted, setMounted] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % heroFonts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <>
      {/* Mobile static fallback */}
      <h1 className="md:hidden text-[2.75rem] sm:text-5xl font-bold tracking-tighter leading-none mb-4 font-hero text-white whitespace-pre">
        {`Aditya Das`}
      </h1>

      {/* Desktop animated block */}
      <div className="hidden md:flex text-[7rem] font-bold tracking-tighter leading-none mb-4 h-[8rem] items-center relative overflow-hidden text-white">
        {mounted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={fontIndex}
              initial={{ opacity: 0, rotateX: 30, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: -30, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center whitespace-pre z-10"
              style={{ fontFamily: heroFonts[fontIndex] }}
            >
              {`Aditya Das`}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 flex items-center whitespace-pre z-10" style={{ fontFamily: heroFonts[0] }}>
              {`Aditya Das`}
          </div>
        )}
      </div>
    </>
  );
}


export default function Home() {
  return (
    <main className="relative min-h-screen break-words">
      <CustomCursor />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-white/80 backdrop-blur-md px-5 md:px-6 py-3 rounded-full border border-gray-200 shadow-sm flex gap-4 md:gap-6 text-[9px] md:text-[11px] font-medium tracking-wider text-gray-500 uppercase font-mono overflow-x-auto whitespace-nowrap hide-scrollbar max-w-[90vw]">
          <Link href="#home" className="hover:text-black transition-colors">Home</Link>
          <Link href="#education" className="hover:text-black transition-colors">Education</Link>
          <Link href="#experience" className="hover:text-black transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-black transition-colors">Projects</Link>
          <Link href="#connect" className="hover:text-black transition-colors">Connect</Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="h-[90vh] bg-black flex flex-col justify-center px-6 md:px-24 lg:px-32">
        <div className="max-w-7xl w-full mx-auto relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <AnimatedHeroName />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex items-center justify-center md:justify-start gap-3 flex-wrap md:flex-nowrap text-[10px] md:text-sm font-medium tracking-widest text-gray-400 uppercase mt-6 mb-12 md:mb-16"
            >
              <span className="w-2 h-2 rounded-full bg-[#ee6c36] flex-shrink-0"></span>
              <CyberGlitchText text="Artificial Intelligence @ Purdue" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <Link href="mailto:contact@example.com" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#ee6c36] hover:border-[#ee6c36] hover:scale-[1.05] transition-all duration-300">
                <Mail className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#ee6c36] hover:border-[#ee6c36] hover:scale-[1.05] transition-all duration-300">
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link href="https://github.com" target="_blank" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#ee6c36] hover:border-[#ee6c36] hover:scale-[1.05] transition-all duration-300">
                <GithubIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Music Card */}
          <div className="flex justify-center md:justify-end lg:pr-12 w-full mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              <MusicCard />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="flex flex-col w-full">
        
        {/* Education & Skills */}
        <section id="education" className="py-24 px-6 md:px-24 bg-[#faf9f6]">
          <Reveal>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <h2 className="text-xl font-medium tracking-tight text-black">Education / Skills</h2>
              </div>
              
              <div className="md:col-span-9">
                <div className="mb-12">
                  <p className="text-[#ee6c36] text-[10px] font-bold tracking-widest uppercase mb-3">Institution</p>
                  <h3 className="text-3xl font-medium tracking-tight text-black mb-2">Purdue University</h3>
                  <p className="text-gray-500 mb-4">B.S. Artificial Intelligence</p>
                  <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                    Expected Graduation: May 2028
                  </p>
                </div>

                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Frontend */}
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Frontend</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "React", icon: "/images/skills/frontend/react.svg" },
                        { name: "TypeScript", icon: "/images/skills/frontend/typescript.svg" },
                        { name: "JavaScript", icon: "/images/skills/frontend/javascript.svg" }
                      ].map((skill) => (
                        <span key={skill.name} className="px-4 py-2 bg-gray-200/50 text-gray-600 text-[11px] font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                          <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Backend */}
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Backend</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "Python", icon: "/images/skills/backend/python.svg" },
                        { name: "FastAPI", icon: "/images/skills/backend/fastapi.svg" },
                        { name: "PostgreSQL", icon: "/images/skills/backend/postgresql.svg" },
                        { name: "REST APIs", icon: "/images/skills/backend/rest-api.svg" }
                      ].map((skill) => (
                        <span key={skill.name} className="px-4 py-2 bg-gray-200/50 text-gray-600 text-[11px] font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                          <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* AI / ML */}
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">AI / ML</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "OpenAI", icon: "/images/skills/ai-data/openai.svg" },
                        { name: "PyTorch", icon: "/images/skills/ai-data/pytorch.svg" },
                        { name: "TensorFlow", icon: "/images/skills/ai-data/tensorflow.svg" },
                        { name: "RAG", icon: "/images/skills/ai-data/rag.svg" }
                      ].map((skill) => (
                        <span key={skill.name} className="px-4 py-2 bg-gray-200/50 text-gray-600 text-[11px] font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                          <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Tools */}
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Tools</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "Docker", icon: "/images/skills/tools/docker.svg" },
                        { name: "Git", icon: "/images/skills/tools/git.svg" },
                        { name: "AWS", icon: "/images/skills/tools/aws.svg" }
                      ].map((skill) => (
                        <span key={skill.name} className="px-4 py-2 bg-gray-200/50 text-gray-600 text-[11px] font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                          <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 px-6 md:px-24 bg-[#f4f3ef]">
          <Reveal>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <h2 className="text-xl font-medium tracking-tight text-black">Experience</h2>
              </div>
              
              <div className="md:col-span-9 flex flex-col gap-16">
                {/* Job 1 */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-white border border-gray-200 rounded-sm relative mt-1 flex items-center justify-center overflow-visible">
                    <img src="/images/brands/caterpillar.svg" alt="Caterpillar" className="w-8 h-8 object-contain" />
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#ee6c36]"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-2 group-hover:text-black transition-colors duration-300">May 2026 – Aug 2026</p>
                    <h3 className="text-xl font-medium tracking-tight text-black mb-1">Incoming Software Engineering / IT Intern</h3>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Caterpillar</p>
                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                      Incoming intern on AWS Platform Services, focused on backend systems, cloud infrastructure, and internal platform tooling.
                    </p>
                  </div>
                </div>

                {/* Job 2 (Outamation) */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-white border border-gray-200 rounded-sm relative mt-1 flex items-center justify-center overflow-visible">
                    <img src="/images/brands/outamation.svg" alt="Outamation" className="w-8 h-8 object-contain" />
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-gray-300"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-2 group-hover:text-black transition-colors duration-300">Mar 2026 – May 2026</p>
                    <h3 className="text-xl font-medium tracking-tight text-black mb-1">Document Intelligence Extern</h3>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Outamation</p>
                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                      Worked on document intelligence and automation workflows, integrating structured data pipelines and AI-assisted processing to reduce manual work.
                    </p>
                  </div>
                </div>
                
                {/* Job 3 (StudyPulse) */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-white border border-gray-200 rounded-sm relative mt-1 flex items-center justify-center overflow-visible">
                    <img src="/images/brands/studypulse.svg" alt="StudyPulse" className="w-8 h-8 object-contain" />
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-gray-300"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-2 group-hover:text-black transition-colors duration-300">Jun 2025 – Aug 2025</p>
                    <h3 className="text-xl font-medium tracking-tight text-black mb-1">AI Intern</h3>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">StudyPulse</p>
                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                      Built data ingestion and transformation pipelines using Python and PostgreSQL, developed GPT-powered backend services, and shipped validated REST APIs for real-time educational feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 md:px-24 bg-[#faf9f6]">
          <Reveal>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <h2 className="text-xl font-medium tracking-tight text-black">Projects</h2>
              </div>
              
              <div className="md:col-span-9 flex flex-col gap-12">
                {/* Project 1 */}
                <div className="group flex flex-col md:flex-row gap-6 md:items-center justify-between py-6 -mx-4 px-4 rounded-xl cursor-default transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-medium text-gray-400">01</span>
                    <div className="w-16 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                       <span className="text-gray-400 text-xs">img</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[10px] font-medium tracking-widest text-[#ee6c36] uppercase mb-1">Currently Building</div>
                      <h3 className="text-2xl font-medium tracking-tight text-black transition-colors duration-300">SafetyStop</h3>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">Currently building a real-time safety platform focused on practical detection, monitoring, and alert workflows for real-world environments.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase shrink-0">
                    <span>AI-powered platform</span>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group flex flex-col md:flex-row gap-6 md:items-center justify-between py-6 -mx-4 px-4 rounded-xl cursor-default transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-medium text-gray-400">02</span>
                    <div className="w-16 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                       <span className="text-gray-400 text-xs">img</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-medium tracking-tight text-black transition-colors duration-300">AutoTailor</h3>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">Built a full-stack tool that analyzes job descriptions and helps tailor resumes for stronger ATS alignment using GPT-powered workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase shrink-0">
                    <span>AI resume tool</span>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group flex flex-col md:flex-row gap-6 md:items-center justify-between py-6 -mx-4 px-4 rounded-xl cursor-default transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-medium text-gray-400">03</span>
                    <div className="w-16 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                       <span className="text-gray-400 text-xs">img</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-medium tracking-tight text-black transition-colors duration-300">Closet.AI</h3>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">Built a personalized recommendation platform for outfit and wardrobe suggestions with a focus on UX, backend structure, and intelligent matching.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase shrink-0">
                    <span>AI fashion matcher</span>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Connect */}
        <section id="connect" className="py-40 px-6 flex flex-col items-center justify-center text-center bg-[#f4f3ef]">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-12">Get in touch.</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="mailto:contact@example.com" className="px-8 py-3 rounded-full border border-gray-200 text-xs font-semibold tracking-widest text-black uppercase hover:bg-black hover:text-white transition-colors duration-300">
                Email
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="px-8 py-3 rounded-full border border-gray-200 text-xs font-semibold tracking-widest text-black uppercase hover:bg-black hover:text-white transition-colors duration-300">
                LinkedIn
              </Link>
              <Link href="https://github.com" target="_blank" className="px-8 py-3 rounded-full border border-gray-200 text-xs font-semibold tracking-widest text-black uppercase hover:bg-black hover:text-white transition-colors duration-300">
                GitHub
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase bg-[#faf9f6]">
          <div>
            <span className="text-black">Aditya Das</span> <span className="ml-2 font-normal">© 2026</span>
          </div>
          <div className="flex gap-6">
            <Link href="mailto:contact@example.com" className="hover:text-black transition-colors duration-300">Email</Link>
            <Link href="https://linkedin.com" className="hover:text-black transition-colors duration-300">LinkedIn</Link>
            <Link href="https://github.com" className="hover:text-black transition-colors duration-300">GitHub</Link>
            <Link href="#home" className="hover:text-black transition-colors duration-300 ml-4">Back to top</Link>
          </div>
        </footer>

      </div>
    </main>
  );
}
