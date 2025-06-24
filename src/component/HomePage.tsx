import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/helper/isomorphicEffect";
import DropBox from "../assets/svg/dropbox-svgrepo-com.svg";
import DropBoxWhite from "../assets/svg/dropbox-white-svgrepo-com.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {

  const [, setHoverActive] = useState(false);

  const containerRef = useRef(null);
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionTwoInner = useRef(null);
  const gridView = useRef(null);

  const paragraphRemove = useRef(null);
  const logoArrange = useRef(null);

  // Desktop refs
  const b1 = useRef(null);
  const b2 = useRef(null);
  const b3 = useRef(null);
  const b4 = useRef(null);
  const b5 = useRef(null);
  const b6 = useRef(null);
  const b7 = useRef(null);
  const b8 = useRef(null);

  // Mobile refs
  const mb1 = useRef(null);
  const mb2 = useRef(null);
  const mb3 = useRef(null);
  const mb4 = useRef(null);
  const mb5 = useRef(null);
  const mb6 = useRef(null);
  const mb7 = useRef(null);
  const mb8 = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {


      gsap.set(sectionTwo.current, { opacity: 0 });

      // Mobile  Animations 
      if (isMobile) {

        // Initial mobile
        gsap.set(gridView.current, {
          opacity: 1,
          scale: 3,
          transformOrigin: "center",
        });

        // Mobile initial positions
        gsap.set(mb1.current, { opacity: 0, scale: 0.5, x: -500, y: -500, rotation: -30 });
        gsap.set(mb2.current, { opacity: 0, scale: 0.5, x: 0, y: -500, rotation: 30 });
        gsap.set(mb3.current, { opacity: 0, scale: 0.5, x: 400, y: -500, rotation: -20 });
        gsap.set(mb4.current, { opacity: 0, scale: 0.5, x: 400, y: -500, rotation: 40 });
        gsap.set(mb5.current, { opacity: 0, scale: 0.5, x: -200, y: 100, rotation: -10 });
        gsap.set(mb6.current, { opacity: 0, scale: 0.5, x: -100, y: 500, rotation: 25 });
        gsap.set(mb7.current, { opacity: 0, scale: 0.5, x: 0, y: 500, rotation: -15 });
        gsap.set(mb8.current, { opacity: 0, scale: 0.5, x: 300, y: 500, rotation: 35 });


        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3500",
            scrub: true,
            pin: true,
            markers: false,
            pinSpacing: true,
          },
        });

        mobileTl.to(gridView.current, {
          scale: 2,
          xPercent: 0,
          yPercent: 0,
          transformOrigin: "center",
          duration: 1,
          ease: "power2.inOut",
        })
          .add("sectionTransitionMobile")
          .to(
            sectionOne.current, {
            scale: 0.6,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
            "sectionTransitionMobile"
          )
          .to(
            sectionTwo.current, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
            "sectionTransitionMobile"
          )
          .to(
            gridView.current, {
            scale: 1.5,
            xPercent: 0,
            yPercent: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
            "sectionTransitionMobile"
          )
          .add("sectionTwoDetailsMobile", "+=0.5")
          .to(
            paragraphRemove.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
            "sectionTwoDetailsMobile"
          )
          .to(
            sectionTwoInner.current, {
            scale: 0.15,
            duration: 1,
            ease: "power2.inOut",
          },
            "sectionTwoDetailsMobile"
          )
          .set(
            sectionTwoInner.current, {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "1vh",
          },
            "sectionTwoDetailsMobile"
          )
          .to(
            logoArrange.current, {
            scale: 3,
            marginTop: "-10vh",
            justifyContent: "center",
            width: "100%",
            duration: 0.8,
            ease: "power2.inOut",
          },
            "sectionTwoDetailsMobile"
          )
          .add("gridFinalScaleMobile", "+=0.5")
          .to(
            gridView.current, {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
            "gridFinalScaleMobile"
          )
          .add("boxesInMobile", "-=0.3")
          .to(
            [mb1.current, mb2.current, mb3.current, mb4.current, mb5.current, mb6.current, mb7.current, mb8.current], {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.15,
          },
            "boxesInMobile"
          );

      } else {
        // Desktop Animations

        // Initial desktop 
        gsap.set(gridView.current, {
          opacity: 1,
          scale: 4,
          transformOrigin: "center",
        });

        // Desktop initial positions
        gsap.set(b1.current, { opacity: 0, scale: 1.4, x: -500, y: -500 });
        gsap.set(b2.current, { opacity: 0, scale: 1.2, x: 0, y: -500 });
        gsap.set(b3.current, { opacity: 0, scale: 1.3, x: 0, y: -500 });
        gsap.set(b4.current, { opacity: 0, scale: 1.1, x: 400, y: -500 });
        gsap.set(b5.current, { opacity: 0, scale: 1.2, x: -200, y: 100 });
        gsap.set(b6.current, { opacity: 0, scale: 1, x: -100, y: 500 });
        gsap.set(b7.current, { opacity: 0, scale: 1, x: 0, y: 500 });
        gsap.set(b8.current, { opacity: 0, scale: 1.4, x: 300, y: 500 });

        const desktopTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: true,
            pin: true,
            markers: false,
            pinSpacing: true,
            onUpdate: (self) => {
              if (self.progress === 1) {
                setHoverActive(true);
              } else {
                setHoverActive(false);
              }
            },
          },
        });

        desktopTl
          .to(gridView.current, {
            scale: 3,
            xPercent: 0,
            yPercent: 0,
            transformOrigin: "center",
            duration: 1,
            ease: "power2.inOut",
          })
          .add("sectionTransition")
          .to(
            sectionOne.current, {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
            "sectionTransition"
          )
          .to(
            sectionTwo.current, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
            "sectionTransition"
          )
          .to(
            gridView.current, {
            scale: 2,
            xPercent: 0,
            yPercent: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
            "sectionTransition"
          )
          .add("sectionTwoDetails", "+=0.5")
          .to(
            paragraphRemove.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
            "sectionTwoDetails"
          )
          .to(
            sectionTwoInner.current, {
            scale: 0.12,
            duration: 1,
            ease: "power2.inOut",
          },
            "sectionTwoDetails"
          )
          .set(
            sectionTwoInner.current, {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "-1vh",
          },
            "sectionTwoDetails"
          )
          .to(
            logoArrange.current, {
            scale: 5,
            marginTop: "-15vh",
            justifyContent: "center",
            width: "100%",
            duration: 0.8,
            ease: "power2.inOut",
          },
            "sectionTwoDetails"
          )
          .add("gridFinalScale", "+=0.5")
          .to(
            gridView.current, {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
            "gridFinalScale"
          )
          .add("boxesIn", "-=0.3")
          .to(
            [b1.current, b2.current, b3.current, b4.current, b5.current, b6.current, b7.current, b8.current], {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.1,
          },
            "boxesIn"
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] flex justify-center items-center relative"
    >
      {/* Section 1 */}
      <div
        ref={sectionOne}
        className="absolute flex items-center justify-center w-full h-full "
      >
        <div className="w-[80%] h-[50%] md:w-[54%] md:h-[75%] flex flex-col justify-between p-4 md:p-8 dark:bg-[#0a0a0a] border-2 bg-[#FFFFFF] border-[#0061FF] rounded-lg">
          <div>
            <p
              className="text-2xl md:text-5xl font-bold mb-2 text-[#0061FF] leading-snug break-words w-[80%] md:w-[55%]"
              style={{ display: "block", overflowWrap: "break-word" }}
            >
              At Dropbox, our Brand Guidelines help us infuse everything we make
              with identity.
            </p>
          </div>
          <div className="logo mb-4 flex justify-start">
            <Image src={DropBox} alt="Dropbox Logo" width={100} height={100} />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={sectionTwo}
        className="absolute flex items-center justify-center w-full h-full"
      >
        <div
          ref={sectionTwoInner}
          className="w-[80%] h-[50%] md:w-[54%] md:h-[75%] flex flex-col justify-between p-4 md:p-8 border-2 bg-[#0061FF] border-[#0061FF] rounded-lg"
        >
          <div ref={paragraphRemove}>
            <p
              className="text-xl md:text-4xl font-bold mb-2 text-[#FFFFFF] leading-snug break-words w-[80%] md:w-[55%]"
              style={{ display: "block", overflowWrap: "break-word" }}
            >
              From icons to illustration logos to language, this collection is
              the foundation for how Dropbox looks, feels, and sounds like
              Dropbox.
            </p>
          </div>
          <div ref={logoArrange} className="logo flex justify-start">
            <Image
              src={DropBoxWhite}
              alt="Dropbox Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

     {/* Section 3 - row on mobile */}
      <div
        ref={gridView}
        className="w-full h-screen flex flex-col justify-center absolute items-center px-2"
      >
        {/* Mobile Layout - Hidden on desktop */}
        <div className="w-full flex flex-col items-center md:hidden gap-2">
          {/* Row 1 - Boxes 1 & 2 */}
          <div className="w-full flex flex-row justify-between gap-2">
            <div
  ref={mb1}
  className="w-[40%] h-[25vh] bg-blue-950 hover:bg-black text-white flex flex-col items-center justify-center rounded-tl-lg p-4 transition-colors duration-300 group"
>
  <h2 className="text-xl font-bold mb-2 text-gray-400 group-hover:text-white transition-colors duration-300 absolute top-5 left-5">
  Framework
</h2>
  <div className="w-24 h-24 flex items-center absolute inset-y-12 left-0">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Circles */}
      <circle cx="30" cy="30" r="7" className="fill-gray-400 group-hover:fill-white transition-colors duration-300" />
      <circle cx="70" cy="50" r="7" className="fill-gray-400 group-hover:fill-white transition-colors duration-300" />
      <circle cx="30" cy="70" r="7" className="fill-gray-400 group-hover:fill-white transition-colors duration-300" />

      {/* Lines */}
      <line x1="30" y1="30" x2="70" y2="50" className="stroke-gray-400 group-hover:stroke-black transition-colors duration-300" strokeWidth="2" />
      <line x1="30" y1="70" x2="70" y2="50" className="stroke-gray-400 group-hover:stroke-black transition-colors duration-300" strokeWidth="2" />
      <line x1="30" y1="50" x2="50" y2="50" className="stroke-blue-950 group-hover:stroke-white transition-colors duration-300" strokeWidth="2" />
    </svg>
  </div>
</div>
<div
  ref={mb2}
  className="w-[59%] h-[25vh] bg-yellow-400 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 group hover:bg-black"
>
  <h2 className="text-2xl font-bold mb-2 text-amber-900 absolute inset-x-5 top-5 group-hover:text-white transition-colors duration-300">
    Voice & Tone
  </h2>
  <div className="flex items-center space-x-2">
    <p className="text-8xl font-extrabold leading-none absolute inset-y-16 left-4 text-amber-900 group-hover:text-white transition-colors duration-300">
      &ldquo;
    </p>
    <p className="text-8xl font-extrabold leading-none absolute inset-y-16 right-20  text-amber-900 group-hover:text-white transition-colors duration-300">
      &rdquo;
    </p>
  </div>
</div>
          </div>

          {/* Row 2 - Boxes 3 & 4 */}
          <div className="w-full flex flex-row justify-between gap-2">
            <div
              ref={mb3}
              className="w-[62%] h-[20vh] bg-cyan-400 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 group hover:bg-black"
            >
              <h2 className="text-xl font-bold mb-2 text-blue-900 absolute inset-x-5 top-5 group-hover:text-white transition-colors duration-300">Logo</h2>
              <div className="w-5 h-5 flex items-center absolute bottom-5 left-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon
      points="50,0 0,25 0,75 50,100 100,75 100,25"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="50,0 25,12.5 25,37.5 50,50 75,37.5 75,12.5"
      className="fill-cyan-400 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="0,25 25,37.5 25,62.5 0,75"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="75,37.5 100,25 100,75 75,62.5"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="25,62.5 50,75 75,62.5 50,50"
      className="fill-cyan-400 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="25,62.5 0,75 50,100 75,62.5"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
  </svg>
</div>
            </div>
            <div
              ref={mb4}
              className="w-[40%] h-[30vh] bg-orange-600 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 group hover:bg-black"
            >
              <h2 className="text-2xl font-bold mb-2 text-red-900 absolute inset-x-2 top-5 group-hover:text-white transition-colors duration-300">Typography</h2>
              <p className="text-6xl font-extrabold leading-none text-red-900 absolute right-5 bottom-5 group-hover:text-white transition-colors duration-300">Aa</p>
            </div>
          </div>

          {/* Row 3 - Boxes 5 & 6 */}
          <div className="w-full flex flex-row justify-between gap-2">
            <div
              ref={mb5}
              className="w-[40%] h-[30vh] mt-[-10vh] bg-lime-400 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 group hover:bg-black"
            >
               <h2 className="text-xl font-bold mb-2 text-green-900 absolute inset-x-5 top-5 group-hover:text-white transition-colors duration-300">Iconography</h2>
              <div className="w-24 h-24 flex items-center justify-center">
               <div className="w-20 h-20 group absolute bottom-3 left-2">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Lock Body */}
    <rect
      x="25"
      y="40"
      width="60"
      height="50"
      rx="6"
      ry="6"
      fill="none"
      stroke="green"
      strokeWidth="4"
      className="group-hover:stroke-white transition-colors duration-300"
    />

    {/* Animated Shackle Group */}
    <g
      className="origin-[50px_40px] transition-transform duration-500 group-hover:-rotate-45"
    >
      <path
        d="M35 40 A15 30 0 0 1 73 40"
        fill="none"
        stroke="green"
        strokeWidth="4"
        className="group-hover:stroke-white transition-colors duration-300"
      />
    </g>

    {/* Keyhole */}
    <circle
      cx="55"
      cy="63"
      r="8"
      fill="green"
      className="group-hover:fill-white transition-colors duration-300"
    />
  </svg>
</div>
              </div>
            </div>
            <div
              ref={mb6}
              className="w-[60%] h-[20vh] bg-orange-400 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 group hover:bg-black"
            >
             <h2 className="text-xl font-bold mb-2 text-amber-900 absolute inset-x-5 top-5 group-hover:text-white transition-colors duration-300">Color</h2>
              <div className="flex space-x-4">
                <div className="w-5 h-5 bg-orange-900 rounded-md shadow-md absolute right-5 bottom-5 group-hover:bg-white transition-colors duration-300"></div>
                <div className="w-2 h-2 bg-amber-700 rounded-md shadow-md absolute right-6 bottom-6 group-hover:bg-black transition-colors duration-300"></div>
                <div className="w-5 h-5 bg-amber-700 rounded-md shadow-md absolute right-9 bottom-9 group-hover:bg-white transition-colors duration-300"></div>
                <div className="w-2 h-2 bg-orange-900 rounded-md shadow-md absolute right-10 bottom-10 group-hover:bg-black transition-colors duration-300"></div>
                
              </div>
            </div>
          </div>

         {/* Row 4 - Boxes 7 & 8 */}
<div className="w-full flex flex-row justify-between gap-2">
  {/* Box 7 - Imagery */}
  <div
    ref={mb7}
    className="relative w-[58%] h-[25vh] bg-pink-800 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 group hover:bg-black"
  >
    <h2 className="text-xl font-bold mb-2 text-pink-200 absolute inset-x-5 top-5 group-hover:text-white transition-colors duration-300">
      Imagery
    </h2>
   <div className="w-16 h-16 absolute right-5 bottom-5 flex items-center justify-center">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Rounded Rectangle */}
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="10"
      ry="10"
      fill="#9B59B6"
      className="group-hover:fill-none group-hover:stroke-white stroke-0 group-hover:stroke-2 transition-all duration-300"
    />

    {/* Sun */}
    <circle
      cx="35"
      cy="35"
      r="15"
      fill="#E74C3C"
      className="group-hover:opacity-0 transition-opacity duration-300"
    />

    {/* Moon (only visible on hover) */}
    <path
      d="M40 35 A15 15 0 1 1 25 35 A10 10 0 1 0 40 35 Z"
      fill="white"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />

    {/* Zigzag Path */}
    <path
      d="M20 70 L40 50 L60 60 L80 40 L90 70 Z"
      fill="#F39C12"
      className="group-hover:fill-none group-hover:stroke-white stroke-0 group-hover:stroke-2 transition-all duration-300"
    />
  </svg>
