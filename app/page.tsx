import Container from '@/components/container'
import LinkItem from '@/components/link-item'
import Section from '@/components/section'
import { userProfile } from '@/lib/data'

export const runtime = 'edge'

export default function Home() {
  return (
    <>
      <main>
        <Section>
          <Container>
            <h1>
              <a href={'/'}>{userProfile.name}</a>
            </h1>
            <h2>{userProfile.jobTitle}</h2>
            <p className={'max-w-[36rem]'}>{userProfile.description}</p>
            <div className={'flex flex-col gap-2'}>
              <LinkItem href={userProfile.links.linkedIn.href}>
                {userProfile.links.linkedIn.icon}
                {userProfile.links.linkedIn.label}
              </LinkItem>
              <LinkItem href={userProfile.links.gitHub.href}>
                {userProfile.links.gitHub.icon}
                {userProfile.links.gitHub.label}
              </LinkItem>
              <LinkItem href={userProfile.links.email.href}>
                {userProfile.links.email.icon}
                {userProfile.links.email.label}
              </LinkItem>
            </div>
            <LinkItem className={'group'} href={userProfile.links.resume.href}>
              <span className={'font-bold'}>{userProfile.links.resume.label}</span>
              <span className={'transition duration-300 ease-in-out group-hover:translate-x-1'}>
                {userProfile.links.resume.icon}
              </span>
            </LinkItem>
          </Container>
        </Section>
      </main>
    </>
  )
}
