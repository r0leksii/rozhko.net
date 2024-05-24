import { ReactNode } from 'react'

import {
  ArrowRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

type LinkItem = {
  href: string
  icon: ReactNode
  label: string
}

type Links = {
  email: LinkItem
  gitHub: LinkItem
  linkedIn: LinkItem
  resume: LinkItem
}

type UserProfile = {
  description: string
  jobTitle: string
  links: Links
  name: string
}

export const userProfile: UserProfile = {
  description:
    'As a Front-End Developer, I am enthusiastic about crafting user-centric, responsive, and visually appealing interfaces. Thrive in collaborative environments, contributing to project success through clear communication and shared goals.',
  jobTitle: 'Front-end Web Developer',
  links: {
    email: {
      href: 'mailto:aleks@rozhko.net',
      icon: <EnvelopeClosedIcon />,
      label: 'aleks@rozhko.net',
    },
    gitHub: {
      href: 'https://github.com/r0leksii',
      icon: <GitHubLogoIcon />,
      label: 'GitHub',
    },
    linkedIn: {
      href: 'https://www.linkedin.com/in/rozhkoaleks/',
      icon: <LinkedInLogoIcon />,
      label: 'LinkedIn',
    },
    resume: {
      href: '/resume.pdf',
      icon: <ArrowRightIcon />,
      label: 'View full resume',
    },
  },
  name: 'Oleksii Rozhko',
}
