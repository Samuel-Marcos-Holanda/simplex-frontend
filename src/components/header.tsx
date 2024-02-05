import logo from "./logo.png"
import icon from "./icon.svg"
import Image from "next/image"

export default function Header(){
    return(
        <main>
            <header>
                <div className="bg-[#1B293F] w-full h-20 flex items-center px-8 justify-between">
                  <Image width="80" src={logo} alt="loading"></Image>
                  <div className="text-white flex items-center gap-x-5 font-">
                    <p>about</p>
                    <p>registe</p>
                    <Image width="40" src={icon} alt="loading"></Image>
                  </div>
                </div>
            </header>
        </main>
    )
}