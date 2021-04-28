import styled from 'styled-components/macro'
import appTheme from '../../../styles/theme'
import { Sizing } from '../../../types/global'
import { TitleProps } from './types'

export const getFontSize = (size?: Sizing): string => {
  switch (size) {
    case 'xs':
      return appTheme.fonts.baseSize
    case 's':
      return '1.5rem'
    case 'm':
      return '2rem'
    case 'ml':
      return '2.25rem'
    case 'l':
      return '2.5rem'
    case 'xl':
      return '2.75rem'
    default:
      return appTheme.fonts.baseSize
  }
}

export const Title = styled.h1<TitleProps>`
  font-size: ${({ size = 'm' }) => getFontSize(size)};
  color: ${({ theme }) => theme.colors.title};
`
