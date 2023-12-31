import Link from 'next/link'
import { ComponentProps } from 'react'

interface PostProps extends ComponentProps<'article'> {
  title: string
  description: string
  postURL: string
  createdAt: string
  isLastPost?: boolean
}

export function Post({
  title,
  description,
  postURL,
  createdAt,
  isLastPost,
}: PostProps) {
  return (
    <article
      data-lastpost={isLastPost || false}
      className="flex flex-col data-[lastpost=false]:border-b pb-6 data-[lastpost=false]:border-lightgray dark:data-[lastpost=false]:border-dark-gray gap-4 custom-sm:flex-row custom-sm:gap-0 justify-between"
    >
      <div className="flex flex-col">
        <Link
          href={postURL}
          className="text-sm sm:text-base font-bold dark:text-white hover:underline hover:underline-offset-2"
        >
          {title}
        </Link>
        <p className="text-xs sm:text-sm font-medium mb-2">{description}</p>
      </div>
      <span className="text-xs min-w-[90px] custom-sm:text-sm font-medium">
        {createdAt}
      </span>
    </article>
  )
}
