import image from "./storyset-landing 1.svg"
import Image from "next/image"

export default function Section1(){
    return(
        <main>
            <section>
                <div className="flex w-full h-80 intems-center justify-center">
                    <div className="flex intems-center py-20">
                        <p className="text-3xl font-bold">
                            GERENCIE COM MAIS FACILIDADE SEU NEGOCIO!<br />
                            UTILIZE AS SOLUÇÕES <span className="text-[#1651AC]">SIMPLEX</span> PARA UM<br />
                            GERENCIAMENTO MAIS <span className="text-[#1651AC] underline">SIMPLES!</span>
                        </p>
                    </div>
                    <Image width="400" src={image} alt="loading" />"
                </div>
            </section>
        </main>
    )
}