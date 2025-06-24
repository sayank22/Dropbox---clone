import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/helper/isomorphicEffect";

gsap.registerPlugin(ScrollTrigger);

const Testing = () => {
    const containerRef = useRef(null);
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const svgRef = useRef(null);


    // multiple box arrage in differnt position to cenert with scroll trigger
    const b1 = useRef(null);
    const b2 = useRef(null);
    const b3 = useRef(null);
    const b4 = useRef(null);


   useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // initial state
        gsap.set(svgRef.current, {
            scale: 5,
            transformOrigin: "center",
        });

        gsap.set(box2Ref.current, {
            opacity: 0,
            // scale: 0.5,
        });

        // Start the four boxes outside the screen
        gsap.set(b1.current, {
            opacity: 0,
            x: -500, // from left
            y: -500, // from top
        });
        gsap.set(b2.current, {
            opacity: 0,
            x: 500, // from right
            y: -500, // from top
        });
        gsap.set(b3.current, {
            opacity: 0,
            x: -500, // from left
            y: 500, // from bottom
        });
        gsap.set(b4.current, {
            opacity: 0,
            x: 500, // from right
            y: 500, // from bottom
        });

        // timeline
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: true,
                pin: true,
            },
        })
            .to(svgRef.current, {
                scale: 1,
                transformOrigin: "center",
                ease: "power2.inOut",
            })
            .to(box1Ref.current, {
                opacity: 0,
                ease: "power2.out",
            })
            .to(
                box2Ref.current,
                {
                    opacity: 1,
                    ease: "power2.out",
                },
                "<" // overlap
            )
            .to(
                [b1.current, b2.current, b3.current, b4.current],
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: "power2.out",
                    stagger: 0.1,
                },
                "<" // overlap with box2
            );
    }, containerRef);

    return () => ctx.revert();
}, []);



    return (

        <div ref={containerRef} className="h-[100vh] flex justify-center items-center relative">

            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 100"
                ref={svgRef}
            >
                {/* Horizontal */}
                <line x1="0" y1="5%" x2="100%" y2="5%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="15%" x2="100%" y2="15%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="45%" x2="100%" y2="45%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="85%" x2="100%" y2="85%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                <line x1="0" y1="95%" x2="100%" y2="95%" stroke="#60a5fa" strokeWidth="0.1" key="h1" />,
                {/* Vertical */}
                <line x1="5%" y1="0" x2="5%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
                <line x1="95%" y1="0" x2="95%" y2="100%" stroke="#60a5fa" strokeWidth="0.1" key="v1" />,
            </svg>
            <div
                ref={box1Ref}
                className="absolute w-40 h-24 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold shadow-md"
            >
                box1
            </div>

            <div
                ref={box2Ref}
                className="absolute w-40 h-24 rounded-lg bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-white text-xl font-semibold shadow-md"
            >
                box2
            </div>

            {/* box arrmant  */}
            <div>
                <div
                    ref={b1}
                    className="absolute w-40 h-24 rounded-lg bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white text-xl font-semibold shadow-md"
                    style={{ top: "10%", left: "10%" }}
                >
                    b1
                </div>
                <div
                    ref={b2}
                    className="absolute w-40 h-24 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-xl font-semibold shadow-md"
                    style={{ top: "10%", left: "50%" }}
                >
                    b2
                </div>
                <div
                    ref={b3}
                    className="absolute w-40 h-24 rounded-lg bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white text-xl font-semibold shadow-md"
                    style={{ top: "50%", left: "10%" }}
                >
                    b3
                </div>
                <div
                    ref={b4}
                    className="absolute w-40 h-24 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xl font-semibold shadow-md"
                    style={{ top: "50%", left: "50%" }}
                >
                    b4
                </div>
            </div>
        </div>
    );
};

export default Testing;
