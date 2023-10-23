interface Uses {
  item: string
  description?: string
}

export interface ToolsProps {
  title: string
  uses: Uses[]
}

export function Tools({ title, uses }: ToolsProps) {
  return (
    <div>
      <h3 className="mb-[6px] text-2xl font-bold">{title}:</h3>

      <ul className="flex flex-col gap-1">
        {uses.map((item) => (
          <li
            key={item.item}
            className="text-xs sm:text-sm font-medium list-disc ml-10"
          >
            {item.item}
            {item.description ? (
              <span className="text-text-lightgray">- {item.description}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
