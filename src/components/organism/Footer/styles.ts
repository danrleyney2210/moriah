import styled from "styled-components";

export const Footer = styled.div`
  padding: 30px 0 150px 0;
  width: 100%;
 
  background-color: ${props => props.theme.primary['500']};
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  span {
    text-align: center;
    display: inline-block;
    color: #fff;
    margin-top: 40px;
  }

  .content-social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`

export const Icon = styled.div`
  

  a {
    text-decoration: none;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    background-color: #fff;
    color: #222;
  }
`