import SectionWrapper from '@/components/section-wrapper'
import NavLink from '@/components/navlink'
import ctaImage from '../public/images/cta-image.jpg'
import Image from 'next/image'

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Cree modelos comerciales exitosos con nuestras soluciones de TI"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Cree modelos comerciales exitosos con nuestras soluciones de TI
            </h2>
            <p className="mt-3 text-gray-600">
              Instinto Digital, una empresa de desarrollo de software, ayuda a digitalizar las
              empresas centrándose en los desafíos y necesidades comerciales de los clientes.
              Valoramos la cooperación estrecha y transparente y alentamos a nuestros clientes a
              participar activamente en el ciclo de vida del desarrollo del proyecto.
            </p>
            <a
              href="https://calendly.com/digitalinstinto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 py-2.5 px-4 text-center rounded-lg duration-150 text-white gradient-button "
            >
              Agendar una llamada
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTA
