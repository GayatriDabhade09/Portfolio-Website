import { useEffect, useState } from "react";

//star-id, size , x, y, opacity , animation duration
//meteor-id, size , x, y, delay , animation duration

export const StarBackground =()=>{
    const [stars, setStars]=useState([]);
    const [meteor, setMeteors]=useState([]);

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResize=()=>{
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener('resize', handleResize);
    }, []);

    const generateStars=()=>{
        const numberOfStars=Math.floor((window.innerWidth * window.innerHeight)/10000);

        const newStars=[]

        for(let i=0; i<numberOfStars; i++){
            newStars.push({
                id:i,
                size:Math.random()*3+1,   ///size bet 1-4 px
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5+0.5, //0.5-1,
                aimationDuration:Math.random()*4+2,
            });
        }

        setStars(newStars);
    };




    const generateMeteors=()=>{
        const numberOfMeteors=4;

        const newMeteors=[];

        for(let i=0; i<numberOfMeteors; i++){
            newMeteors.push({
                id:i,
                size:Math.random()*2+1,   ///size bet 1-4 px
                x:Math.random()*100,
                y:Math.random()*20,
                delay:Math.random()*15, //0.5-1,
                aimationDuration:Math.random()*3+3,
            });
        }

        setMeteors(newMeteors);
    };



    return(
         <div className="fixed inset-0 overflow-hidden pointer-events-none z=0">
            {stars.map((star)=>(
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size+"px",
                    height: star.size+"px",
                    left: star.x+"%",
                    top: star.y+"%",
                    opacity: star.opacity,
                    animationDuration:star.animationDuration+"s",
                }}/>
            )

            )}


            {meteor.map((meteor)=>(
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size*50+"px",
                    height: meteor.size*2+"px",
                    left: meteor.x+"%",
                    top: meteor.y+"%",
                    animatioDelay: meteor.delay,
                    animationDuration:meteor.animationDuration+"s",
                }}/>
            )

            )}

         </div>);
};