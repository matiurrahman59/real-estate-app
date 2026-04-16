import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

export type TabItem<T> = {
  key: T;
  renderLabel: (isActive: boolean) => React.ReactNode;
};

type Props<T extends string> = {
  tabs: TabItem<T>[];
  initialTab: T;
  onTabChange?: (tab: T) => void;
  containerClassName?: string;
  pillClassName?: string;
};

export function TabSwitcher<T extends string>({
  tabs,
  initialTab,
  onTabChange,
  containerClassName = 'p-2 flex-row items-center bg-gray rounded-full',
  pillClassName = 'absolute top-2 bottom-2 left-2 rounded-full bg-white',
}: Props<T>) {
  const [activeTab, setActiveTab] = useState<T>(initialTab);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [tabWidth, setTabWidth] = useState(0);

  const handleSwitch = (tab: T, index: number) => {
    if (tab === activeTab) return;

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setActiveTab(tab);
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: index,
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
    inputRange: tabs.map((_, i) => i),
    outputRange: tabs.map((_, i) => i * tabWidth),
  });

  return (
    <View className={containerClassName}>
      <Animated.View
        className={pillClassName}
        style={{
          width: tabWidth,
          transform: [{ translateX: pillTranslateX }],
        }}
      />
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab.key}
          className='flex-1 items-center justify-center rounded-full z-10'
          onPress={() => {
            handleSwitch(tab.key, index);
            onTabChange?.(tab.key);
          }}
          onLayout={
            index === 0
              ? (e) => setTabWidth(e.nativeEvent.layout.width)
              : undefined
          }
        >
          {tab.renderLabel(activeTab === tab.key)}
        </TouchableOpacity>
      ))}
    </View>
  );
}
