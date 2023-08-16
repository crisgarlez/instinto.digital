import SectionWrapper from '@/components/section-wrapper'
import Image from 'next/image'

const ToolKit = () => {
  const features = [
    {
      icon: '/static/icons/wordpress.svg',
      title: 'Wordpress',
      desc: 'WordPress es un sistema de gestión de contenido (CMS) de código abierto.',
    },
    {
      icon: '/static/icons/nextjs.svg',
      title: 'Next.js',
      desc: 'Next.js es un marco de React que le brinda elementos básicos para crear aplicaciones web.',
    },
    {
      icon: '/static/icons/tailwind.svg',
      title: 'Tailwind CSS',
      desc: 'Tailwind CSS es básicamente un marco CSS de primera utilidad para crear interfaces de usuario rápidamente.',
    },
    {
      icon: '/static/icons/nodejs.svg',
      title: 'Node.js',
      desc: 'Node.js es un entorno de tiempo de ejecución de JavaScript back-end, multiplataforma y de código abierto.',
    },
    {
      icon: '/static/icons/vercel.svg',
      title: 'Vercel',
      desc: 'Vercel es una plataforma en la nube que permite a los desarrolladores alojar aplicaciones web.',
    },
    {
      icon: '/static/icons/figma.svg',
      title: 'Figma',
      desc: 'Figma es una aplicación de edición de gráficos y diseño de interfaz de usuario basada en la web.',
    },
  ]

  return (
    <SectionWrapper>
      <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Trabaja con el mejor kit de herramientas
          </h2>
          <p>Estas son algunas de nuestras herramientas favoritas.</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                  <Image src={item.icon} width={24} height={24} alt={item.title} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ToolKit
