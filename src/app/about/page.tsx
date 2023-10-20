import Image from 'next/image'
import myPicture from '../../../public/image/my-image.png'
import { ActionButton } from '@/components/ActionButton'

import { HiOutlineMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'

export default function About() {
  return (
    <main className="max-w-5xl mx-auto mt-10 mb-12">
      <section className="flex flex-col items-center slg:flex-row slg:justify-center slg:items-start slg:gap-24 gap-8">
        <div className="relative w-[300px] shadow-photo rounded-xl custom:ml-11">
          <Image
            src={myPicture}
            alt="Picture of Pietro Rhyan"
            draggable={false}
            className="rounded-xl"
          />

          <div className="hidden absolute shadow-experience-card top-8 -left-11 rounded-xl custom:flex items-center justify-center gap-1 bg-gradient-to-br from-[#E1F1F5] to-[#22D3FA] px-4 py-2">
            <span className="text-krona text-4xl">+3</span>
            <div className="flex flex-col w-[68px] leading-normal text-xs font-medium">
              <p>Years of Experiencs</p>
            </div>
          </div>

          <div className="hidden absolute bottom-1/4 shadow-award-card -right-1/4 custom:flex flex-col items-center justify-center gap-2 px-5 py-[10px] bg-gradient-to-br from-[#93F8FF] to-[#66FF58] rounded-xl">
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

        <div className="max-w-[700px] slg:w-[580px] flex flex-col justify-between items-center slg:items-start gap-5 px-4 sm:px-8">
          <div>
            <p className="text-center slg:text-left text-xs text-text-gray">
              About me
            </p>
            <p className="text-sm lg:text-base text-center slg:text-left">
              Hi, I&apos; am Pietro Rhyan, a
            </p>
            <h3 className="text-center leading-normal slg:text-left text-poppins font-bold text-3xl lg:text-[40px] bg-gradient-to-br text-transparent from-[#101010] via-[#545454] to-[#888888] bg-clip-text">
              Software Engineer
            </h3>

            <div className="flex flex-col gap-3 text-center slg:text-left">
              <p className="text-sm lg:text-base">
                I have 21 years old, live in Brazil and I started programming
                using C++ in 2017 in high-school, when I fall in love in this
                world of programming and technology, mainly because we turn
                ideas into code.
              </p>
              <p className="text-sm lg:text-base">
                Actually I&apos; am working on a collaborative side-hustle with
                my university friends, the Fros Venture. My principal stack
                nowadays is <b>Javascript</b>, <b>Typescript</b>, <b>ReactJS</b>{' '}
                and <b>NodeJS</b>.
              </p>
              <p className="text-sm lg:text-base">
                I&apos; am available to remote work or freelance, contact me 😀
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
    </main>
  )
}
