import { useRef } from 'react'
import * as S from './styles'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


import emailjs from 'emailjs-com';
import { Button } from '../../atomos/Button'

export const Contact = () => {
  const form: any = useRef()
  // const [ isModal, setIsModal ] = useState(false)

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_sf7vsnf', 'template_flv67gf', form.current, 'tAKny186wp0-L-yLK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <S.Wrapper id='contact'>

      <h5>Let's talk!</h5>
      <h2>Contact</h2>


      <S.ContactContianer className="container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>luscleaningsf@gmail.com</h5>
            <a href="emailto:danrley.dev@gmail.com" target="_blank">Send a menssage</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon' />
            <h4>Menssager</h4>
            <h5>luscleaningsf@gmail.com</h5>
            <a href="mailto:danrley.dev@gmail.com" target="_blank">Send a menssage</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon' />
            <h4>Whatsapp</h4>
            <h5>+1 (415) 846-2075</h5>
            <a href="https://contate.me/danrley-ney" target="_blank">Send a menssage</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="7" placeholder='Your Message' required></textarea>
          <Button type='submit'>Enviar mensagem</Button>
        </form>
      </S.ContactContianer>

      {/* <S.Modal>
        <p>Email successfully sent!</p>
        <span>Thanks</span>
      </S.Modal> */}
    </S.Wrapper>
  )
}

