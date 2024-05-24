import { ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

type ContainerProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('px-4 py-12 max-w-[68.75rem] m-auto flex flex-col gap-4', className)}>
      {children}
    </div>
  )
}

export default Container
