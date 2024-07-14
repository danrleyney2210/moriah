import * as S from './styles'
import { IoMdPhonePortrait } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { LuScanFace } from "react-icons/lu";
import CleaningImage from '../../../assets/image/cleaning-app.png'
import Profissional from '../../../assets/image/main-image.png'

export const About = () => {
  return (
    <S.Wrapper id='about'>
      <S.WrapperProfissional>
        <h1>About Us</h1>

        <div className='about-description'>
          <p>
            With five years of dedicated expertise in the cleaning industry, Lu's Cleaning stands as a testament to our unwavering commitment to excellence. Since our inception, we have honed our skills, earning a reputation for delivering impeccable services tailored to our clients' unique needs. Over these five years, we've evolved, embracing the latest techniques to ensure efficiency and superior results.
          </p>
          <p>
            Our seasoned team guarantees a thorough and meticulous cleaning experience for every home or office we serve. Customer satisfaction remains at the core of our mission, and our longevity speaks volumes about the trust our clients place in us. As we celebrate our five-year milestone, we look forward to exceeding expectations and setting new standards of excellence. Choose Lu's Cleaning for five years of proven expertise and a spotless legacy.
          </p>
        </div>
        <S.ContentProfissional>
          <img src={Profissional} alt="" />
          <div className='description'>
            <button>
              The best professionals in the palm of your hand
            </button>
            <h1>Partner professionals</h1>
            <p>
              Todos especialistas são verificados pela Solvee.
              Tudo para garantir qualidade e segurança na hora de executar um serviço.
            </p>
          </div>
        </S.ContentProfissional>
      </S.WrapperProfissional>
      <div className='container'>
        <h1>What does <span>Lu’s Cleaning</span> do?</h1>
        <p>We make it simple for you to hire cleaning specialists.</p>
        <p>We connect you with the best professionals in the area and speed up all the bureaucratic aspects.</p>

        <div className='content-cards'>
          <S.Card>
            <div className="icon">
              <IoMdPhonePortrait size={24} />
            </div>
            <h1>Contact us</h1>
            <p>
              Send a message explaining what you need.
            </p>
          </S.Card>
          <S.Card>
            <div className="icon">
              <IoDocumentTextOutline size={24} />
            </div>
            <h1>Receive quotes</h1>
            <p>
              Receive quotes directly on your WhatsApp.
            </p>
          </S.Card>
          <S.Card>
            <div className="icon">
              <AiOutlineLike size={24} />
            </div>
            <h1>Enjoy!</h1>
            <p>
              Now the rest is all up to us!
            </p>
          </S.Card>
        </div>

      </div>

      <div className='services'>
        <div className='wrapper-service'>
          <div className='content-image'>
            <img src={CleaningImage} alt="" />
          </div>

          <div className='warraper-card'>
            <h1>With <span>Lu’s Cleaning</span> you have...</h1>
            <div className='wrapper-content-card'>
              <div className='content-card'>
                <S.Icon>
                  <FaHandHoldingUsd size={25} color='#51B6C7' />
                </S.Icon>
                <div>
                  <h3>Free quote</h3>
                  <p>Receive a free, hassle-free quote directly on your WhatsApp. No more complications!</p>
                </div>
              </div>

              <div className='content-card'>
                <S.Icon>
                  <BsPatchCheck size={25} color='#51B6C7' />
                </S.Icon>
                <div>
                  <h3>Humanized support</h3>
                  <p>Solvee understands that unforeseen events happen. Didn't like the service? Contact us!</p>
                </div>
              </div>

              <div className='content-card'>
                <S.Icon>
                  <LuScanFace size={25} color='#51B6C7' />
                </S.Icon>
                <div>
                  <h3>Easy hiring</h3>
                  <p>Set date and time. Receive a proposal. Choose the best. Too easy!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

