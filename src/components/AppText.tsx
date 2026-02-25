import { StyleProp, Text, TextStyle } from 'react-native'
import { cn } from '../utils/cn'

type AppTextProps = {
  children: React.ReactNode
  size?: 'xs' | 'small' | 'medium' | 'large' | 'heading'
  bold?: boolean
  color?: 'white' | 'primary' | 'secondary' | 'tertiary' | 'placeholder'
  center?: boolean
  font?: 'lato' | 'raleway' | 'montserrat'
  className?: string
  style?: StyleProp<TextStyle>
}

export default function AppText({
  children,
  size = 'medium',
  bold = false,
  color = 'primary',
  font = 'lato',
  center = false,
  className,
  style,
}: AppTextProps) {
  return (
    <Text
      className={cn(
        size === 'xs' && 'text-xs',
        size === 'small' && 'text-sm',
        size === 'medium' && 'text-base',
        size === 'large' && 'text-lg',
        size === 'heading' && 'text-xl',
        bold && 'font-bold',
        color === 'white' && 'text-white',
        color === 'primary' && 'text-primary',
        color === 'secondary' && 'text-secondary',
        color === 'tertiary' && 'text-tertiary',
        color === 'placeholder' && 'text-placeholder',
        center && 'text-center',
        font === 'lato' && 'font-lato',
        font === 'raleway' && 'font-raleway',
        font === 'montserrat' && 'font-montserrat',
        'tracking-wider',
        className,
      )}
      style={style}
    >
      {children}
    </Text>
  )
}
