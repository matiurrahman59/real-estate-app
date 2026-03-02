import AppText from '@/src/components/AppText'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useRef, useState } from 'react'
import { Keyboard, Text, View } from 'react-native'

import { Stack } from 'expo-router'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 4

export default function Otp() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const handleChange = (text: string) => {
    setValue(text)

    if (text.length === CELL_COUNT) {
      Keyboard.dismiss()
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        setValue('') // clear inputs
      }, 2000)
    }
  }
  const targetRef = useRef<View | null>(null)
  return (
    <View ref={targetRef} className='flex-1 bg-white relative'>
      <Stack.Screen options={{ headerShown: true, headerTitle: '' }} />

      {/* {loading && (
        <BlurView
          intensity={100}
          tint='light'
          style={[StyleSheet.absoluteFill, { backgroundColor: '#8BC83F' }]}
          experimentalBlurMethod='dimezisBlurView'
        >
          <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' />
          </View>
        </BlurView>
      )} */}

      <View className='px-5'>
        <AppText className='text-[25px] mt-5'>
          Enter the{' '}
          <AppText bold color='secondary' className='text-[25px]'>
            code
          </AppText>
        </AppText>
        <AppText size='small' className='mt-5'>
          Enter the 4 digit code that we just sent to
        </AppText>
        <AppText color='secondary' size='small' bold>
          jonathan@email.com
        </AppText>

        <View>
          <CodeField
            ref={ref}
            {...props}
            autoFocus
            value={value}
            onChangeText={handleChange}
            cellCount={4}
            rootStyle={{
              marginTop: 70,
            }}
            keyboardType='number-pad'
            textContentType='oneTimeCode'
            testID='my-code-input'
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                className={`h-[70px] w-[74px] rounded-2xl text-lg flex items-center justify-center bg-gray text-center ${isFocused ? 'border-2 border-secondary' : ''}`}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text>{symbol || (isFocused && <Cursor />)}</Text>
              </View>
            )}
          />
        </View>

        <View className='mt-24'>
          <View className='bg-gray p-5 rounded-3xl self-center flex-row items-center justify-center gap-2'>
            <Ionicons name='timer-outline' size={24} color='black' />
            <AppText bold color='secondary' size='small'>
              00:00{' '}
            </AppText>
          </View>
          <AppText size='small' className='mt-5 text-center'>
            Didn't receive the OTP?{' '}
            <AppText bold size='small' color='secondary'>
              Resend OTP
            </AppText>
          </AppText>
        </View>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })
