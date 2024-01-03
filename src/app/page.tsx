"use client"

import { useEffect, useState, useRef } from "react";

import Image from 'next/image'
import HeroArea from './components/hero_area'
import AboutMe from './components/about_me'
import MyTechStack from './components/my_tech_stack'
import MyProjects from './components/my_projects'
import talkIsCheap from "../../public/talkischeap.jpg"
import Contacts from './components/contacts'
import Footer from './components/footer'

export default function Home() {

  function useIsVisible(ref: React.RefObject<HTMLDivElement> | null) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
        console.log(entry)
      }
      );

      if (ref && ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);

  const ref6 = useRef<HTMLDivElement>(null);
  const isVisible6 = useIsVisible(ref6);

  return (
    <main className="w-screen h-screen">
      <HeroArea />

      <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <AboutMe />
      </div>

      <div ref={ref2} className={`transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <MyTechStack />
      </div>

      {/* (<div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}> */}
      <div className='w-screen h-auto '>
        <div className="relative isolate overflow-hidden">
          <Image src={talkIsCheap} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom blur-sm" />
          <div className={`mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 text-center transition-opacity ease-in duration-1000 ${isVisible6 ? "opacity-100" : "opacity-0"}`} ref={ref6}>
            <p className="text-4xl font-semibold tracking-wider text-white sm:text-4xl">“Talk is cheap. Show me the code.” </p>
            <p className="mt-6 text-lg leading-8 text-gray-100 tracking-wider italic"> - Linus Torvalds</p>
          </div>
        </div>
      </div>
      {/* </div>) */}

      <div ref={ref4} className={`transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
        <MyProjects />
      </div>

      <div ref={ref5} className={`transition-opacity ease-in duration-1000 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
        <Contacts />
      </div>

      <Footer />
    </main >
  )
}
