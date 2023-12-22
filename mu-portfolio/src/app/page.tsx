"use client"
import Image from 'next/image'
import HeroArea from './components/hero_area'
import AboutMe from './components/about_me'
import MyTechStack from './components/my_tech_stack'
import MyProjects from './components/my_projects'
import talkIsCheap from "../../public/talkischeap.jpg"
import Contacts from './components/contacts'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <HeroArea />
      <AboutMe />
      <MyTechStack />
      <div className='w-screen h-3/5 '>
        <div className="relative isolate overflow-hidden">
          <Image src={talkIsCheap} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom blur-sm" />
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 text-center">
            <p className="text-4xl font-semibold tracking-wider text-white sm:text-4xl">“Talk is cheap. Show me the code.” </p>
            <p className="mt-6 text-lg leading-8 text-gray-100 tracking-wider italic"> - Linus Torvalds</p>
          </div>
        </div>
      </div>
      <MyProjects />
      <Contacts />
      <Footer />
    </main>
  )
}
