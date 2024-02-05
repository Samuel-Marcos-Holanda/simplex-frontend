import image from "./landing-image 1.png"
import Image from "next/image"

export default function Section2(){
    return(
        <main>
            <section>
                <div className="bg-[#1B293F] flex justify-center space-x-24 h-80">
                    <Image width="500" src={image} alt="loading" />
                    <div className="flex items-center">
                        <p className="text-3xl font-bold text-center text-white">
                            MENOS STRESSE,<br/>
                            MAIS AGILIDADE, <span className="text-[#1651AC] underline">SIMPLIFIQUE SEU</span><br/>
                            SEU NEGOCIO!
                        </p>
                    </div>
                </div>    
            </section>
        </main>
    )
}