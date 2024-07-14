import { useNavigate } from 'react-router-dom';
import * as S from './styles'
import { IoIosArrowBack } from "react-icons/io";

export const ResidencialCleaning = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Header>
        <div className="container">
          <button onClick={() => navigate('/')}>
            <IoIosArrowBack color='#333' size={18} />
          </button>
          <h1>Residencial Cleaning</h1>

        </div>

      </S.Header>
      <div className="container">
        <div className="body">
          <h3>What Services Do you Need?</h3>
          <p className='italic-uppercase'>CLEANING SERVICES EXPLAINED</p>
          <p>
            <span>Basic Cleaning: </span> For those who have used our service or another professional cleaning service within the 30 days.
          </p>
          <p>
            <span>Deep Cleaning: </span> For those who want their home cleaned top to bottom. Best for first time customers!
          </p>
          <p>
            <span>Move In/Move Out*: </span> For those who are moving in or out! (Property must be empty)
          </p>
          <p>
            <span>Green Cleaning: </span> Most of our cleaning supplies are eco- friendly. if you prefer that we use 100% green cleaning supplies please let us know by email or text message. We will be happy to do it.
          </p>
          <p className='italic'>
            All professionals are experienced, background-checked, fully bonded, and come fully equipped to your appointment with premium cleaning supplies & equipment.
          </p>
        </div>
      </div>
    </S.Wrapper>
  )
}

