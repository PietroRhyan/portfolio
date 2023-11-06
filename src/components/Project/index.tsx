import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'
import { ActionButton } from '../ActionButton'

import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { TechsIcons, TechIconsProps } from '../TechsIcons'

const card = tv({
  base: 'flex flex-col gap-2 rounded-[18px] shadow-project-card p-3',
  variants: {
    projectStyle: {
      big: 'min-w-[280px] custom-sm:w-[350px] lgp:w-[466px]',
      small: 'w-[280px]',
    },
  },
  defaultVariants: {
    projectStyle: 'small',
  },
})

interface ProjectProps extends VariantProps<typeof card> {
  name: string
  description: string
  image: StaticImageData
  logo: string
  postLink: string
  siteURL?: string
  githubURL?: string
  techs: TechIconsProps[]
}

export function Project({
  name,
  description,
  image,
  logo,
  postLink,
  siteURL,
  githubURL,
  techs,
  projectStyle,
}: ProjectProps) {
  return (
    <div className={card({ projectStyle })}>
      <div className="w-full h-[210px] rounded-md relative bg-lightgray overflow-hidden">
        <Image
          src={image}
          fill
          alt={name}
          className="absolute"
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute z-10 back bg-lightgray dark:bg-text-gray w-full h-full backdrop-blur-lg opacity-60"></div>
        <Image
          src={logo}
          alt={name}
          width={30}
          height={30}
          draggable={false}
          className="absolute z-20 bottom-3 right-3"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            {projectStyle === 'big' ? (
              <Link
                href={postLink}
                className="font-semibold text-sm dark:text-white custom-sm:text-base hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 "
              >
                {name}
              </Link>
            ) : (
              <Link
                href={postLink}
                className="font-semibold text-sm dark:text-white hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 "
              >
                {name}
              </Link>
            )}
            <div className="flex items-center justify-center gap-2">
              {techs.map((tech) => (
                <TechsIcons
                  name={tech.name}
                  key={tech.name}
                  imageURL={tech.imageURL}
                  minimalist
                />
              ))}
            </div>
          </div>
          <div className="min-h-[75px]">
            {projectStyle === 'big' ? (
              <p className="font-medium text-xs custom-sm:text-sm">
                {description}
              </p>
            ) : (
              <p className="font-medium text-xs">{description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            className="underline underline-offset-2 text-text-gray text-xs font-medium custom-sm:text-sm"
            href={postLink}
          >
            See more
          </Link>

          <div className="flex items-center justify-center gap-2">
            {siteURL ? (
              <ActionButton
                name="Open site"
                buttonStyle="blackSmall"
                url={siteURL}
                icon={<FiExternalLink size={14} />}
              />
            ) : null}
            {githubURL ? (
              <ActionButton
                name="See code"
                buttonStyle="whiteSmall"
                url={githubURL}
                icon={<FiGithub size={14} />}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
