import { Activity, BellElectric, Brain, Briefcase, ChartPieIcon, Code, Code2, Cpu, Globe, Layout, Monitor, User } from "lucide-react"

export const AboutSection=()=>{
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Engineering Student | Exploring Code, Circuits & Creativity</h3>

                    <p className="text-muted-foreground">
                        I’m an engineering student with a strong interest in electronics and programming. I’ve worked on projects using microcontrollers like the 8051 and ESP8266, and I enjoy solving problems with both code and circuits.
                    </p>

                    <p className="text-muted-foreground">
                        Along the way, I’ve started learning the basics of web development and design, and I love exploring how things work—whether it’s a line of C++ code or a simple webpage layout.


                    </p>  
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                        <a href="#contact" className="cosmic-button">Get In Touch</a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>  
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text=left">
                                <h4 className="font-semibold text-lg"> Programming & DSA</h4>
                                <p className="text-muted-foreground">Comfortable with C/C++ and problem-solving. I enjoy writing clean, logical code.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Cpu className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text=left">
                                <h4 className="font-semibold text-lg">Embedded Systems</h4>
                                <p className="text-muted-foreground">Hands-on experience with sensors, displays, and microcontrollers like 8051 and ESP8266.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Globe className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text=left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Learning the foundations of web development with HTML, CSS, and a bit of JavaScript.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}