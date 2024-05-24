import { ComponentPropsWithoutRef, ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

const Section = ({ children, className }: SectionProps) => {
  return <section className={className}>{children}</section>
}

export default Section