</div>

  </div>

  {/* Box 8 - Motion */}
  <div
    ref={mb8}
    className="w-[42%] h-[25vh] bg-purple-300 flex flex-col items-center justify-center text-white p-4 rounded-tr-lg transition-colors duration-300 hover:bg-black relative group"
  >
    <h2 className="text-xl font-bold mb-2 text-fuchsia-900 absolute inset-x-5 top-5 group-hover:text-white transition-colors duration-300">
      Motion
    </h2>
   <div className="w-24 h-24 flex items-center justify-center">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Circles */}
    <circle
      cx="5"
      cy="95"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />
    <circle
      cx="55"
      cy="95"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />
    <circle
      cx="45"
      cy="35"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />
    <circle
      cx="95"
      cy="35"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />

    {/* Top Line: connects top two circles */}
    <line
      x1="45"
      y1="35"
      x2="95"
      y2="35"
      className="stroke-purple-900 group-hover:stroke-white transition-colors duration-300"
      strokeWidth="2"
    />

    {/* Bottom Line: connects bottom two circles */}
    <line
      x1="5"
      y1="95"
      x2="55"
      y2="95"
      className="stroke-purple-900 group-hover:stroke-white transition-colors duration-300"
      strokeWidth="2"
    />

    {/* Connecting Line between top and bottom (center) */}
    <line
      x1="75"
      y1="35"
      x2="25"
      y2="95"
      className="stroke-purple-900 group-hover:stroke-white transition-colors duration-300"
      strokeWidth="2"
    />
  </svg>
