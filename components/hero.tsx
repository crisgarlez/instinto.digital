import NavLink from '@/components/navlink'

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Cree y escale su próxima idea de negocio más rápido
        </h1>
        <p className="max-w-xl mx-auto font-medium">
          Instinto Digital le facilita la creación y el crecimiento de sus aplicaciones o cualquier
          idea de negocio.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <a
            href="https://calendly.com/digitalinstinto"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 text-center rounded-lg duration-150 text-white gradient-button "
          >
            Agendar una llamada
          </a>
          <NavLink href="#services" className="text-gray-700 border hover:bg-gray-50" scroll={true}>
            Conoce nuestros servicios
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
