import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills =["React", "JavaScript", "TailwindCSS"]


    return (
      <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Passionate developer focused on creating clean, user-centric websites. 
                Excited to learn, innovate, and contribute to projects that inspire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) =>(
                        <span
                        key={key} 
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                           {tech}
                        </span>))}
                </div>
            </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.Tech + M.Tech in Computer Science and Engineering</strong> - Jawaharlal Nehru Technological University, Hyderabad(2020-2025)
                        </li>
                        <li>
                            <strong>Intermediate</strong> - Sri Gayatri Junior College, Hyderabad(2018-2020)
                        </li>
                        <li>
                            <strong>10th</strong> - Ramadevi Public School, Hyderabad(2017-2018)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Intern at Bluestock Fintech</h4>
                            <p>
                                Worked as an Intern on a project “IPO Web Application & REST API Development” in Bluestock Fintech as a Software Development Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
       </section>
       
    
    );
};