</div>
  </div>
</div>
</div>
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:flex md:flex-row md:w-full md:justify-center md:gap-2">
          {/* Box 1 */}
          <div
            ref={b1}
            className="md:w-[20%] md:h-[54vh] bg-blue-950 flex flex-col items-center justify-center rounded-bl-lg p-4 group hover:bg-black transition-colors duration-300"
          >
            <h2 className="md:text-2xl font-bold mb-2 text-gray-400 group-hover:text-white transition-colors duration-300">Framework</h2>
            <div className="w-32 h-32 flex items-center">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Circles */}
      <circle
        cx="30"
        cy="30"
        r="7"
        className="fill-gray-400 group-hover:fill-white transition-colors duration-300"
      />
      <circle
        cx="70"
        cy="50"
        r="7"
        className="fill-gray-400 group-hover:fill-white transition-colors duration-300"
      />
      <circle
        cx="30"
        cy="70"
        r="7"
        className="fill-gray-400 group-hover:fill-white transition-colors duration-300"
      />

      {/* Lines */}
      <line
        x1="30"
        y1="30"
        x2="70"
        y2="50"
        className="stroke-gray-400 group-hover:stroke-black transition-colors duration-300"
        strokeWidth="2"
      />
      <line
        x1="30"
        y1="70"
        x2="70"
        y2="50"
        className="stroke-gray-400 group-hover:stroke-black transition-colors duration-300"
        strokeWidth="2"
      />
      <line
        x1="30"
        y1="50"
        x2="50"
        y2="50"
        className="stroke-blue-950 group-hover:stroke-white transition-colors duration-300"
        strokeWidth="2"
      />
    </svg>
  </div>
