import { topLocationList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TopLocationScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <ScrollView className='bg-white px-5 gap-6'>
      <View className='gap-1'>
        <AppText bold className='text-2xl'>
          Top Locations
        </AppText>
        <AppText font='raleway' size='small'>
          Find the best recommendations place to live
        </AppText>
      </View>

      <View style={{ paddingBottom: insets.bottom }} className='mt-6'>
        <FlatList
          data={topLocationList}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{ gap: 7 }}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: '/(protected)/topLocationDetails',
                  params: { locationName: item.name, locationRank: index + 1 },
                })
              }
              className='bg-gray p-2 rounded-2xl gap-[10px] flex-1'
            >
              <View className='absolute top-4 left-4 z-10 bg-green px-2 py-1 rounded-lg'>
                <AppText font='montserrat' color='white'>
                  #{index + 1}
                </AppText>
              </View>

              <Image
                source={{ uri: item.imageUri }}
                className='w-full h-40 rounded-2xl'
                resizeMode='cover'
              />

              <View className='px-3 py-2.5'>
                <AppText className='text-sm font-medium'>{item.name}</AppText>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </ScrollView>
  );
}
