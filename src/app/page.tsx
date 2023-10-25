import { SocialMedia } from '@/components/SocialMedia'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="mt-20">
      <div className="flex items-center mx-auto mb-12 justify-center object-center relative">
        <Image
          src={'./bg-gradient.svg'}
          alt=""
          width={500}
          height={262}
          aria-disabled
          draggable={false}
        />

        <div className="absolute top-20 flex flex-col items-center justify-center">
          <h1 className="text-poppins text-center text-4xl md:text-6xl bg-gradient-to-r text-transparent bg-clip-text from-[#E90A4D] to-[#EB551590] ">
            Pietro Rhyan
          </h1>
          <p className="text-sm font-bold mt-1 dark:text-white">
            Software Engineer
          </p>
          <p className="text-sm font-medium text-text-gray dark:text-text-lightgray mt-3 max-w-[500px] text-center px-4">
            Pationate about technology and to learn how to do hard things using
            programming
          </p>
          <Link
            href="/about"
            className="mt-6 flex items-center group text-xs sm:text-sm dark:text-white font-bold underline underline-offset-2"
          >
            see more about me
            <span className="pl-1 group-hover:pl-2 transition-all duration-200 ">
              <FiArrowRight size={14} />
            </span>
          </Link>

          <div className="flex items-center justify-center gap-4 mt-6">
            <SocialMedia isGithub url="https://github.com/PietroRhyan" />
            <SocialMedia
              isLinkedin
              url="https://www.linkedin.com/in/pietro-rhyan-8bb79222b/"
            />
            <SocialMedia isX url="https://twitter.com/pietrorhyan2" />
          </div>
        </div>
      </div>
    </div>
  )
}
