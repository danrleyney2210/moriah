import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-image: url('../../../assets/image/coco.png'); */

  width: 100%;
  
  background: rgb(89,197,201);
  background: linear-gradient(0deg, rgba(89,197,201,1) 0%, rgba(19,63,28,1) 0%, rgba(25,63,40,1) 44%, rgba(60,124,61,1) 100%);

  @media (max-width: 600px) {
    background: rgb(89,197,201);
    background: linear-gradient(0deg, rgba(89,197,201,1) 0%, rgba(19,63,28,1) 0%, rgba(25,63,40,1) 44%, rgba(60,124,61,1) 100%);
  }
`

export const Main = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .description {
    height: 600px;
    padding-bottom: 90px;
    max-width: 500px;
    /* background-color: red; */

    h1 {
      margin-top: 60px;
      font-weight: 600;
      font-size: 48px;
      line-height: 1;

      span {
        color: ${({ theme }) => theme.primary["500"]};
        font-weight: 600;
      }
    }

    h3 {
      margin-top: .7rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  }

  .content-image {
    max-width: 500px;
    

    img {
      width: 100%;
      height: 100%;
      background-size: cover; 
    }
  }

  @media (max-width: 1050px) {
    padding: 0 1rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;

    .description {
      height: fit-content;
      padding-bottom: 0px;
    }
  }

  @media (max-width: 600px) {
    .description {
      h1 {
        font-weight: 500;
        font-size: 2.4rem;
      }

      h3 {
        font-size: 1rem;
        font-weight: 300;
        color: #333;
      }
    }
  }
  
`