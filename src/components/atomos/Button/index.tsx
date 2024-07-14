import * as S from './styles'


interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  children: React.ReactNode
}

export const Button = ({ color, children, ...rest }: IButtonProps) => {
  return (
    <S.Button {...rest} data-color={color}>
      {children}
    </S.Button>
  )
}
