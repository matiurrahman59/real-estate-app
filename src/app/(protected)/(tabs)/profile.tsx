import { featureEstateList, topAgentList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import PropertyCard from '@/src/components/PropertyCard';
import { useAuthStore } from '@/src/utils/authStore';
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

type Tab = 'transaction' | 'listings' | 'sold';

export default function Profile() {
  const { logout, resetOnboarding } = useAuthStore();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>('transaction');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  console.log(activeTab);

  const handleSwitch = (tab: Tab) => {
    if (tab === activeTab) return;

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setActiveTab(tab);
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: tab === 'transaction' ? 0 : tab === 'listings' ? 1 : 2,
          useNativeDriver: true,
          tension: 40,
          friction: 6,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const pillTranslateX = slideAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, containerWidth, containerWidth * 2],
  });

  return (
    <ScrollView className='bg-white px-5'>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity className='mr-5 h-[50px] w-[50px] rounded-full bg-gray items-center justify-center'>
              <Ionicons name='settings-outline' size={20} color='black' />
            </TouchableOpacity>
          ),
        }}
      />

      {/* user image, name and email */}
      <View className='mt-5 items-center justify-center'>
        <View className='h-[100px] w-[100px] rounded-full'>
          <Image
            source={{ uri: topAgentList[0].imageUri }}
            className='h-full w-full rounded-full'
          />
          <TouchableOpacity
            onPress={() => router.push('/(protected)/editProfileScreen')}
            className='absolute bottom-0 right-0 h-[30px] w-[30px] rounded-full bg-tertiary items-center justify-center'
          >
            <FontAwesome5 name='pen' size={12} color='white' />
          </TouchableOpacity>
        </View>
        <AppText bold size='small' className='mt-3'>
          {topAgentList[0].name}
        </AppText>
        <AppText size='xs' color='secondary'>
          matiur@gmail.com
        </AppText>
      </View>

      {/* user purchase details */}
      <View className='mt-5 flex-row justify-between gap-[10px]'>
        <View className='py-4 rounded-xl flex-1 items-center justify-center border border-gray'>
          <AppText bold>30</AppText>
          <AppText size='xs'>Listings</AppText>
        </View>
        <View className='py-4 rounded-xl flex-1 items-center justify-center border border-gray'>
          <AppText bold>30</AppText>
          <AppText size='xs'>Sold</AppText>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/(protected)/userReviewScreen')}
          className='py-4 rounded-xl flex-1 items-center justify-center border border-gray'
        >
          <AppText bold>30</AppText>
          <AppText size='xs'>Reviews</AppText>
        </TouchableOpacity>
      </View>

      {/* user category button */}
      <View className='mt-5'>
        <View className='mt-5 bg-gray p-2 flex-row rounded-full'>
          <Animated.View
            className='absolute top-2 bottom-2 left-2 rounded-full bg-white'
            style={{
              width: containerWidth,
              transform: [{ translateX: pillTranslateX }],
            }}
          />

          <View
            className='flex-1 items-center justify-center rounded-full z-10'
            onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
          >
            <TouchableOpacity onPress={() => handleSwitch('transaction')}>
              <AppText
                bold
                font='raleway'
                size='xs'
                color={activeTab === 'transaction' ? 'primary' : 'placeholder'}
                className='py-3'
              >
                Transaction
              </AppText>
            </TouchableOpacity>
          </View>
          <View className='flex-1 items-center justify-center rounded-full z-10'>
            <TouchableOpacity onPress={() => handleSwitch('listings')}>
              <AppText
                bold
                font='raleway'
                size='xs'
                color={activeTab === 'listings' ? 'primary' : 'placeholder'}
                className='py-3'
              >
                Listings
              </AppText>
            </TouchableOpacity>
          </View>
          <View className='flex-1 items-center justify-center rounded-full z-10'>
            <TouchableOpacity onPress={() => handleSwitch('sold')}>
              <AppText
                bold
                font='raleway'
                size='xs'
                color={activeTab === 'sold' ? 'primary' : 'placeholder'}
                className='py-3'
              >
                Sold
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className='mt-5 flex-row items-center justify-between'>
        <AppText bold size='large'>
          {featureEstateList.length} {activeTab}
        </AppText>
        <View className='flex-row items-center gap-3'>
          <TouchableOpacity className='p-2 bg-gray rounded-2xl'>
            <MaterialCommunityIcons
              name='select-group'
              size={24}
              color='black'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='add-circle' size={40} color='#234F68' />
          </TouchableOpacity>
        </View>
      </View>
      <View className='mt-5'>
        {activeTab === 'listings' && (
          <PropertyCard propertyList={featureEstateList} />
        )}
      </View>
      {/* <Button title='Sign out' onPress={logout} />
      <Button title='Reset Onboarding' onPress={resetOnboarding} /> */}
    </ScrollView>
  );
}
