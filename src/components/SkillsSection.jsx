import { useState } from "react"
import { cn } from "../lib/utils";

const skills=[
    //languages
    {name:"C++", level:95, category:"Programming Languages"},
    {name:"c", level:95, category:"Programming Languages"},
    {name:"Python", level:75, category:"Programming Languages"},
    {name:"SQL", level:85, category:"Programming Languages"},

    //frontend
    {name:"HTML", level:95, category:"Frontend"},
    {name:"CSS", level:90, category:"Frontend"},
    {name:"Javascript", level:50, category:"Frontend"},
    {name:"React", level:60, category:"Frontend"},

    //microcontrollers
    {name:"8051", level:90, category:"Microcontrollers"},
    {name:"LPC2138", level:90, category:"Microcontrollers"},
    {name:"ESP32", level:80, category:"Microcontrollers"},

    //tools
    {name:"Figma", level:85, category:"Tools"},
    {name:"Excel", level:90, category:"Tools"},
    {name:"Proteus", level:90, category:"Tools"},
    {name:"Keil uVision", level:75, category:"Tools"},
    {name:"Git/GitHub", level:85, category:"Tools"},
    {name:"VS Code", level:95, category:"Tools"}

];

const categories=["all", "Programming Languages", "Frontend", "Microcontrollers", "Tools"];

export const SkillSection = ()=>{
    const [activeCategory, setActiveCategory]=useState("all");

    const filteresSkills=skills.filter(
        (skill)=>activeCategory==="all" || skill.category===activeCategory);



    return <section id="skills" className="py-24 px-24 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-14 mb-12">
                {categories.map((category, key)=>(
                    <button key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capatilize",
                        activeCategory===category? "bg-primary text-primary-foreground" : "bg-secondary/70 text-goreground hover:bg-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteresSkills.map((skill, key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width:skill.level+"%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    </section>
}