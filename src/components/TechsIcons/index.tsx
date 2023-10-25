import Image from 'next/image'

export interface TechIconsProps {
  name: string
  imageURL: string
  minimalist?: boolean
}

export function TechsIcons({ name, imageURL, minimalist }: TechIconsProps) {
  if (minimalist) {
    return (
      <div data-title={name} className="relative">
        <Image
          src={imageURL}
          alt={name}
          width={18}
          height={18}
          draggable={false}
          aria-description={name}
        />
      </div>
    )
  }

  return (
    <div data-title={name} className="relative">
      <Image
        src={imageURL}
        alt={name}
        width={32}
        height={32}
        draggable={false}
        aria-description={name}
      />
    </div>
  )
}
