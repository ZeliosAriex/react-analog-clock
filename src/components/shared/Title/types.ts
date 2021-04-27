import { HTMLAttributes } from 'react'
import { Sizing } from '../../../types/global'

export interface TitleProps extends HTMLAttributes<HTMLElement> {
  size?: Sizing
}
