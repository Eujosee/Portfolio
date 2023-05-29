import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Footer(){
    return(
        <footer className="w-full h-20 flex items-center justify-center gap-x-4 bg-[#183550]">
                <nav className="flex items-center justify-center gap-x-4">
                    <a href="https://www.linkedin.com/in/jos%C3%A9-mota-35ba4422b/" target="_blank" rel="noreferrer" 
                    className="text-white font-semibold text-xl flex items-center gap-x-2 group">
                        <AiFillLinkedin size={25} className="text-white group-hover:text-[#1B98E0]"/>
                        <span className="group-hover:text-[#1B98E0]">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Eujosee" target="_blank" rel="noreferrer" 
                    className="text-white font-semibold text-xl flex items-center gap-x-2 group">
                        <AiFillGithub size={25} className="text-white group-hover:text-[#1B98E0]"/>
                        <span className="group-hover:text-[#1B98E0]">GitHub</span>
                    </a>    
                </nav>
        </footer>
    )
}