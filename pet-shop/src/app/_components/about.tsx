import Image from "next/image"
import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"


export function About() {
    return (

        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Foto de cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-4 border-white">
                            <Image
                                src={about2Img}
                                alt="Foto de cachorro 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>



                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold">SOBRE NÓS</h2>

                        <p>
                            No Pet Shop 4 Patas, acreditamos que cada pet é um membro da família e merece todo o amor, carinho e cuidado do mundo! Desde nossa fundação, temos a missão de oferecer os melhores produtos e serviços para garantir a felicidade e o bem-estar do seu amigo de quatro patas.
                            Contamos com uma equipe apaixonada por animais, sempre pronta para proporcionar um atendimento especial e personalizado. Aqui, você encontra tudo o que seu pet precisa, desde rações premium, brinquedos e acessórios até serviços de banho, tosa e atendimento veterinário de confiança.
                            Nosso compromisso é com a qualidade, segurança e carinho em cada detalhe. Queremos tornar a vida do seu pet ainda mais saudável e cheia de alegria!
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2010
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 Veterinários
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade de vida para seu pet é a nossa prioridade
                            </li>
                        </ul>
                        <div className="flex gap-2">
                            <a
                                target="_blank"
                                href={`https://wa.me/5561981778422?text=Olá vim pelo site e gostaria de mais informações sobre os serviços para Pets.`}
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>
                            <a
                                target="_blank"
                                href="https://earth.google.com/web/@0,-1.1528999,0a,22251752.77375655d,35y,0h,0t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA"
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </section>

    )
}