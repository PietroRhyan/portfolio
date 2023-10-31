import Image from 'next/image'
import Link from 'next/link'

interface ProjectPostProps {
  title: string
  description: string
  readTime?: string
  logo: string
  postURL: string
}

export function ProjectPost({
  title,
  description,
  readTime,
  logo,
  postURL,
}: ProjectPostProps) {
  return (
    <div className="min-w-[225px] max-w-[300px] overflow-hidden h-[200px] rounded-[6px] shadow-project-card bg-white dark:bg-black-variant flex flex-col justify-end">
      <div className="w-full h-[140px] p-3 bg-white dark:bg-black-variant flex flex-col justify-between border-t-2 border-lightgray dark:border-dark-gray relative">
        <div className="absolute bg-lightgray dark:bg-dark-gray rounded top-0 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center">
          <Image
            src={logo}
            alt={title}
            width={40}
            height={40}
            priority
            className="w-auto h-auto"
          />
        </div>
        <Link href={postURL} className="pt-6 group">
          <h4 className="text-sm font-bold dark:text-white group-hover:underline group-hover:underline-offset-2">
            {title}
          </h4>
          <p className="text-xs font-medium min-h-[50px]">{description}</p>
        </Link>
        {readTime ? (
          <span className="text-xs text-text-gray italic text-right">
            {readTime}
          </span>
        ) : null}
      </div>
    </div>
  )
}