</div>

          {/* Box 2 */}
         <div
  ref={b2}
  className="md:w-[34%] md:h-[40vh] bg-yellow-400 text-white flex flex-col items-center justify-center p-4 md:-mt-[0vh] group hover:bg-black transition-colors duration-300"
          >
            <h2 className="md:text-3xl font-bold mb-2 text-amber-900 group-hover:text-white transition-colors duration-300">Voice & Tone</h2>
            <div className="flex items-center space-x-2">
    <p className="text-8xl font-extrabold leading-none  text-amber-900 group-hover:text-white transition-colors duration-300">
      &ldquo;
    </p>
    <p className="text-8xl font-extrabold leading-none text-amber-900 group-hover:text-white transition-colors duration-300">
      &rdquo;
    </p>
  </div>
          </div>

          {/* Box 3 */}
          <div
            ref={b3}
            className="md:w-[22%] md:h-[50vh] bg-cyan-400 flex flex-col items-center justify-center text-white p-4 rounded-br-lg transition-colors duration-300 group hover:bg-black"
          >
            <h2 className="md:text-3xl font-bold mb-2 text-blue-900 group-hover:text-white transition-colors duration-300">Logo</h2>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon
      points="50,0 0,25 0,75 50,100 100,75 100,25"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="50,0 25,12.5 25,37.5 50,50 75,37.5 75,12.5"
      className="fill-cyan-400 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="0,25 25,37.5 25,62.5 0,75"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="75,37.5 100,25 100,75 75,62.5"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="25,62.5 50,75 75,62.5 50,50"
      className="fill-cyan-400 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
    <polygon
      points="25,62.5 0,75 50,100 75,62.5"
      className="fill-blue-900 group-hover:fill-transparent group-hover:stroke-white transition-all duration-300"
      strokeWidth="1"
    />
  </svg>
            </div>
          </div>

          {/* Box 4 */}
          <div
            ref={b4}
            className="md:w-[20%] md:h-[39vh] bg-orange-600 flex flex-col items-center justify-center text-white p-4 rounded-br-lg transition-colors duration-300 group hover:bg-black"
          >
            <h2 className="md:text-3xl font-bold mb-2 text-red-900 group-hover:text-white transition-colors duration-300">Typography</h2>
            <p className="text-6xl font-extrabold leading-none text-red-900 group-hover:text-white transition-colors duration-300">Aa</p>
          </div>
        </div>

        {/* Second Row - Desktop */}
        <div className="hidden md:flex md:flex-row md:w-full md:justify-center md:gap-2">
          {/* Box 5 */}
          <div
            ref={b5}
            className="md:w-[20%] md:h-[37vh] md:mt-[1vh] bg-lime-400 flex flex-col items-center justify-center text-white p-4 rounded-bl-lg transition-colors duration-300 group hover:bg-black"
          >
            <h2 className="md:text-2xl font-bold mb-2 text-green-900 group-hover:text-white transition-colors duration-300">Iconography</h2>
               <div className="w-24 h-24 flex items-center justify-center">
               <div className="w-20 h-20 group">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Lock Body */}
    <rect
      x="25"
      y="40"
      width="60"
      height="50"
      rx="6"
      ry="6"
      fill="none"
      stroke="green"
      strokeWidth="8"
      className="group-hover:stroke-white transition-colors duration-300"
    />

    {/* Animated Shackle Group */}
    <g
      className="origin-[50px_40px] transition-transform duration-500 group-hover:-rotate-45"
    >
      <path
        d="M35 40 A15 25 0 0 1 75 40"
        fill="none"
        stroke="green"
        strokeWidth="8"
        className="group-hover:stroke-white transition-colors duration-300"
      />
    </g>

    {/* Keyhole */}
    <circle
      cx="55"
      cy="63"
      r="8"
      fill="green"
      className="group-hover:fill-white transition-colors duration-300"
    />
  </svg>
