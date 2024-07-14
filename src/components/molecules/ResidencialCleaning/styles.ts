import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    .body {
      padding-top: 30px;

      h3 {
        font-size: 18px;
        color: #999;
      }

      .italic-uppercase {
        text-transform: uppercase;
        font-weight: 300;
        font-style: italic;
      }

      .italic {
        font-weight: 300;
        font-style: italic;
      }

      p {
        font-weight: 300;
        color: #999;

        span {
          font-weight: 400;
        }   
      }

    }
  }
`


export const Header = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary['500']};
  padding-top: 40px;
  padding-bottom: 20px;


  button {
    background-color: #fff;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h1 {
    font-size: 22px;
    margin-top: 20px;
    color: #fff;
    font-weight: 500;
  }

  
`