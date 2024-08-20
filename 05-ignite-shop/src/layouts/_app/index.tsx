import Image from 'next/image'

import logoImg from '@/assets/Logo.svg'

import { Container, Header } from './styles'

type AppLayoutProps = {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      {children}
    </Container>
  )
}
