import {
  DEVICE,
  facebookIcon,
  googleIcon,
  signInScreenImages,
} from '@/src/assets/constants'
import AppText from '@/src/components/AppText'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link, useRouter } from 'expo-router'
import { Image, Pressable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignInScreen() {
  const router = useRouter()

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row flex-wrap items-center justify-center gap-2 '>
        {signInScreenImages.map((image, index) => (
          <Image
            source={{
              uri: image.imageUri,
            }}
            key={index}
            style={{
              width: (DEVICE.width / 2) * 0.9,
            }}
            className='h-[174px] rounded-[20px]'
          />
        ))}
      </View>

      <View className='px-7'>
        <AppText className='text-[25px] mt-10'>
          Ready to{' '}
          <AppText bold color='secondary' className='text-[25px]'>
            explore?
          </AppText>
        </AppText>

        {/* Button  */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/signInForm')}
          className='mt-10 w-10/12 flex-row items-center justify-center  self-center gap-2 bg-green py-5 rounded-xl'
        >
          <MaterialIcons name='email' size={20} color='white' />
          <AppText bold color='white'>
            Continue with Email
          </AppText>
        </TouchableOpacity>

        {/* Divider line */}
        <View className='mt-10 flex-row items-center'>
          <View className='bg-[#ECEDF3] h-[1px] flex-grow' />
          <AppText className='p-3 text-[#A1A5C1] font-semibold'>OR</AppText>
          <View className='bg-[#ECEDF3] h-[1px] flex-grow' />
        </View>

        {/* Social Media Buttons */}
        <View className='flex-row items-center justify-center mt-6  gap-2'>
          <Pressable className='py-7 w-1/2 items-center rounded-3xl bg-gray'>
            <Image source={googleIcon} className='h-6 w-6' />
          </Pressable>
          <Pressable className='py-7 w-1/2 items-center rounded-3xl bg-gray'>
            <Image source={facebookIcon} className='h-6 w-6' />
          </Pressable>
        </View>

        <AppText size='xs' color='secondary' className='mt-8 text-center'>
          Don&apos;t have an account?{' '}
          <Link href='/(auth)/signUpForm'>
            <AppText bold size='xs' color='secondary'>
              Register
            </AppText>
          </Link>
        </AppText>
      </View>
    </SafeAreaView>
  )
}
