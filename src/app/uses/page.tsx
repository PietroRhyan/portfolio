import { Tools, ToolsProps } from '@/components/Tools'

const uses: ToolsProps[] = [
  {
    title: 'PC',
    uses: [
      {
        item: 'Gigabyte B660M Gaming X.',
      },
      {
        item: 'Intel Core i5 12400.',
      },
      {
        item: 'Asgard Loki 16GB RAM.',
      },
      {
        item: 'AirCooler Intel Stock.',
      },
      {
        item: 'RTX 3060 MSI Gaming X.',
      },
      {
        item: 'XPG Core Reactor 650W Full Modular 80 Plus Gold.',
      },
      {
        item: 'Deepcool Matrexx 40 Case.',
      },
    ],
  },
  {
    title: 'Setup',
    uses: [
      {
        item: 'HyperX Alloy Origins Core Keyboard.',
      },
      {
        item: 'Logitech G703 Lightspeed Mouse.',
      },
      {
        item: 'Esports Tiger Longteng Huoyun Mousepad.',
      },
      {
        item: 'KZ EDX Pro In Earphone.',
      },
      {
        item: 'HyperX Cloud Stinger Headset.',
      },
      {
        item: 'Generic AOC Monitor 😭.',
      },
      {
        item: 'PS4 Controller',
        description: 'to play Dark Souls.',
      },
      {
        item: 'JBL Flip 5',
        description: 'to hear so much Phonk.',
      },
    ],
  },
  {
    title: 'Coding',
    uses: [
      {
        item: 'VSCode',
        description: 'nothing too special here.',
      },
      {
        item: 'Omni Theme',
        description: "I want to switch this theme, but I' too lazy.",
      },
      {
        item: 'Symbols',
        description: 'the best minimal icons for your VSCode, for sure.',
      },
    ],
  },
  {
    title: 'Apps',
    uses: [
      {
        item: 'Notion',
        description:
          'To-do lists, notes, even some projects docs. I use it for many things.',
      },
      {
        item: 'Figma',
        description: 'simply the best app for UI/UX design in dev world.',
      },
      {
        item: 'Excalidraw',
        description:
          'app to do the brainstorm, doodle and make simple diagrams.',
      },
      {
        item: 'Linear',
        description: 'beautiful app for issue tracker.',
      },
    ],
  },
  {
    title: 'Games',
    uses: [
      {
        item: 'Steam',
        description: 'uRhyan.',
      },
      {
        item: 'Epic',
        description: 'PietroRhyan.',
      },
      {
        item: 'PSN',
        description: 'yRhyan.',
      },
      {
        item: 'Battle.net',
        description: 'CoronelSexo#1212 kkkkkk srry.',
      },
    ],
  },
]

export default function Uses() {
  return (
    <main className="max-w-5xl mt-10 mb-20 mx-auto px-4 sm:px-8">
      <div className="mb-9">
        <h2 className="text-poppins w-fit font-bold leading-tight text-3xl custom-lgp:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#87A4FF] via-[#155E8D] to-[#28B8D5]">
          Setup, Tools and Apps.
        </h2>
        <h4 className="text-xs sm:text-sm font-semibold">
          I don&apos;t know why I make this page, I&apos; am not even a famous
          person, but I think its a good idea to share if you what I&apos; am
          using, my setup, tools and etc.
        </h4>
      </div>

      <section className="flex flex-col gap-12">
        {uses.map((item) => (
          <Tools key={item.title} title={item.title} uses={item.uses} />
        ))}
      </section>
    </main>
  )
}
