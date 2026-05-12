import { COLORS } from '@/src/assets/constants/colors';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

type Tab = 'horizontal' | 'vertical';

export default function PropertyDisplayType({
  activeTab,
  setActiveTab,
}: {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
}) {
  const [containerWidth, setContainerWidth] = useState(0);
  // const [activeTab, setActiveTab] = useState<Tab>('horizontal');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const pillTranslateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth],
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
          toValue: tab === 'horizontal' ? 0 : 1,
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
    <View className='p-2 flex-row items-center bg-gray rounded-full '>
      <Animated.View
        className='absolute top-2 bottom-2 left-2 rounded-full bg-white'
        style={{
          width: containerWidth,
          transform: [{ translateX: pillTranslateX }],
        }}
      />
      <TouchableOpacity
        className='w-9 h-6 items-center justify-center rounded-full'
        onPress={() => handleSwitch('horizontal')}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
      >
        <FontAwesome5
          name='grip-horizontal'
          size={12}
          color={activeTab === 'horizontal' ? COLORS.tertiary : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        className='w-9 h-6 items-center justify-center rounded-full'
        onPress={() => handleSwitch('vertical')}
      >
        <MaterialCommunityIcons
          name='tune-vertical-variant'
          size={12}
          color={activeTab === 'vertical' ? COLORS.tertiary : 'gray'}
        />
      </TouchableOpacity>
    </View>
  );
}
