"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {
    ChevronLeft,
    ChevronRight,
    Scissors,
    Syringe,
    CarTaxiFront,
    Hotel,
    Clock,
    PawPrint,
    School,
    ForkKnife,
    Flower,
    Stethoscope,
    Home as HousePet
} from 'lucide-react'; import { WhatsappLogo } from '@phosphor-icons/react'

const testimonials = [
    {
        title: "Banho/Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações."
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças e aplicação de vacinas obrigatórias.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações."
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações."
    },
    {
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros e confortáveis.",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: "Olá, vi no site sobre Hotel para pets e gostaria de mais informações."
    },
    {
        title: "Adestramento",
        description: "Treinamento personalizado para melhorar o comportamento do seu pet, incluindo comandos básicos, socialização e correção de hábitos indesejados.",
        duration: "1h",
        price: "$70",
        icon: <PawPrint />,
        linkText: "Olá, vi no site sobre Adestramento e gostaria de mais informações."
    },
    {
        title: "Creche para Pets",
        description: "Espaço seguro e divertido para seu pet passar o dia com atividades recreativas, socialização com outros animais e supervisão de profissionais qualificados.",
        duration: "8h",
        price: "$100",
        icon: <School />,
        linkText: "Olá, vi no site sobre Creche para pets e gostaria de mais informações."
    },
    {
        title: "Nutrição Pet",
        description: "Consultoria especializada para definir a melhor alimentação para seu pet, garantindo uma dieta equilibrada e saudável de acordo com suas necessidades.",
        duration: "45min",
        price: "$50",
        icon: <ForkKnife />,
        linkText: "Olá, vi no site sobre Nutrição Pet e gostaria de mais informações."
    },
    {
        title: "Spa Pet",
        description: "Sessão de relaxamento para seu pet com massagem, hidratação da pelagem, aromaterapia e cuidados especiais para o bem-estar animal.",
        duration: "1h30",
        price: "$90",
        icon: <Flower />,
        linkText: "Olá, vi no site sobre Spa Pet e gostaria de mais informações."
    },
    {
        title: "Check-up Preventivo",
        description: "Avaliação completa da saúde do seu pet, incluindo exames laboratoriais, checagem de dentes, olhos, ouvidos e pelagem para prevenção de doenças.",
        duration: "1h",
        price: "$120",
        icon: <Stethoscope />,
        linkText: "Olá, vi no site sobre Check-up Preventivo e gostaria de mais informações."
    },
    {
        title: "Pet Sitter",
        description: "Serviço de cuidador para acompanhar e atender às necessidades do seu pet no conforto da sua casa quando você estiver ausente.",
        duration: "Variável",
        price: "$40/hora",
        icon: <HousePet />,
        linkText: "Olá, vi no site sobre Pet Sitter e gostaria de mais informações."
    }
];

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2">
                    <PawPrint className="w-8 h-8" /> 
                    Serviços
                </h2>

                <div className="relative">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className='flex-1 flex items-start justify-between'>

                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                target='_blank'
                                                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                                                className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                                            >
                                                <WhatsappLogo className='w-5 h-5' />
                                                Entrar em contato
                                            </a>

                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                    >
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>

                </div>

            </div>
        </section>
    )
}