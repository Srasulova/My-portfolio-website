import Image from 'next/image'
import heroBG from "../../../public/hero-bg.jpg"
import logo from "../../../public/portfolio logo.png"


export default function HeroArea() {
    return (
        <>
            <div className='w-screen h-4/5 '>
                <div className="bg-gray-900">
                    <header className="absolute inset-x-0 top-0 z-50">
                        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                            <div className="flex-none">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <Image className="h-8 w-auto" src={logo} alt="" />
                                </a>
                            </div>
                            {/* <div className="flex lg:hidden">
                                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div> */}
                            <div className="hidden  justify-center lg:flex lg:gap-x-12 mx-10">
                                <a href="#" className="text-sm font-light leading-6 tracking-wider text-white hover:text-teal-300 active:text-purple-400 focus:text-pink-300">About me</a>
                                <a href="#" className="text-sm font-light leading-6 tracking-wider text-white hover:text-teal-300 active:text-purple-400 focus:text-pink-300">Projects</a>
                                <a href="#" className="text-sm font-light leading-6 tracking-wider text-white hover:text-teal-300 active:text-purple-400 focus:text-pink-300">Contacts</a>

                            </div>

                        </nav>
                        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                        {/* add here lg:hidden */}
                        <div className="hidden" role="dialog" aria-modal="true">
                            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                            <div className="fixed inset-0 z-50"></div>
                            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <Image className="h-8 w-auto" src="" alt="" />
                                    </a>
                                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/25">
                                        <div className="space-y-2 py-6">
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">About me</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Projects</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Contacts</a>

                                        </div>
                                        <div className="py-6">
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="relative isolate overflow-hidden pt-14">
                        <Image src={heroBG} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl bg-black opacity-30 sm:-top-80 " aria-hidden="true">
                            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                        </div>
                        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">

                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-wider text-white sm:text-6xl">I&apos;m Sabina. <br />I&apos;m a Front End Developer. </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-100 tracking-wider">Turning &quot;Can I do this?&quot; into &quot;Look what I did!&quot;</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 opacity-70 hover:opacity-90">
                                    {/* <button className="bg-transparent border-2 border-l-pink-600 border-t-rose-400 border-b-purple-500 border-r-teal-400 text-white font-semibold rounded-md p-3">Check out my resume
                                    </button> */}
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-pink-200 rounded-lg group bg-gradient-to-br from-teal-400 to-pink-500  hover:text-white dark:text-white focus:ring-2 focus:outline-none hover:from-teal-600 hover:to-rose-600 focus:ring-pink-600 dark:focus:ring-purple-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 tracking-wide">
                                            Download my resume
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl bg-black opacity-40 sm:top-[calc(100%-30rem)]" aria-hidden="true">
                            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}