import styled from "styled-components";

export const Wrapper = styled.div`
  
  width: 100%;
  /* background-color: ${({ theme }) => theme.bg}; */
  margin-top: -60px;

  /* h1 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.primary['400']};
    font-weight: 600;
  } */

`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  max-width: 320px;
  height: 360px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .w-icon {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 18px;
  }

  .s-primrary {
    background-color: ${({ theme }) => theme.primary['100']};
  }

  .s-secondary {
    background-color: ${({ theme }) => theme.secondary['100']};
  }

  h4 {
    text-align: center;
    font-weight: 600;
    margin-top: 10px;
  }

  .description {
    margin: 30px 0;
    font-size: 14px;
    
    p {
      font-weight: 600;
      color: #888;
      line-height: 1;

      span {
        font-weight: 300;
        color: #999;
        font-size: 14px;
        line-height: 1;
      }
    }

    
  }

  button {
    margin: 0 auto;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`


export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (max-width: 760px) {
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
  }
`

