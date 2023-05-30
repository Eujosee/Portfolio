import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import Primeira from "../../assets/foto1.png";
import Person from "../../assets/person.png"
import dataProjetos from "../../data/projetos";
import { AiFillLinkedin, AiFillGithub, AiFillHtml5, AiOutlineArrowUp } from "react-icons/ai"
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Home() {
    function scrollToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
  return (
    <>
      <Header />
      <div className="relative w-full min-h-screen  flex flex-col gap-y-6 bg-[#13293D]">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-8">
          <div>
            <img src={Primeira} alt="forma redonda aleatoria" />
            {/* adicionar uma foto minha aqui depois */}
          </div>
          <div className="flex flex-col lg:max-w-md">
            <span className="text-white text-4xl font-bold uppercase">Olá,</span>
            <span className="text-white text-5xl font-bold uppercase mb-1">
              eu sou o José
            </span>
            <div className="bg-[#1B98E0] h-1 w-1/2 mb-4"></div>
            <p className="text-white text-xl">
              Sou estudante da área de tecnologia, aspirante a desenvolvedor
              front-end e design Ui/Ux
            </p>
          </div>
        </div>
        <div className="relative bg-white rounded-3xl p-8 flex flex-col items-center justify-evenly md:flex-row">
        <div className="absolute -top-7 lg:-top-10 p-3 flex text-4xl lg:text-5xl w-11/12 lg:w-2/5 justify-evenly items-center m-auto bg-[#183550] rounded-lg text-white shadow-xl">
            <FaReact />
            <SiJavascript/>
            <AiFillHtml5/>
            <DiCss3/>
            <SiTailwindcss/>
            <BsGit/>
            <FiFigma/>
        </div>
          <div className="md:max-w-sm lg:max-w-md flex flex-col gap-y-4 text-justify">
            <div className="flex flex-col gap-y-4">
                <span className="font-bold text-3xl mt-4 lg:mt-0">Sobre mim</span>
                <p className="text-gray-500 font-medium">
                Olá! Meu nome é José, sou um estudante dedicado e apaixonado por tecnologia, com estudos focados na área de front-end. Atualmente, estou cursando Desenvolvimento de Sistemas no SENAI Suíço-Brasileiro, aprimorando minhas habilidades em React JS e me aprofundando em front-end.{" "}
                Busco oportunidades para aplicar meus conhecimentos, enfrentar desafios e colaborar em projetos. Convido você a explorar meu portfólio para saber mais sobre minhas habilidades e projetos realizados. Estou aberto a oportunidades de estágio e colaboração, ansioso para fazer parte de equipes apaixonadas por tecnologia e desenvolvimento web.
                </p>
            </div>
            <div className="flex gap-x-2 ">
                <button>
                <a
                    href="https://www.linkedin.com/in/jos%C3%A9-mota-35ba4422b/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-semibold text-lg flex items-center gap-x-2 group bg-[#0E76A8] px-4 p-1 rounded-md hover:bg-white transition duration-500"
                >
                    <AiFillLinkedin
                    size={25}
                    className="text-white group-hover:text-[#0E76A8]"
                    />
                    <span className="group-hover:text-[#0E76A8]">LinkedIn</span>
                </a>
                </button>
                <button>
                <a
                    href="https://github.com/Eujosee"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-semibold text-lg flex items-center gap-x-2 group bg-[#282727] px-4 p-1 rounded-md hover:bg-white transition duration-500"
                >
                    <AiFillGithub
                    size={25}
                    className="text-white group-hover:text-[#282727]"
                    />
                    <span className="group-hover:text-[#282727] ">GitHub</span>
                </a>
                </button>
            </div>
          </div>

           <img className="h-80 lg:h-96 w-auto mt-4 md:mt-0" src={Person}/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div>
                <span className="font-semibold text-white text-3xl">Principais projetos</span>
                <div className="bg-[#1B98E0] h-1 w-1/2 mb-2"></div>
            </div>
            <div className="flex flex-col items-center w-full lg:px-28">
                <Projeto data={dataProjetos[0]}/>
                <Projeto data={dataProjetos[1]}/>
                <Link to="/projetos" className="flex justify-center w-48 bg-[#1B98E0] hover:bg-white text-white hover:text-[#1B98E0] font-semibold text-lg rounded-md p-1 mb-6 transition duration-500">Ver mais</Link>
            </div>
        </div>
        <button aria-label="Subir página" onClick={() => scrollToTop()} className="fixed bottom-8 right-8 flex justify-center items-center w-14 h-14 bg-[#1B98E0] text-white rounded-full shadow-2xl ">
            <AiOutlineArrowUp size={35}/>
        </button>
      </div>
      <Footer />
    </>
  );
}