</div>
              </div>
            </div>

          {/* Box 6 */}
          <div
            ref={b6}
            className="md:w-[22%] md:h-[51vh] bg-orange-400 flex flex-col items-center justify-center text-white p-4 md:-mt-[13vh] rounded-bl-lg transition-colors duration-300 group hover:bg-black"
          >
            <h2 className="md:text-3xl font-bold mb-2 text-amber-900 group-hover:text-white transition-colors duration-300">Color</h2>
            <div className="flex space-x-4">
                <div className="w-5 h-5 bg-orange-900 rounded-md shadow-md group-hover:bg-white transition-colors duration-300"></div>
                <div className="w-2 h-2 bg-amber-700 rounded-md shadow-md group-hover:bg-black transition-colors duration-300"></div>
                <div className="w-5 h-5 bg-amber-700 rounded-md shadow-md group-hover:bg-white transition-colors duration-300"></div>
                <div className="w-2 h-2 bg-orange-900 rounded-md shadow-md group-hover:bg-black transition-colors duration-300"></div>
                
              </div>
            </div>

          {/* Box 7 */}
          <div
            ref={b7}
            className="md:w-[34%] md:h-[41vh] bg-pink-800 flex flex-col items-center justify-center text-white p-4 md:-mt-[3vh] transition-colors duration-300 group hover:bg-black"
          >
            <h2 className="md:text-3xl font-bold mb-2 text-pink-200 p-4 group-hover:text-white transition-colors duration-300">
      Imagery
    </h2>
             <div className="w-16 h-16 flex items-center justify-center">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Rounded Rectangle */}
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="10"
      ry="10"
      fill="#9B59B6"
      className="group-hover:fill-none group-hover:stroke-white stroke-0 group-hover:stroke-2 transition-all duration-300"
    />

    {/* Sun */}
    <circle
      cx="35"
      cy="35"
      r="15"
      fill="#E74C3C"
      className="group-hover:opacity-0 transition-opacity duration-300"
    />

    {/* Moon (only visible on hover) */}
    <path
      d="M40 35 A15 15 0 1 1 25 35 A10 10 0 1 0 40 35 Z"
      fill="white"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />

    {/* Zigzag Path */}
    <path
      d="M20 70 L40 50 L60 60 L80 40 L90 70 Z"
      fill="#F39C12"
      className="group-hover:fill-none group-hover:stroke-white stroke-0 group-hover:stroke-2 transition-all duration-300"
    />
  </svg>
