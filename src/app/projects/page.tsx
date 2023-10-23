import { Project } from '@/components/Project'

import frosVentureLogo from '../../../public/projects-images/fros-logo.svg'
import frosVenturePageImage from '../../../public/projects-images/fros-page.png'

import recycleItLogo from '../../../public/projects-images/recycleit-logo.svg'
import recycleItPageImage from '../../../public/projects-images/recycleit-page.png'

interface TechsType {
  name: string
  imageURL: string
}

const frosVentureStack: TechsType[] = [
  {
    name: 'TypeScript',
    imageURL: './gray-tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    imageURL: './gray-tech-logos/react.svg',
  },
  {
    name: 'TailwindCSS',
    imageURL: './gray-tech-logos/tailwind.svg',
  },
  {
    name: 'NextJS',
    imageURL: './gray-tech-logos/next.svg',
  },
  {
    name: 'NodeJS',
    imageURL: './gray-tech-logos/node.svg',
  },
]

const recycleItStack: TechsType[] = [
  {
    name: 'TypeScript',
    imageURL: './gray-tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    imageURL: './gray-tech-logos/react.svg',
  },
  {
    name: 'Sass',
    imageURL: './gray-tech-logos/sass.svg',
  },
  {
    name: 'NextJS',
    imageURL: './gray-tech-logos/next.svg',
  },
  {
    name: 'Prisma.io',
    imageURL: './gray-tech-logos/prisma.svg',
  },
  {
    name: 'NodeJS',
    imageURL: './gray-tech-logos/node.svg',
  },
]

export default function Projects() {
  return (
    <main className="max-w-5xl mt-10 mb-12 mx-auto px-4 sm:px-8">
      <div className="mb-9">
        <h2 className="text-poppins font-bold leading-tight text-3xl custom-lgp:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#432371] via-[#9F6976] to-[#FAAE7B]">
          Works, Projects and Hobby.
        </h2>
        <h4 className="text-xs sm:text-sm font-semibold">
          I love create new things, especially when they are different from each
          other.
        </h4>
      </div>
      <section className="flex justify-start md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Project
            name="Fros Venture"
            description="Fros Venture is a website where the open-source developers are awarded and recognized by the community."
            image={frosVenturePageImage}
            logo={frosVentureLogo}
            projectStyle="big"
            techs={frosVentureStack}
            siteURL="https://fros.dev/"
            githubURL="https://github.com/frosventure"
          />
          <Project
            name="Recycle.it"
            description="Application for geolocation of waste collection points. A Final Paper completed in 2021 to Highschool."
            image={recycleItPageImage}
            logo={recycleItLogo}
            projectStyle="big"
            techs={recycleItStack}
            githubURL="https://github.com/gjoao11/recycleit"
          />
        </div>
      </section>
    </main>
  )
}
