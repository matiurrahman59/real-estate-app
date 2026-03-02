import { Ionicons } from '@expo/vector-icons'
import { useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

export default function ResendOTP({ onResend }: { onResend: () => void }) {
  const [seconds, setSeconds] = useState(10)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current!)
  }, [])

  const startTimer = () => {
    setSeconds(10)
    clearInterval(timerRef.current!)
    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleResend = () => {
    if (seconds > 0) return
    onResend()
    startTimer()
  }

  const isExpired = seconds === 0
  const formatted = `00:${String(seconds).padStart(2, '0')}`

  return (
    <View className='mt-20 items-center gap-3'>
      {/* Timer Row */}
      <View className='flex-row items-center gap-2 bg-gray p-4 rounded-full'>
        <Ionicons name='time-outline' size={20} color='#6B7280' />
        <AppText size='medium' font='montserrat'>
          {formatted}
        </AppText>
      </View>

      {/* Resend Row */}
      <View className='flex-row items-center gap-[6px]'>
        <AppText color='secondary' font='raleway'>
          Didn't receive the OTP?
        </AppText>
        <TouchableOpacity onPress={handleResend} disabled={!isExpired}>
          <AppText
            bold
            font='raleway'
            className={`${isExpired ? 'text-tertiary' : 'text-placeholder'}`}
          >
            Resend OTP
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  )
}
