import { AiFillGithub } from "react-icons/ai"
import { SiNetlify } from "react-icons/si"

export default function Projeto({data}){
    return(
        <div className="w-full flex flex-col even:justify-start md:flex-row md:even:flex-row-reverse gap-x-4 p-6">
            <img className="h-fit object-cover rounded-lg mb-4 md:mb-0" src={`/${data.imagem}`}/>
            <div className="flex flex-col max-w-lg justify-between gap-y-6">
                <div className="flex flex-col">
                    <span className="text-white text-2xl font-bold mb-1">{data.titulo}</span>
                    <span className="text-gray-200 text-justify font-medium">{data.descricao}</span>
                </div>
                <span className="text-gray-200 text-lg font-medium">{data.tecnologias}</span>
                <div className="flex gap-2">
                    <button>
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white font-semibold text-lg flex items-center gap-x-2 group bg-[#282727] px-6 p-1 rounded-md hover:bg-white transition duration-500"
                    >
                        <AiFillGithub
                        size={25}
                        className="text-white group-hover:text-[#282727]"
                        />
                        <span className="group-hover:text-[#282727] ">GitHub</span>
                    </a>
                    </button>
                    {data.netlify && (
                        <button>
                        <a
                            href={data.netlify}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white font-semibold text-lg flex items-center gap-x-2 group bg-[#00AD9F] px-6 p-1 rounded-md hover:bg-white transition duration-500"
                        >
                            <SiNetlify
                            size={25}
                            className="text-white group-hover:text-[#00AD9F]"
                            />
                            <span className="group-hover:text-[#00AD9F] ">Netlify</span>
                        </a>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}