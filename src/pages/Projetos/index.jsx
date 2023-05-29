import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import dataProjetos from "../../data/projetos";
import { AiOutlineArrowUp } from "react-icons/ai"
import { useEffect } from "react";

export default function Projetos() {

    useEffect(() => {
        scrollToTop()
    },[])

    function scrollToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }

    return(
        <>
            <Header/>
                <div className="w-full min-h-screen flex flex-col justify-center items-center  py-6 bg-[#13293D] lg:px-28">
                    <div>
                        <h1 className="text-white text-3xl font-semibold">Meus projetos</h1>
                        <div className="bg-[#1B98E0] h-1 w-1/2 mb-4"></div>
                    </div>

                    <div className="flex flex-col w-full">
                        {dataProjetos.map((item, index) => {
                            return(
                                <Projeto key={index} data={item}/>
                            )
                        })}
                    </div>
                    <button onClick={() => scrollToTop()} className="fixed bottom-8 right-8 flex justify-center items-center w-14 h-14 bg-[#1B98E0] text-white rounded-full shadow-2xl">
                        <AiOutlineArrowUp size={35}/>
                    </button>
                </div>
            <Footer/>
        </>
    )
}