import Image from 'next/image'
import HeroArea from './components/hero_area'
import AboutMe from './components/about_me'
import MyTechStack from './components/my_tech_stack'
import MyProjects from './components/my_projects'
import talkIsCheap from "../../public/talkischeap.jpg"

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <HeroArea />
      <AboutMe />
      <MyTechStack />
      <div className="w-screen h-1/2 flex flex-col">
        <Image src={talkIsCheap} alt="" className=" w-full h-full relative isolate object-cover object-bottom " />
        <blockquote className=' flex flex-col'> <p>“Talk is cheap. Show me the code.”</p>
          <p>Linus Torvalds</p>
        </blockquote>
      </div>
      <MyProjects />
    </main>
  )
}
