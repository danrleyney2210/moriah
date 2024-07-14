
import { Main } from '../../components/molecules/Main'
import { Nav } from '../../components/molecules/Nav'
import { Service } from '../../components/molecules/Service'
import { About } from '../../components/organism/About'
import { Contact } from '../../components/organism/Contact'
import { Footer } from '../../components/organism/Footer'
import { Testimonials } from '../../components/organism/Testimonials'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Wrapper>
      <Main />
      <Service />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Nav />
    </S.Wrapper>
  )
}

