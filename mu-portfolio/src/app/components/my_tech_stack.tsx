import Image from 'next/image'
import html from "../../../public/HTML5_Badge_256.png"
import css from "../../../public/CSS-Logo-500x313.png"
import JS from "../../../public/javascrtip.png"
import TS from "../../../public/ts-logo-256.png"
import bootstrap from "../../../public/bootstrap.png"
import tailwind from "../../../public/Tailwind CSS.png"
import Ph from "../../../public/Adobe_Photoshop_CC_icon.svg.png"
import reactjs from "../../../public/React_logo_logotype_emblem.png"
import wordpress from "../../../public/WordPress-logotype-simplified.png"
import mysql from "../../../public/mysql-167x86.png"
import appsmith from "../../../public/appsmith-logos-idMrtZKhob.png"
import git from "../../../public/Git-Icon-1788C.png"

export default function MyTechStack() {
    return (
        <>
            <div className="bg-white my-14 sm:my-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center  gap-y-16 lg:grid-cols-2">
                        <div className="mx-auto w-full max-w-xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-rose-500 mb-6">&#60;My Tech Stack &#47;&#62;</h2>
                            <p className="mt-6 text-lg leading-8 text-zinc-700">Specializing in front-end, I build engaging web interfaces, collaborate seamlessly, manage content effectively, and add a polished visual touch. My focus is on the simplicity and effectiveness of building compelling user experiences.</p>
                            {/* <div className="mt-8 flex items-center gap-x-6">
                                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create account</a>
                                <a href="#" className="text-sm font-semibold text-gray-900">Contact us <span aria-hidden="true">&rarr;</span></a>
                            </div> */}
                        </div>
                        <div className="mx-auto grid w-full max-w-xl grid-cols-4 items-center justify-between gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none ">
                            <Image className="max-h-12 w-full object-contain object-center" src={html} alt="html logo" width="136" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={css} alt="css logo" width="136" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={JS} alt="JS logo" width="136" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={TS} alt="TS logo" width="136" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={reactjs} alt="react logo" width="145" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={tailwind} alt="tailwind logo" width="136" height="48" />

                            <Image className="max-h-12 w-full object-contain object-center" src={bootstrap} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={wordpress} alt="wordpress logo" width="110" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={appsmith} alt="appsmith logo" width="150" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={mysql} alt="mysql logo" width="136" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={git} alt="git logo" width="150" height="48" />
                            <Image className="max-h-12 w-full object-contain object-center" src={Ph} alt="photoshop logo" width="136" height="48" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}