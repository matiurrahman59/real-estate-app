import { View } from 'react-native'
import AppText from './AppText'

export default function ErrorText({ error }: { error: string }) {
  return (
    <View>
      <AppText className='text-red text-center mt-2'>{error}</AppText>
    </View>
  )
}
