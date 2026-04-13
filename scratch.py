import sys

def main():
    path = "/Users/adityadas/portfolio-v2/src/app/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Education string
    old_education = '''                  <p className="text-[#ee6c36] text-[10px] font-bold tracking-widest uppercase mb-3">Institution</p>
                  <h3 className="text-3xl font-medium tracking-tight text-black mb-2">Purdue University</h3>
                  <p className="text-gray-500 mb-4">Artificial Intelligence</p>
                  <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                    Expected Graduation: May 2026
                  </p>'''
    new_education = '''                  <p className="text-[#ee6c36] text-[10px] font-bold tracking-widest uppercase mb-3">Institution</p>
                  <h3 className="text-3xl font-medium tracking-tight text-black mb-2">Purdue University</h3>
                  <p className="text-gray-500 mb-4">B.S. Artificial Intelligence</p>
                  <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                    Expected Graduation: May 2028
                  </p>'''
    content = content.replace(old_education, new_education)


    old_skills = '''                <div className="flex flex-wrap gap-3">
                  {["Neural Networks", "Computer Vision", "Python", "PyTorch", "Linear Algebra", "Data Structures"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-200/50 text-gray-600 text-xs font-medium rounded-full uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>'''

    new_skills = '''                <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 md:gap-3">
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
                </div>'''
    content = content.replace(old_skills, new_skills)

    old_exp = '''              <div className="md:col-span-9 flex flex-col gap-16">
                {/* Job 1 */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-sm relative mt-1">
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#ee6c36]"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-2 group-hover:text-black transition-colors duration-300">Summer 2026</p>
                    <h3 className="text-xl font-medium tracking-tight text-black mb-1">Research Intern</h3>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">AI Systems Laboratory</p>
                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                      Developing decentralized optimization protocols for large-scale language model fine-tuning. Focused on latency reduction in distributed environments.
                    </p>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-sm relative mt-1">
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-gray-300"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-2 group-hover:text-black transition-colors duration-300">Winter 2026</p>
                    <h3 className="text-xl font-medium tracking-tight text-black mb-1">Undergraduate Assistant</h3>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Department of Computing</p>
                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                      Assisting in the architectural design of student-facing infrastructure for automated grading of neural network submissions.
                    </p>
                  </div>
                </div>
              </div>'''
              
    new_exp = '''              <div className="md:col-span-9 flex flex-col gap-16">
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
              </div>'''
    content = content.replace(old_exp, new_exp)

    old_proj = '''              <div className="md:col-span-9 flex flex-col gap-12">
                {/* Project 1 */}
                <div className="group flex flex-col md:flex-row gap-6 md:items-center justify-between py-6 -mx-4 px-4 rounded-xl cursor-pointer hover:bg-gray-100/50 transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-medium text-gray-400">01</span>
                    <div className="w-16 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                       <span className="text-gray-400 text-xs">img</span>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-black group-hover:text-[#ee6c36] transition-colors duration-300">Kinetic Vision Engine</h3>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    <span>Real-Time Object Detection</span>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group flex flex-col md:flex-row gap-6 md:items-center justify-between py-6 -mx-4 px-4 rounded-xl cursor-pointer hover:bg-gray-100/50 transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-medium text-gray-400">02</span>
                    <div className="w-16 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                       <span className="text-gray-400 text-xs">img</span>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-black group-hover:text-[#ee6c36] transition-colors duration-300">Graph-Based Recommenders</h3>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    <span>Collaborative Filtering</span>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group flex flex-col md:flex-row gap-6 md:items-center justify-between py-6 -mx-4 px-4 rounded-xl cursor-pointer hover:bg-gray-100/50 transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-medium text-gray-400">03</span>
                    <div className="w-16 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                       <span className="text-gray-400 text-xs">img</span>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-black group-hover:text-[#ee6c36] transition-colors duration-300">Synthetic Data Gen</h3>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    <span>Generative Adversarial Nets</span>
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>
              </div>'''

    new_proj = '''              <div className="md:col-span-9 flex flex-col gap-12">
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
              </div>'''
    content = content.replace(old_proj, new_proj)


    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print("Success")

if __name__ == "__main__":
    main()
