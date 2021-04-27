import React from 'react'
import { TitleProps } from './types'
import * as S from './styles'

const defaultProps: TitleProps = {
  size: 'm',
  children: null,
}

const Title = ({ size, children }: TitleProps): JSX.Element => {
  return <S.Title size={size}>{children}</S.Title>
}

Title.defaultProps = defaultProps

export default Title
