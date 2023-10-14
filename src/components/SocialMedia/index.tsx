import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

interface SocialMediaProps {
  isLinkedin?: boolean
  isGithub?: boolean
  isX?: boolean
  url: string
}

export function SocialMedia({
  isGithub,
  isLinkedin,
  isX,
  url,
}: SocialMediaProps) {
  return (
    <div className="rounded-full w-[30px] h-[30px] bg-gradient-to-b from-[#65626230] via-lightgray to-transparent p-[1px]">
      <Link
        href={url}
        target="_blank"
        className="w-full h-full bg-white rounded-full flex items-center justify-center"
      >
        {isGithub ? (
          <FiGithub size={16} />
        ) : isLinkedin ? (
          <FiLinkedin size={16} />
        ) : (
          isX && <FaXTwitter size={16} />
        )}
      </Link>
    </div>
  )
}