</div>

  </div>


          {/* Box 8 */}
          <div
            ref={b8}
            className="md:w-[20%] md:h-[52vh] bg-purple-300 flex flex-col items-center justify-center text-white p-4 md:-mt-[14vh] rounded-br-lg transition-colors duration-300 hover:bg-black relative group"
          >
            <h2 className="md:text-3xl font-bold mb-2 text-fuchsia-900 group-hover:text-white transition-colors duration-300">
      Motion
    </h2>
               <div className="w-24 h-24 flex items-center justify-center">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Circles */}
    <circle
      cx="5"
      cy="95"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />
    <circle
      cx="55"
      cy="95"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />
    <circle
      cx="45"
      cy="35"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />
    <circle
      cx="95"
      cy="35"
      r="5"
      fill="purple"
      className="group-hover:fill-white transition-colors duration-300"
    />

    {/* Top Line: connects top two circles */}
    <line
      x1="45"
      y1="35"
      x2="95"
      y2="35"
      className="stroke-purple-900 group-hover:stroke-white transition-colors duration-300"
      strokeWidth="2"
    />

    {/* Bottom Line: connects bottom two circles */}
    <line
      x1="5"
      y1="95"
      x2="55"
      y2="95"
      className="stroke-purple-900 group-hover:stroke-white transition-colors duration-300"
      strokeWidth="2"
    />

    {/* Connecting Line between top and bottom (center) */}
    <line
      x1="75"
      y1="35"
      x2="25"
      y2="95"
      className="stroke-purple-900 group-hover:stroke-white transition-colors duration-300"
      strokeWidth="2"
    />
  </svg>
</div>
  </div>
</div>
</div>
</div>
  );
};

export default HomePage;