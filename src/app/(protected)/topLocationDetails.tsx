import {
  DEVICE,
  dhakaEstateList,
  topLocationList,
} from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import EstateHorizontalCard from '@/src/components/EstateHorizontalCard';
import EstateVerticalCard from '@/src/components/EstateVerticalCard';
import PropertyDisplayType from '@/src/components/PropertyDisplayType';
import PropertyQuantity from '@/src/components/PropertyQuantity';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type propertyDisplayType = 'horizontal' | 'vertical';

export default function TopLocationDetails() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { locationName, locationRank } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<propertyDisplayType>('horizontal');
  return (
    <ScrollView className='bg-white'>
      {/* back button */}
      <TouchableOpacity
        style={{
          top: DEVICE.statusBar,
        }}
        className='absolute left-5 z-10 bg-white w-[50px] h-[50px] rounded-full items-center justify-center'
        onPress={() => router.back()}
      >
        <Ionicons name='chevron-back' size={20} />
      </TouchableOpacity>

      {/* filter button */}
      <TouchableOpacity
        style={{
          top: DEVICE.statusBar,
        }}
        className='absolute right-5 z-10 bg-white w-[50px] h-[50px] rounded-full items-center justify-center'
      >
        <Ionicons name='options-outline' size={20} />
      </TouchableOpacity>

      {/* top location images */}
      <View className='flex-row gap-3'>
        {/* badge */}
        <View className='p-4 bg-green absolute bottom-5 left-5 z-10 rounded-3xl'>
          <AppText font='montserrat' color='white' size='xs'>
            #
            <AppText bold font='montserrat' color='white' size='medium'>
              {locationRank}
            </AppText>
          </AppText>
        </View>
        <Image
          source={{ uri: topLocationList[0].imageUri }}
          className='rounded-bl-lg rounded-br-lg'
          style={{
            width: DEVICE.width * 0.6,
            height: 310,
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 16,
          }}
        />

        <View className='gap-3'>
          <Image
            source={{ uri: topLocationList[1].imageUri }}
            className='rounded-bl-lg rounded-br-lg'
            style={{
              width: DEVICE.width * 0.4,
              height: 200,
              borderBottomLeftRadius: 16,
            }}
          />
          <Image
            source={{ uri: topLocationList[2].imageUri }}
            className='rounded-bl-lg rounded-br-lg'
            style={{
              width: DEVICE.width * 0.4,
              height: 100,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          />
        </View>
      </View>

      <View className='mt-6 px-5'>
        <AppText bold className='text-2xl'>
          {locationName}
        </AppText>
        <AppText font='raleway' size='small' className='mt-1'>
          Our recommended real estates in {locationName}
        </AppText>
      </View>

      <View className='mt-5 px-5 flex-row items-center justify-between'>
        <PropertyQuantity length={dhakaEstateList.length} />
        <PropertyDisplayType
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>

      <View
        className='mt-5 px-5'
        style={{
          paddingBottom: insets.bottom,
        }}
      >
        {activeTab === 'horizontal' ? (
          <EstateVerticalCard estateList={dhakaEstateList} />
        ) : (
          <EstateHorizontalCard estateList={dhakaEstateList} />
        )}
      </View>
    </ScrollView>
  );
}
