import Image from "next/image";
import calculator from "../../../public/calculator.jpg"
import githubIcon from "../../../public/github-mark.png"
import piggyBank from "../../../public/piggy bank.png"
import palindrome from "../../../public/palindromes-7-scaled.jpg"
import todoApp from "../../../public/todoApp.png"
import milosBakery from "../../../public/milosBakery.png"
import nourish from "../../../public/nourish1.png"


export default function MyProjects() {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto  text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl">My Projects</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Check out the code behind my projects on GitHub and feel free to send a friend request.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article className="flex flex-col items-start justify-between calculator">
                            <div className="relative w-full">
                                <Image src={calculator} alt="image of a calculator" className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-rose-100 flex items-center gap-1">
                                        <i><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Stream_On"><g><path d="M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"></path><path d="M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"></path><circle cx="12" cy="12" r="1.244"></circle><path d="M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"></path><path d="M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"></path></g></g></svg></i> Go Live</a>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100 flex items-center gap-1">
                                        <i>
                                            <Image src={githubIcon} alt="github icon" className="w-5 h-5" />
                                        </i> Check out the code in Github</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Basic calculator
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">My JavaScript journey&apos;s humble beginning – the &apos;Calc-u-lol-ator.&apos; Built with vanilla JS, this classic calculator project lets you perform basic math operations, clear the screen, and delete errors. Because every self-taught developer&apos;s portfolio needs a nod to the timeless &apos;calculator phase&apos; .</p>
                                </div>

                            </div>
                        </article>


                        <article className="flex flex-col items-start justify-between piggyBank">
                            <div className="relative w-full">
                                <Image src={piggyBank} alt="image of a piggy bank" className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-rose-100 flex items-center gap-1">
                                        <i><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Stream_On"><g><path d="M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"></path><path d="M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"></path><circle cx="12" cy="12" r="1.244"></circle><path d="M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"></path><path d="M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"></path></g></g></svg></i> Go Live</a>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100 flex items-center gap-1">
                                        <i>
                                            <Image src={githubIcon} alt="github icon" className="w-5 h-5" />
                                        </i> Check out the code in Github</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Budgeting App
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">Piggy Bank - Budgeting App, built with TypeScript and showcasing my first dive into Bootstrap! Easily add and track daily transactions, update balances, and keep an eye on savings progress bar. The sidebar navigation adds a neat touch, even if it&apos;s still a work in progress.</p>
                                </div>

                            </div>
                        </article>



                        <article className="flex flex-col items-start justify-between palindrome">
                            <div className="relative w-full">
                                <Image src={palindrome} alt="image of a calculator" className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-rose-100 flex items-center gap-1">
                                        <i><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Stream_On"><g><path d="M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"></path><path d="M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"></path><circle cx="12" cy="12" r="1.244"></circle><path d="M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"></path><path d="M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"></path></g></g></svg></i> Go Live</a>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100 flex items-center gap-1">
                                        <i>
                                            <Image src={githubIcon} alt="github icon" className="w-5 h-5" />
                                        </i> Check out the code in Github</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Palindrome checker
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">Check out my Palindrome Checker project, built with TypeScript and vanilla CSS! It&apos;s a handy tool that quickly tells you if a word or phrase, like &quot;radar&quot; reads the same backward as forward – a simple and fun exploration of coding logic.</p>
                                </div>

                            </div>
                        </article>



                        <article className="flex flex-col items-start justify-between todoApp">
                            <div className="relative w-full">
                                <Image src={todoApp} alt="image of a calculator" className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-rose-100 flex items-center gap-1">
                                        <i><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Stream_On"><g><path d="M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"></path><path d="M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"></path><circle cx="12" cy="12" r="1.244"></circle><path d="M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"></path><path d="M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"></path></g></g></svg></i> Go Live</a>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100 flex items-center gap-1">
                                        <i>
                                            <Image src={githubIcon} alt="github icon" className="w-5 h-5" />
                                        </i> Check out the code in Github</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            ToDo App
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">Explore my Todo App, made with React js, TS and my first go at Tailwind CSS. I built it 3 times to learn new things, like calling APIs. Easily add tasks, toggle completion and importance, and update details in the Edit modal. Manage your to-dos with separate Completed and Pending lists.</p>
                                </div>

                            </div>
                        </article>


                        <article className="flex flex-col items-start justify-between bakery">
                            <div className="relative w-full">
                                <Image src={milosBakery} alt="image of a calculator" className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-rose-100 flex items-center gap-1">
                                        <i><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Stream_On"><g><path d="M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"></path><path d="M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"></path><circle cx="12" cy="12" r="1.244"></circle><path d="M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"></path><path d="M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"></path></g></g></svg></i> Go Live</a>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100 flex items-center gap-1">
                                        <i>
                                            <Image src={githubIcon} alt="github icon" className="w-5 h-5" />
                                        </i> Check out the code in Github</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Single page Bakery website
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">A simple showcase of delightful cake designs. This was my 1st project built with React, initially using Bootstrap and later switching to Tailwind for a fresh look. Click on cake images to see an enlarged version, and find additional versions of this project on my GitHub account.</p>
                                </div>

                            </div>
                        </article>



                        <article className="flex flex-col items-start justify-between nourish">
                            <div className="relative w-full">
                                <Image src={nourish} alt="image of a calculator" className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-rose-100 flex items-center gap-1">
                                        <i><svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Stream_On"><g><path d="M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"></path><path d="M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"></path><circle cx="12" cy="12" r="1.244"></circle><path d="M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"></path><path d="M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"></path></g></g></svg></i> Go Live</a>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100 flex items-center gap-1">
                                        <i>
                                            <Image src={githubIcon} alt="github icon" className="w-5 h-5" />
                                        </i> Check out the code in Github</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Website for a not-for-profit program - WIP
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">I&apos;m volunteering to create a new website for a non-profit organization. Currently, it&apos;s a work in progress, and I&apos;m using React, TypeScript, and Tailwind CSS to make it look more modern and fresh. Stay tuned for updates as I continue working on improving their online presence.</p>
                                </div>

                            </div>
                        </article>

                        {/* <!-- More posts... --> */}
                    </div>
                </div>
            </div>

        </>
    )
}