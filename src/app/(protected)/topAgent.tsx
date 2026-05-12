import { topAgentList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import BackButton from '@/src/components/BackButton';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TopAgent() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <ScrollView className='bg-white px-5 gap-6'>
      <BackButton />
      <View className='gap-1 mt-5'>
        <AppText bold className='text-2xl'>
          Top Estate Agent
        </AppText>
        <AppText font='raleway' size='small'>
          Find the best estate agents to help you find your dream home
        </AppText>
      </View>

      <View style={{ paddingBottom: insets.bottom }} className='mt-6'>
        <FlatList
          data={topAgentList}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{ gap: 7 }}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: '/(protected)/topAgentDetails',
                  params: {
                    agentName: item.name,
                    agentRanking: index + 1,
                  },
                })
              }
              className='bg-gray p-4 rounded-2xl flex-1'
            >
              <View className='bg-green self-start px-2 py-[5px] rounded-lg'>
                <AppText font='montserrat' color='white'>
                  #{index + 1}
                </AppText>
              </View>

              <View className='mt-2 gap-2 items-center'>
                <Image
                  source={{ uri: item.image }}
                  className='w-24 h-24 rounded-full border-2 border-white'
                  resizeMode='cover'
                />

                <View>
                  <AppText className='text-sm font-medium'>{item.name}</AppText>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </ScrollView>
  );
}
