import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  padding: 80px 0;

  h5, h2 {
    text-align: center;
  }

  h5 {
    margin-top: 70px;
  }

  h2 {
    margin-bottom: 30px;
  }

`;

export const ContactContianer = styled.section`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;





  .contact_options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    

    a {
      margin-top: 0.7rem;
      display: inline-block;
      font-size: 0.8rem;
    }

    .contact_option {
      height: 170px;
      background: #f1f2f3;
      padding: 1.2rem;
      
      border-radius: 1.2rem;
      text-align: center;
      border: 1px solid transparent;
      transition: all 400ms ease;

      display: flex;
      flex-direction: column;
      align-items: center;


      h5 {
        color: #333;
        margin: 0;
      }

      a {
        margin: 0;
        text-decoration: none;
        color: ${ props => props.theme.primary['800']};
        font-weight: 600;
      }

      .contact_option_icon {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      &:hover {
        /* background: transparent; */
        /* border-color: ${(props) => props.theme.primary['500']}; */
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input,
    textarea {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid  #999;
      resize: none;
      color: #333;
      outline: none;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Modal = styled.div`
  padding: 1.4rem;
  text-align: center;
  max-width: 300px;
  border-radius: 6px;
  position: absolute;
  
  top: 0;
  left: 0;
  z-index: 1;

  background-color: ${(props) => props.theme.color_primary_variant};
  color: ${(props) => props.theme.color_white};
`;
