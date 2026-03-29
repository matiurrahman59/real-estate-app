import { DEVICE } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import MessageList from '@/src/components/MessageList';
import NotificationList from '@/src/components/NotificationList';
import React, { useRef, useState } from 'react';
import { Animated, ScrollView, TouchableOpacity, View } from 'react-native';

type Tab = 'notification' | 'message';

export default function NotificationScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('notification');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [containerWidth, setContainerWidth] = useState(0);

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
          toValue: tab === 'notification' ? 0 : 1,
          useNativeDriver: true,
          tension: 70,
          friction: 11,
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
    inputRange: [0, 1],
    outputRange: [0, containerWidth],
  });

  return (
    <ScrollView className='bg-white'>
      <View
        style={{
          marginBottom: DEVICE.statusBar,
        }}
      >
        <View className='mt-5 mx-5 bg-gray p-2 flex-row rounded-full'>
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
            <TouchableOpacity onPress={() => handleSwitch('notification')}>
              <AppText
                bold
                font='raleway'
                size='xs'
                color={activeTab === 'notification' ? 'primary' : 'placeholder'}
                className='py-3'
              >
                Notification
              </AppText>
            </TouchableOpacity>
          </View>
          <View className='flex-1 items-center justify-center rounded-full z-10'>
            <TouchableOpacity onPress={() => handleSwitch('message')}>
              <AppText
                bold
                font='raleway'
                size='xs'
                color={activeTab === 'message' ? 'primary' : 'placeholder'}
                className='py-3'
              >
                Messages
              </AppText>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab === 'notification' ? <NotificationList /> : <MessageList />}
      </View>
    </ScrollView>
  );
}
