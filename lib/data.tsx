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
    'With over a year of experience, specialized in user-centric, responsive interfaces, SSR, and SPAs using React and Next.js. Delivered projects that boosted user engagement by 25% and reduced page load times by 15%. An entrepreneurial background ensures disciplined and efficient task completion. Technical expertise and business acumen make an asset to any team. Currently expanding knowledge in full-stack development.',
  jobTitle: 'Front-End Web Developer',
  links: {
    email: {
      href: 'mailto:rozhkoaleks@gmail.com',
      icon: <EnvelopeClosedIcon />,
      label: 'rozhkoaleks@gmail.com',
    },
    gitHub: {
      href: 'https://github.com/r0leksii',
      icon: <GitHubLogoIcon />,
      label: 'github.com/r0leksii',
    },
    linkedIn: {
      href: 'https://www.linkedin.com/in/rozhkoaleks/',
      icon: <LinkedInLogoIcon />,
      label: 'linkedin.com/in/rozhkoaleks',
    },
    resume: {
      href: '/cv-oleksii-rozhko.pdf',
      icon: <ArrowRightIcon />,
      label: 'View full resume',
    },
  },
  name: 'Oleksii Rozhko',
}
