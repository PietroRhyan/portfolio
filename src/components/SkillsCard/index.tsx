import { ReactNode } from 'react'

interface SkillsCardProps {
  title: string
  content: string
  icon: ReactNode
}

export function SkillsCard({ title, content, icon }: SkillsCardProps) {
  return (
    <div className="w-[200px] rounded-xl p-[2px] bg-gradient-to-br from-[#078088] via-[#114EE9] to-[#860181]">
      <div className="w-full h-full rounded-[10px] overflow-hidden bg-dark-blue flex flex-col">
        <div className="flex flex-col items-center justify-center py-3">
          <div className="rounded-full w-8 h-8 p-[2px] bg-gradient-to-br from-[#0D2F62] via-[#0C418F] to-[#2A68C580]">
            <div className="text-blue w-full h-full flex items-center justify-center rounded-full bg-[#0D2F62]">
              {icon}
            </div>
          </div>
          <h3 className="text-blue text-sm font-semibold">{title}</h3>
        </div>
        <div className="w-full min-h-[92px] bg-white dark:bg-black-variant flex items-center justify-center">
          <p className="text-xs text-dark-blue dark:text-text-lightgray font-semibold text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
