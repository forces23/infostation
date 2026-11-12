import { FiHome } from "react-icons/fi";
import { IoGameControllerOutline, IoCodeSlash, IoFileTrayStackedOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { PiToolbox } from "react-icons/pi";

import Image from "next/image";

export default function Nav() {
    return (
        <nav className="flex flex-col w-60 shrink-0 bg-dark-purple gap-3 px-4 py-8">
            <div className="flex items-center gap-2">
                <Image
                    src="/infostation_box_logo.svg"
                    alt="InfoStation Logo"
                    width={32}
                    height={32}
                />
                <span className="text-xl font-bold">InfoStation</span>
            </div>

            <div className="flex flex-col gap-3 px-1 mt-4">
                <a href="/" className="flex gap-2 text-lg">
                    <FiHome size={24} className="text-purple-500" />
                    Home
                </a>
                <a href="/notes" className="flex gap-2 text-lg">
                    <GiBlackBook size={24} className="text-purple-500" />
                    Notes
                </a>
                <a href="/projects" className="flex gap-2 text-lg">
                    <IoCodeSlash size={24} className="text-purple-500" />
                    Projects
                </a>
                <a href="/games" className="flex gap-2 text-lg">
                    <IoGameControllerOutline size={24} className="text-purple-500" />
                    Web Games
                </a>
                <a href="/resources" className="flex gap-2 text-lg">
                    <IoFileTrayStackedOutline size={24} className="text-purple-500" />
                    Resources
                </a>
            </div>
            <hr className="text-purple-900 m-1" />
            <div className="flex flex-col gap-3 px-1">
                Tools
                <a href="/" className="flex gap-2 ">
                    <PiToolbox size={24} className="text-purple-500" />
                    Tool 1
                </a>
                <a href="/" className="flex gap-2">
                    <PiToolbox size={24} className="text-purple-500" />
                    Tool 2
                </a>
            </div>
        </nav>
    )
};