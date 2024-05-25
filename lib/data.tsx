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
    'With over a two years of experience, I excel in creating user-centric, responsive interfaces, SSR, and SPAs. My entrepreneurial background has honed my skills in decision-making, discipline, and responsibility, ensuring efficient task completion. I have successfully delivered projects that boosted user engagement by 25% and reduced page load times by 15%. I bring a unique blend of technical expertise and business acumen, and my commitment to continuous learning makes me an asset to any team.',
  jobTitle: 'Front-End Web Developer',
  links: {
    email: {
      href: 'mailto:aleks@rozhko.net',
      icon: <EnvelopeClosedIcon />,
      label: 'aleks@rozhko.net',
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
      href: '/resume.pdf',
      icon: <ArrowRightIcon />,
      label: 'View full resume',
    },
  },
  name: 'Oleksii Rozhko',
}
