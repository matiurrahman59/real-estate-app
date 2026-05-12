import AppText from '@/src/components/AppText';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

type UserProfileProps = {
  name: string;
  phone: string;
  image: string;
};

export default function UserProfile({
  agent,
  agentRanking,
}: {
  agent: UserProfileProps;
  agentRanking: string | string[];
}) {
  const router = useRouter();
  return (
    <View className='mt-5 items-center justify-center'>
      <View className='h-[100px] w-[100px] rounded-full'>
        <Image
          source={{ uri: agent.image }}
          className='h-full w-full rounded-full'
        />
        {/* <TouchableOpacity
          onPress={() => router.push('/(protected)/editProfileScreen')}
          className='absolute bottom-0 right-0 h-[30px] w-[30px] rounded-full bg-tertiary items-center justify-center'
        >
          <FontAwesome5 name='pen' size={12} color='white' />
        </TouchableOpacity> */}
        <View className='absolute bottom-0 right-0 bg-green px-2 py-[5px] rounded-lg'>
          <AppText font='montserrat' color='white'>
            #{agentRanking}
          </AppText>
        </View>
      </View>
      <AppText bold size='small' className='mt-3'>
        {agent.name}
      </AppText>
      <AppText size='xs' color='secondary'>
        {agent.phone}
      </AppText>
    </View>
  );
}
