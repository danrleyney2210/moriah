
import * as S from './styles'
import { FaFacebookSquare, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
  return (
    <S.Footer>
      <h1>Lu’s Cleaning</h1>


      <div className='content-social-media'>
        <S.Icon>
          <a href="#">
            <FaFacebookSquare size={19} />
          </a>
        </S.Icon>

        <S.Icon>
          <a href="#">
            <FaWhatsapp size={19} />
          </a>
        </S.Icon>

        <S.Icon>
          <a href="#">
            <FaLinkedinIn size={19} />
          </a>

        </S.Icon>

        <S.Icon>
          <a href="https://www.instagram.com/luscleanings?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
            <FaInstagram size={19} />
          </a>
        </S.Icon>
      </div>

      <span>© Danrley Santos. All rights reserved</span>
    </S.Footer>
  )
}
