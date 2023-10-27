'use client'

import { Command } from 'cmdk'
import { useState, useEffect, ReactNode } from 'react'
import {
  FiCommand,
  FiInfo,
  FiBox,
  FiEdit2,
  FiMonitor,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaXTwitter } from 'react-icons/fa6'

import { useRouter } from 'next/navigation'

type PagesTypes = {
  title: string
  url: string
  icon: ReactNode
}

const pages: PagesTypes[] = [
  {
    title: 'About',
    url: '/about',
    icon: <FiInfo size={14} />,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: <FiBox size={14} />,
  },
  {
    title: 'Blog',
    url: '/blog',
    icon: <FiEdit2 size={14} />,
  },
  {
    title: 'Uses',
    url: '/uses',
    icon: <FiMonitor size={14} />,
  },
]

const contacts: PagesTypes[] = [
  {
    title: 'Github',
    url: 'https://github.com/PietroRhyan',
    icon: <FiGithub size={14} />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pietro-rhyan-8bb79222b/',
    icon: <FiLinkedin size={14} />,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/pietrorhyan2',
    icon: <FaXTwitter size={14} />,
  },
  {
    title: 'E-mail',
    url: 'https://mailto:pietroqjg@gmail.com',
    icon: <HiOutlineMail size={14} />,
  },
]

export function CommandShortcut() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

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
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full cursor-pointer hover:bg-lightgray dark:hover:bg-dark-gray text-text-gray dark:text-text-lightgray hover:text-black dark:hover:text-white transition-colors duration-200"
      >
        <FiCommand size={24} />
      </button>
      <Command.Dialog
        loop
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <Command.Input placeholder="Search for pages, social media, contacts..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Pages">
            {pages.map((page) => (
              <Command.Item
                key={page.title}
                onSelect={() => {
                  router.push(page.url)
                  setOpen(false)
                }}
              >
                {page.icon}
                {page.title}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Contacts">
            {contacts.map((contact) => (
              <Command.Item
                key={contact.title}
                onSelect={() => {
                  window.open(contact.url)
                }}
              >
                {contact.icon}
                {contact.title}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  )
}
