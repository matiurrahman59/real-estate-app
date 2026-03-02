import { OTP_LENGTH } from '@/src/assets/constants'
import AppText from '@/src/components/AppText'
import ErrorText from '@/src/components/ErrorText'
import OtpInput from '@/src/components/OtpInput'
import ResendOTP from '@/src/components/ResendOtp'
import Spinner from '@/src/components/Spinner'

import { Stack } from 'expo-router'
import { useRef, useState } from 'react'
import { TextInput, View } from 'react-native'

export default function OTPScreen() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputs = useRef<(TextInput | null)[]>([])

  const handleResend = async () => {
    setError('')
    setOtp(Array(OTP_LENGTH).fill(''))
    inputs.current[0]?.focus()
  }

  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen options={{ headerShown: true, headerTitle: '' }} />

      <View className='px-5'>
        <View className='mt-5'>
          <AppText className='text-[25px]'>
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
        </View>

        {/* otp input fields */}
        <OtpInput
          otp={otp}
          setOtp={setOtp}
          error={error}
          setError={setError}
          inputs={inputs}
          loading={loading}
          setLoading={setLoading}
          OTP_LENGTH={OTP_LENGTH}
        />

        {error ? <ErrorText error={error} /> : null}

        {/* resend button */}
        <ResendOTP onResend={handleResend} />

        {/* loading spinner */}
        {loading && <Spinner />}
      </View>
    </View>
  )
}
