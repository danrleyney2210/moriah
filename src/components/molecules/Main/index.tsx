import { Header } from '../Header'
import * as S from './styles'
import ImageMain from '../../../assets/image/main-2.png'
import { Button } from '../../atomos/Button'

export const Main = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <div className='description'>
          <h1>
            <span>Hiring</span> a
            cleaning professional has never been <span>easier.</span>
          </h1>

          <h3>
            Quickly, conveniently and safely hire a cleaning professional for your home, office or condominium.
          </h3>

          <a href="#contact" style={{ textDecoration: 'none' }}>
            <Button style={{ padding: '0.75rem 3rem' }}>
              Contate-nos
            </Button>
          </a>
        </div>

        <div className="content-image">
          <img src={ImageMain} alt="" />
        </div>

      </S.Main>
    </S.Wrapper>
  )
}

