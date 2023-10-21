import Image from 'next/image'
import myPicture from '../../../public/image/my-image.png'
import { ActionButton } from '@/components/ActionButton'

import { HiOutlineMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import Link from 'next/link'
import { TechsIcons } from '@/components/TechsIcons'

import timeline from '../../../public/image/timeline.svg'
import bgGradient from '../../../public/timeline-bg-gradient.svg'
import bgGradient2 from '../../../public/timeline-bg-gradient2.svg'

interface TechsType {
  name: string
  icon: string
}

const mainStack: TechsType[] = [
  {
    name: 'JavaScript',
    icon: './tech-logos/javascript.svg',
  },
  {
    name: 'TypeScript',
    icon: './tech-logos/typescript.svg',
  },
  {
    name: 'ReactJS',
    icon: './tech-logos/react.svg',
  },
  {
    name: 'TailwindCSS',
    icon: './tech-logos/tailwind.svg',
  },
  {
    name: 'NextJS',
    icon: './tech-logos/next.svg',
  },
  {
    name: 'NodeJS',
    icon: './tech-logos/node.svg',
  },
  {
    name: 'PostgresSQL',
    icon: './tech-logos/postgres.svg',
  },
  {
    name: 'Prisma.io',
    icon: '/tech-logos/prisma.png',
  },
  {
    name: 'Docker',
    icon: './tech-logos/docker.svg',
  },
]

const otherTechs: TechsType[] = [
  {
    name: 'C++',
    icon: './tech-logos/cplus.svg',
  },
  {
    name: 'C#',
    icon: './tech-logos/csharp.svg',
  },
  {
    name: 'Python',
    icon: './tech-logos/python.svg',
  },
  {
    name: 'Java',
    icon: './tech-logos/java.svg',
  },
  {
    name: 'Angular',
    icon: './tech-logos/angular.svg',
  },
  {
    name: 'AWS',
    icon: './tech-logos/aws.svg',
  },
  {
    name: 'MySQL',
    icon: './tech-logos/mysql.svg',
  },
  {
    name: 'Firebase',
    icon: './tech-logos/firebase.svg',
  },
]

export default function About() {
  return (
    <main className="mt-10 mb-12 ">
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <section className="flex flex-col items-center slg:flex-row slg:justify-center slg:items-start slg:gap-24 gap-8 mb-24">
          <div className="relative w-[300px] shadow-photo rounded-xl custom-sm:ml-11">
            <Image
              src={myPicture}
              alt="Picture of Pietro Rhyan"
              draggable={false}
              className="rounded-xl"
            />

            <div className="hidden absolute shadow-experience-card top-8 -left-11 rounded-xl custom-sm:flex items-center justify-center gap-1 bg-gradient-to-br from-[#E1F1F5] to-[#22D3FA] px-4 py-2">
              <span className="text-krona text-4xl">+3</span>
              <div className="flex flex-col w-[68px] leading-normal text-xs font-medium">
                <p>Years of Experiencs</p>
              </div>
            </div>

            <div className="hidden absolute bottom-1/4 shadow-award-card -right-1/4 custom-sm:flex flex-col items-center justify-center gap-2 px-5 py-[10px] bg-gradient-to-br from-[#93F8FF] to-[#66FF58] rounded-xl">
              <div>
                <Image
                  src={'./image/trophy.svg'}
                  alt="Trophy"
                  draggable={false}
                  width={47}
                  height={47}
                />
              </div>
              <p className="text-sm font-medium text-black w-[84px] text-center">
                Awarded Programmer
              </p>
            </div>
          </div>

          <div className="max-w-[700px] slg:w-[580px] flex flex-col justify-between items-center slg:items-start gap-5">
            <div>
              <p className="text-center slg:text-left text-xs text-text-gray">
                About me
              </p>
              <p className="text-sm lg:text-base text-center slg:text-left">
                Hi, I&apos; am Pietro Rhyan, a
              </p>
              <h2 className="text-center leading-normal slg:text-left text-poppins font-bold text-3xl lg:text-[40px] bg-gradient-to-br text-transparent from-[#101010] via-[#545454] to-[#888888] bg-clip-text">
                Software Engineer
              </h2>

              <div className="flex flex-col gap-3 text-center slg:text-left">
                <p className="text-sm lg:text-base">
                  I have 21 years old, live in Brazil and I started programming
                  using C++ in 2017 in high-school, when I fall in love in this
                  world of programming and technology, mainly because we turn
                  ideas into code.
                </p>
                <p className="text-sm lg:text-base">
                  Actually I&apos; am working on a collaborative side-hustle
                  with my university friends, the{' '}
                  <Link
                    href="https://fros.dev/"
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    Fros Venture
                  </Link>
                  . My principal stack nowadays is <b>Javascript</b>,{' '}
                  <b>Typescript</b>, <b>ReactJS</b> and <b>NodeJS</b>.
                </p>
                <p className="text-sm lg:text-base">
                  I&apos; am available to remote work or freelance, contact me
                  😀
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ActionButton
                name="Contact Me"
                icon={<HiOutlineMail size={16} />}
                buttonStyle="blackLarge"
              />
              <ActionButton
                name="Downlaod CV"
                icon={<FiDownload size={16} />}
                buttonStyle="blackLarge"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mb-24">
          <h4 className="text-center text-xs sm:text-sm font-semibold">
            a real developer should never be tied on to just one stack
          </h4>
          <h2 className="text-poppins mb-2 leading-tight font-bold text-3xl slg:text-[40px] text-center text-transparent bg-gradient-to-r from-[#2A8D08] via-[#8EBA0E] to-[#F2E713] bg-clip-text">
            thats my main stack
          </h2>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
            {mainStack.map((tech) => (
              <TechsIcons
                key={tech.name}
                name={tech.name}
                imageURL={tech.icon}
              />
            ))}
          </div>

          <h4 className="text-center text-xs sm:text-sm font-semibold mb-2">
            but I also have worked with
          </h4>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {otherTechs.map((tech) => (
              <TechsIcons
                key={tech.name}
                name={tech.name}
                imageURL={tech.icon}
              />
            ))}
          </div>
        </section>
      </section>

      <section className="w-full bg-black py-10 custom-lgp:pt-10 custom-lgp:h-[300px] relative overflow-hidden">
        <h4 className="text-center text-xs sm:text-sm font-semibold text-lightgray mb-10">
          My timeline
        </h4>
        <div className="relative w-fit mx-auto">
          <Image
            src={timeline}
            alt=""
            draggable={false}
            className="hidden custom-lgp:block"
          />

          {/* Appears only after 1135px */}
          <div className="hidden custom-lgp:block">
            <div className="flex absolute top-7 left-0 -translate-x-[102px] flex-col items-center text-lightgray text-xs w-[225px] gap-2">
              <h5>2017</h5>
              <p className="font-medium">
                In my first year in high school, which was a full-time IT
                course, I was introduced to the world of programming, where I
                started with C and C++.
              </p>
            </div>

            <div className="flex absolute top-7 left-0 translate-x-[148px] flex-col items-center text-lightgray text-xs w-[225px] gap-2">
              <h5>2018</h5>
              <p className="font-medium">
                At this year, a programming championship took place at IFBA
                (Federal Institute of Bahia), my school, where I was
                vice-champion.
              </p>
            </div>

            <div className="flex absolute top-7 right-0 -translate-x-[148px] flex-col items-center text-lightgray text-xs w-[225px] gap-2">
              <h5>2021</h5>
              <p className="font-medium">
                My first big project in web, Recycle.it, which was a TCC (a
                Final Paper in Brazil) was complete and delivered. In this year
                I initiated my graduation in Computer Science.
              </p>
            </div>

            <div className="flex absolute top-7 right-0 translate-x-[102px] flex-col items-center text-lightgray text-xs w-[225px] gap-2">
              <h5>2022</h5>
              <p className="font-medium">
                Started a collaborative side-hustle with my university friends,
                the{' '}
                <Link
                  href="https://fros.dev/"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  Fros Venture
                </Link>
                , a website who gives recognition and gifts to open-source
                developers.
              </p>
            </div>
          </div>

          {/* Appears before 1135px */}
          <div className="grid grid-cols-1 md:grid-cols-2 custom-lgp:hidden gap-7 md:gap-8">
            <div className="flex flex-col gap-2 text-lightgray max-w-[275px]">
              <div className="flex items-center justify-between gap-2">
                <h5 className="text-sm sm:text-base">2017</h5>
                <hr className="text-lightgray w-full" />
              </div>
              <p className="font-medium text-sm sm:text-base">
                In my first year in high school, which was a full-time IT
                course, I was introduced to the world of programming, where I
                started with C and C++.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-lightgray max-w-[275px]">
              <div className="flex items-center justify-between gap-2">
                <h5 className="text-sm sm:text-base">2018</h5>
                <hr className="text-lightgray w-full" />
              </div>
              <p className="font-medium text-sm sm:text-base">
                At this year, a programming championship took place at IFBA
                (Federal Institute of Bahia), my school, where I was
                vice-champion.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-lightgray max-w-[275px]">
              <div className="flex items-center justify-between gap-2">
                <h5 className="text-sm sm:text-base">2021</h5>
                <hr className="text-lightgray w-full" />
              </div>
              <p className="font-medium text-sm sm:text-base">
                My first big project in web, Recycle.it, which was a TCC (a
                Final Paper in Brazil) was complete and delivered. In this year
                I initiated my graduation in Computer Science.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-lightgray max-w-[275px]">
              <div className="flex items-center justify-between gap-2">
                <h5 className="text-sm sm:text-base">2022</h5>
                <hr className="text-lightgray w-full" />
              </div>
              <p className="font-medium text-sm sm:text-base">
                Started a collaborative side-hustle with my university friends,
                the{' '}
                <Link
                  href="https://fros.dev/"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  Fros Venture
                </Link>
                , a website who gives recognition and gifts to open-source
                developers.
              </p>
            </div>
          </div>
        </div>

        <Image
          src={bgGradient}
          alt=""
          draggable={false}
          className="absolute -top-[180px] left-0"
        />
        <Image
          src={bgGradient2}
          alt=""
          draggable={false}
          className="absolute -bottom-[200px] -right-[40px]"
        />
      </section>
    </main>
  )
}
