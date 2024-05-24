import { ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

type LinkItemProps = {
  children: ReactNode
  className?: string
  href: string
} & ComponentPropsWithoutRef<'a'>

const LinkItem = ({ children, className, href }: LinkItemProps) => (
  <a
    className={clsx(
      'flex flex-row items-center gap-2 w-fit hover:decoration-inherit hover:underline-offset-4 cursor-pointer',
      className
    )}
    href={href}
    rel={'noreferrer'}
    target={'_blank'}
  >
    {children}
  </a>
)

export default LinkItem
