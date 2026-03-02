import React, { useRef } from 'react'
import { Animated, Keyboard, TextInput } from 'react-native'
import { CORRECT_OTP } from '../assets/constants'
import { useAuthStore } from '../utils/authStore'

interface OtpInputProps {
  otp: string[]
  setOtp: React.Dispatch<React.SetStateAction<string[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
  inputs: { current: (TextInput | null)[] }
  OTP_LENGTH: number
}

export default function OtpInput({
  otp,
  setOtp,
  loading,
  setLoading,
  error,
  setError,
  inputs,
  OTP_LENGTH,
}: OtpInputProps) {
  const { login } = useAuthStore()

  const shakeAnim = useRef(new Animated.Value(0)).current

  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return

    const newOtp = [...otp]
    newOtp[index] = text.slice(-1)
    setOtp(newOtp)
    setError('')

    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus()
    }

    if (newOtp.every((d) => d !== '') && text) {
      verifyOTP(newOtp.join(''))
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const verifyOTP = async (code: string) => {
    Keyboard.dismiss()
    setLoading(true)
    setOtp(Array(OTP_LENGTH).fill(''))

    await new Promise((res) => setTimeout(res, 2000))

    setLoading(false)

    if (code === CORRECT_OTP) {
      login()
    } else {
      setError('Incorrect OTP. Please try again.')
      triggerShake()
      setTimeout(() => inputs.current[0]?.focus(), 100)
    }
  }

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 60,
        useNativeDriver: true,
      }),
    ]).start()
  }

  return (
    <Animated.View
      className='mt-[70px] flex-row items-center justify-center gap-2'
      style={{
        transform: [{ translateX: shakeAnim }],
      }}
    >
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref
          }}
          className={`h-[70px] w-[74px] rounded-2xl text-lg flex items-center justify-center bg-gray text-center ${digit ? 'bg-[#EEF2FF]' : null} ${error ? 'border-red border-2' : null}`}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType='number-pad'
          maxLength={1}
          textContentType='oneTimeCode'
          autoComplete='one-time-code'
          selectTextOnFocus
          editable={!loading}
        />
      ))}
    </Animated.View>
  )
}
