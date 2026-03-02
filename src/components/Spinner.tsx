import { BlurView } from 'expo-blur'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import AppText from './AppText'

export default function Spinner() {
  return (
    <BlurView intensity={60} tint='light' style={StyleSheet.absoluteFill}>
      <View className='flex-1 items-center justify-center gap-4'>
        <ActivityIndicator size='large' className='text-[#8BC83F]' />
        <AppText className='text-[#8BC83F]'>Verifying...</AppText>
      </View>
    </BlurView>
  )
}
