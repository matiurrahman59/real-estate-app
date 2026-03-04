import { TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

import { FC } from 'react'

interface SectionHeaderProps {
  title: string
  buttonText?: string
  onPress?: () => void
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  buttonText,
  onPress,
}) => {
  return (
    <View className='flex-row items-center justify-between px-5 mb-5'>
      <AppText bold size='large'>
        {title}
      </AppText>
      <TouchableOpacity onPress={onPress}>
        <AppText font='raleway' color='tertiary' className='font-semibold'>
          {buttonText}
        </AppText>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader
