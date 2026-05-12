import AppText from '@/src/components/AppText';
import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { Tab } from '../profile-screen';

export default function TabbedButtonGroup({
  activeTab,
  setActiveTab,
}: {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
}) {
  const [containerWidth, setContainerWidth] = useState(0);

  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const pillTranslateX = slideAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, containerWidth, containerWidth * 2],
  });

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
          toValue: tab === 'listings' ? 0 : tab === 'transaction' ? 1 : 2,
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

  return (
    <View className='mt-5'>
      <View className='mt-5 bg-gray p-2 flex-row rounded-full'>
        <Animated.View
          className='absolute top-2 bottom-2 left-2 rounded-full bg-white'
          style={{
            width: containerWidth,
            transform: [{ translateX: pillTranslateX }],
          }}
        />
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
  );
}
