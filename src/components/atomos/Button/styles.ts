import styled from "styled-components";


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &[data-color=primary] {
    background-color: ${({ theme }) => theme.primary['500']};

    &:hover {
    background-color: ${({ theme }) => theme.primary['400']};
  }
  }

  background-color: #fff;
  color: ${({ theme }) => theme.primary['500']};
  padding: .75rem 1.5rem;
  border-radius: .75rem;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary['500']};
    background-color: #fff;
  }
`