'use client'

import { useState, useEffect } from 'react'
import { Command } from 'cmdk'

const pages = ['About', 'Projects', 'Blog', 'Uses']

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: any) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog
      loop
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="absolute top-[200px] left-1/2 -translate-x-1/2 bg-emerald-950"
    >
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Pages">
          {pages.map((page) => (
            <Command.Item key={page}>{page}</Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
