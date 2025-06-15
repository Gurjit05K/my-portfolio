import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
      <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Daily Tracker</h3>
                        <p className="text-gray-400 mb-4">Developed a React-based daily tracking tool that lets users monitor habits and daily goals visually.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "JavaScript"].map((tech, key) =>(
                                <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                 {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="https://github.com/Gurjit05K/daily-tracker" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Recipe Bot</h3>
                        <p className="text-gray-400 mb-4">Created a chatbot assistant that suggests personalized recipes based on user input like BMI, food preference, and ingredients.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "JavaScript", "Flask", "API"].map((tech, key) =>(
                                <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                 {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="https://github.com/Gurjit05K/recipe-bot" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Weather App</h3>
                        <p className="text-gray-400 mb-4">Developed a responsive weather web app that fetches real-time weather data and 3-hourly forecasts using the OpenWeather API.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript", "API"].map((tech, key) =>(
                                <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                 {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="https://github.com/Gurjit05K/weather-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Task Dashboard</h3>
                        <p className="text-gray-400 mb-4">Built a responsive and interactive web dashboard that allows users to add, track, and manage daily tasks efficiently.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript"].map((tech, key) =>(
                                <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                 {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="https://github.com/Gurjit05K/task-dashboard" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            </RevealOnScroll>
      </section>
      
    );
};