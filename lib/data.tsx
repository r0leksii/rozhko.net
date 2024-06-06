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
    'Specialize in creating user-centric, responsive interfaces, server-side rendering (SSR), and single-page applications (SPAs) using React and Next.js. With an entrepreneurial background, I bring a disciplined and efficient approach to task completion. My technical expertise and business acumen make me a valuable team asset. As a motivated and results-oriented professional, I constantly strive for self-improvement and am ready to take on new challenges and tasks. Adept collaborator, focusing on quality, agile practices, and delivering scalable solutions exceeding expectations.',
  jobTitle: 'Front-End Web Developer',
  links: {
    email: {
      href: 'mailto:rozhkoaleks@gmail.com',
      icon: <EnvelopeClosedIcon />,
      label: 'roleksii@proton.me',
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
      href: '/rozhko_cv.pdf',
      icon: <ArrowRightIcon />,
      label: 'View full resume',
    },
  },
  name: 'Oleksii Rozhko',
}
