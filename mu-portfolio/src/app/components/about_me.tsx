import Image from 'next/image'
import loveYourJob from "../../../public/loveWhatYouDo.jpg"

export default function AboutMe() {
    return (
        <>
            <div className="bg-white py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row h-auto" >
                        <div className="w-full lg:max-w-lg lg:flex-auto ">
                            <Image src={loveYourJob} alt="" className="aspect-[3/4] w-full rounded-md bg-gray-50 object-cover " />
                        </div>
                        <div className="w-full lg:max-w-xl lg:flex-auto">

                            <h2 className="text-3xl mb-12 font-bold tracking-wide text-rose-500 sm:text-4xl">About me</h2>
                            <p className="mb-4 text-zinc-700">Originally from Azerbaijan, I&apos;m Sabina, currently based in the US, enjoying life with my family, including a sweet baby girl. </p>

                            <p className="mb-4  text-zinc-700">For more than 15 years, I worked in customer service, but at some point the thrill started to fade. Seeking a new chapter, I took a leap into the unknown and found my passion in web development. A fresh face in the web development world, I&apos;m eagerly embracing the journey, building websites, applications, and anything that involves code. Still got a long road ahead, and I must admit, it&apos;s one exciting learning curve.</p>

                            <p className="mb-4  text-zinc-700">I thrive in collaborative spaces, where creativity is the name of the game, and challenges are my playground. Being naturally curious, I&apos;m that person who loves diving into new things, be it coding complexities or the pages of a good book.</p>

                            {/* <p className="mb-4  text-zinc-700">In addition to coding adventures, I&apos;m all about helping others and soaking up family time. Whether it&apos;s cracking a coding problem, turning the mundane into something exciting, or connecting with fellow enthusiasts to chat about career growth, technologies, and life in general, count me in!</p> */}

                            <p className="mb-4  text-zinc-700">My portfolio isn&apos;t just about showcasing projects; it&apos;s a visual story of my growth, resilience, and the joy of constantly evolving. Join me on this adventure, where every line of code is a step closer to creating something extraordinary. Cheers to the journey!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}