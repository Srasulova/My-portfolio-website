import Image from 'next/image'
import HeroArea from './components/hero_area'
import AboutMe from './components/about_me'
import MyTechStack from './components/my_tech_stack'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <HeroArea />
      <AboutMe />
      <MyTechStack />
    </main>
  )
}
