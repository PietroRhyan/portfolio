import Image from 'next/image'

interface TechIconsProps {
  name: string
  imageURL: string
}

export function TechsIcons({ name, imageURL }: TechIconsProps) {
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
