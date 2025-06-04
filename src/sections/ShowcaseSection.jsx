import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);





    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    })
    gsap.fromTo(
        sectionRef.current,
        { opacity: 0},
        { opacity: 1, duration: 1.5 }
    )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase" >
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                                <img src="/images/Project1.png" alt="Main Project" />
                        </div>
                        <div className="text-Content">
                            <h2>Game Scene Design</h2>
                            <p className="text-white-50 md:text-xl">
                                Concept of a scenery for a game
                            </p>
                        </div>
                    </div>
                    {/* RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                            </div>
                            <h2>Coming Soon...</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
