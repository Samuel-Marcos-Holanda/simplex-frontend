import image from "./logo.png"
import Image from "next/image"

export default function Footer(){
    return(
        <main>
            <footer>
                <div className="bg-[#1B293F] w-full h-48">
                    <div className="flex items-center justify-center py-5">
                        <Image width="80" src={image} alt="loading" />
                        <p className="font-bold text-3xl text-white">SimpleX</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-sm text-white">Desenvolvedores</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-sm text-white">José Mateus | Arthur Alan | Samuel Marcos | Deglier Fernandes | Júlio Cesar</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}