import * as S from './styles'
import { FaWarehouse } from "react-icons/fa";
import { Button } from '../../atomos/Button';
import { MdCleaningServices } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

export const Service = () => {
  const navigate = useNavigate()



  return (
    <S.Wrapper id='services'>
      <S.Content>
        <S.Card>
          <div>
            <div className="w-icon s-primrary">
              <FaWarehouse size={24} color='#2CAABF' />
            </div>
            <h4 style={{ color: '#2CAABF' }}>Residencial cleaning</h4>
          </div>

          <div className="description">
            <p>Basic Cleaning:
              <span>
                For those who have used our service or another professional cleaning service within the 30 days.
              </span>
            </p>

            {/* <p>Deep Cleaning:
              <span>
                For those who want their home cleaned top to bottom. Best for first time customers!
              </span>
            </p> */}
          </div>

          <Button color='primary' onClick={() => navigate('/residencial-cleaning')}>
            View More
          </Button>
        </S.Card>

        <S.Card>
          <div>
            <div className="w-icon s-primrary">
              <MdCleaningServices size={24} color='#2CAABF' />
            </div>
            <h4 style={{ color: '#2CAABF' }}>Regular cleaning</h4>
          </div>

          <div className="description">
            <p>Deep Cleaning:
              <span>
                For those who have used our service or another professional cleaning service within the 30 days.
              </span>
            </p>

            {/* <p>
              <span>
                All professionals are experienced, background-checked, fully bonded, and come fully equipped to your appointment with premium cleaning supplies & equipment.
              </span>
            </p> */}
          </div>

          <Button color='primary'>
            View More
          </Button>
        </S.Card>

        <S.Card>
          <div>
            <div className="w-icon s-primrary">
              <TbMenuDeep size={24} color='#2CAABF' />
            </div>
            <h4 style={{ color: '#2CAABF' }}>Deep Cleaning</h4>
          </div>

          <div className="description">
            <p>Deep Cleaning:
              <span>
                For those who want their home cleaned top to bottom. Best for first time customers!
              </span>
            </p>
          </div>

          <Button color='primary'>
            View More
          </Button>
        </S.Card>


      </S.Content>
    </S.Wrapper>
  )
}

