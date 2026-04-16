import { dhakaEstateList } from '@/src/assets/constants';
import { COLORS } from '@/src/assets/constants/colors';
import AppText from '@/src/components/AppText';
import EstateHorizontalCard from '@/src/components/EstateHorizontalCard';
import EstateVerticalCard from '@/src/components/EstateVerticalCard';
import HeaderButton from '@/src/components/HeaderButton';
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import debounce from 'debounce';
import { Stack, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const errIcon = require('../../../assets/images/errIcon.png');

type estateType = {
  id: number;
  name: string;
  rating: number;
  price: number;
  coverImage: string;
  images: string[];
  location: {
    city: string;
    address: string;
    lat: number;
    long: number;
  };
  roomFacilities: {
    id: string;
    label: string;
    value: number;
    icon: string;
  }[];
  locationFacilities: {
    id: string;
    label: string;
    value: number;
    icon: string;
  }[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
  reviews: {
    userName: string;
    userImage: string;
    rating: number;
    comment: string;
  }[];
};

type Tab = 'horizontal' | 'vertical';

export default function Search() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState<Tab>('horizontal');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  const [filteredItems, setFilteredItems] = useState<estateType[]>([]);

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

  const pillTranslateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth],
  });

  const handleSearchInputChange = debounce((query: string) => {
    if (query === '') {
      setFilteredItems([]);
      return;
    } else {
      const filteredEstate = dhakaEstateList.filter((item) =>
        item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      );
      setFilteredItems(filteredEstate);
    }
  }, 300);

  return (
    <View className='flex-1 bg-white px-5'>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <HeaderButton
              Size={50}
              IconName='chevron-back'
              IconSize={20}
              IconColor='gray'
              onPress={router.back}
            />
          ),
          headerRight: () => (
            <HeaderButton
              Size={50}
              IconName='filter'
              IconSize={20}
              IconColor='gray'
            />
          ),
        }}
      />

      {/* search input */}
      <View className='mt-5 relative'>
        <Feather
          name='search'
          size={20}
          color='black'
          className='absolute z-10 left-4 top-1/2 -translate-y-1/2'
        />
        <TextInput
          className='pl-[46px] pr-[52px] py-7 rounded-[10px] bg-gray placeholder:text-sm placeholder:text-[#A1A5C1]'
          placeholder='Search House, Apartment, etc'
          onChangeText={handleSearchInputChange}
        />

        <SimpleLineIcons
          name='microphone'
          size={20}
          color='#A1A5C1'
          className='absolute z-10 right-4 top-1/2 -translate-y-1/2'
        />
        <View
          style={{
            width: StyleSheet.hairlineWidth,
          }}
          className='h-9 bg-[#A1A5C1] absolute z-10 right-[52px] top-1/2 -translate-y-1/2'
        />
      </View>

      {/* search result count */}
      <View className='mt-5 flex-row items-center justify-between'>
        {/* <SectionHeader title='Found 0 estates' /> */}
        <View className='flex-row items-center gap-1'>
          <AppText font='raleway' size='large'>
            Found
          </AppText>
          <AppText bold font='montserrat' size='large' color='tertiary'>
            {filteredItems.length}
          </AppText>
          <AppText font='raleway' size='large'>
            estates
          </AppText>
        </View>

        {/* tab switcher */}
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
      </View>

      {/* search result */}

      {filteredItems.length === 0 ? (
        <View className='flex-1 items-center justify-center'>
          <View className='items-center'>
            <Image source={errIcon} width={142} height={142} />
            <View className='flex-row items-center gap-2 pt-3 pb-5'>
              <AppText className='text-2xl'>Search</AppText>
              <AppText bold color='tertiary' className='text-2xl'>
                not found
              </AppText>
            </View>
            <AppText className='text-center'>
              Sorry, we can&apos;t find the real estates you are looking for.
              Maybe, a little spelling mistake?
            </AppText>
          </View>
        </View>
      ) : (
        <View className='mt-5' style={{ paddingBottom: insets.bottom * 9 }}>
          {activeTab === 'horizontal' ? (
            <EstateVerticalCard estateList={filteredItems} />
          ) : (
            <EstateHorizontalCard estateList={filteredItems} />
          )}
        </View>
      )}
    </View>
  );
}
