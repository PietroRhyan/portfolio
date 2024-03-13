import { Project } from '@/components/Project'

import frosVentureLogo from '../../../public/projects-images/fros-logo.svg'
import frosVenturePageImage from '../../../public/projects-images/fros-page.png'

import recycleItLogo from '../../../public/projects-images/recycleit-logo.svg'
import recycleItPageImage from '../../../public/projects-images/recycleit-page.png'

import portfolioLogo from '../../../public/portfolio-icon-logo-black.svg'
import portfolioPageImage from '../../../public/projects-images/portfolio-page.png'

import cmaLogo from '../../../public/projects-images/cma-logo.svg'
import cmaPage from '../../../public/projects-images/cma-page.png'

interface TechsType {
  name: string
  imageURL: string
}

const frosVentureStack: TechsType[] = [
  {
    name: 'TypeScript',
    imageURL: '/gray-tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    imageURL: '/gray-tech-logos/react.svg',
  },
  {
    name: 'TailwindCSS',
    imageURL: '/gray-tech-logos/tailwind.svg',
  },
  {
    name: 'NextJS',
    imageURL: '/gray-tech-logos/next.svg',
  },
  {
    name: 'NodeJS',
    imageURL: '/gray-tech-logos/node.svg',
  },
]

const recycleItStack: TechsType[] = [
  {
    name: 'TypeScript',
    imageURL: '/gray-tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    imageURL: '/gray-tech-logos/react.svg',
  },
  {
    name: 'Sass',
    imageURL: '/gray-tech-logos/sass.svg',
  },
  {
    name: 'NextJS',
    imageURL: '/gray-tech-logos/next.svg',
  },
  {
    name: 'Prisma.io',
    imageURL: '/gray-tech-logos/prisma.svg',
  },
  {
    name: 'NodeJS',
    imageURL: '/gray-tech-logos/node.svg',
  },
]

const cmaStack: TechsType[] = [
  {
    name: 'TypeScript',
    imageURL: '/gray-tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    imageURL: '/gray-tech-logos/react.svg',
  },
  {
    name: 'NextJS',
    imageURL: '/gray-tech-logos/next.svg',
  },
  {
    name: 'TailwindCSS',
    imageURL: '/gray-tech-logos/tailwind.svg',
  },
  {
    name: 'GraphQL',
    imageURL: '/gray-tech-logos/graphql.svg',
  },
]

const portfolioStack: TechsType[] = [
  {
    name: 'TypeScript',
    imageURL: '/gray-tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    imageURL: '/gray-tech-logos/react.svg',
  },
  {
    name: 'TailwindCSS',
    imageURL: '/gray-tech-logos/tailwind.svg',
  },
  {
    name: 'NextJS',
    imageURL: '/gray-tech-logos/next.svg',
  },
  {
    name: 'GraphQL',
    imageURL: '/gray-tech-logos/graphql.svg',
  },
]

export default function Projects() {
  return (
    <main className="max-w-5xl mt-10 mb-20 mx-auto px-4 sm:px-8">
      <div className="mb-9">
        <h2 className="text-poppins font-bold leading-tight text-3xl custom-lgp:text-[40px] text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#432371] via-[#9F6976] to-[#FAAE7B]">
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
            postLink="/blog/post/fros-venture"
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
            postLink="/blog/post/recycle-it"
            projectStyle="big"
            techs={recycleItStack}
            githubURL="https://github.com/gjoao11/recycleit"
          />
          <Project
            name="Portfolio"
            description="My portfolio where I show my projects, describe them, show my setup and more."
            image={portfolioPageImage}
            logo={portfolioLogo}
            postLink="/blog/post/portfolio"
            projectStyle="big"
            techs={portfolioStack}
            siteURL="https://portfolio-pi-rose-29.vercel.app/"
            githubURL="https://github.com/PietroRhyan/portfolio"
          />
          <Project
            name="CMA Landing Page"
            description="Freelance landing page of CMA Digital Music."
            image={cmaPage}
            logo={cmaLogo}
            postLink="/blog/post/portfolio"
            projectStyle="big"
            techs={cmaStack}
            siteURL="https://cmadigitalmusic.com.br/"
          />
        </div>
      </section>
    </main>
  )
}
