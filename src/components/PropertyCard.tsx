import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { DEVICE } from '../assets/constants';
import AppText from './AppText';

interface property {
  id: number;
  name: string;
  rating: number;
  location: {
    city: string;
    lat: number;
    long: number;
  };
  price: number;
  imageUri: string;
}

interface propertyProps {
  propertyList: property[];
}

export default function PropertyCard({ propertyList }: propertyProps) {
  const router = useRouter();

  return (
    <FlatList
      data={propertyList}
      scrollEnabled={false}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      contentContainerStyle={{
        gap: 8,
      }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/(protected)/propertyDetailsScreen',
              params: {
                id: item.id,
              },
            })
          }
          key={index}
          className='bg-gray rounded-3xl'
          style={{
            width: (DEVICE.width / 2) * 0.88,
            overflow: 'hidden',
          }}
        >
          <View className='p-2'>
            <View className='relative'>
              <Image
                source={{
                  uri: item.imageUri,
                }}
                className='w-full h-40 rounded-xl'
              />

              {/* price */}
              <View className='absolute right-2 bottom-2 z-50 '>
                <View className='py-1 px-2 bg-tertiary rounded-lg flex-row items-baseline'>
                  <AppText font='montserrat' bold size='xs' color='white'>
                    TK {item.price}
                  </AppText>
                  <AppText
                    font='montserrat'
                    color='white'
                    className='text-[6px]'
                  >
                    /month
                  </AppText>
                </View>
              </View>

              {/* bookMark Icon */}
              <TouchableOpacity className='absolute right-2 top-2 h-8 w-8 rounded-full items-center justify-center bg-white'>
                <EvilIcons name='heart' size={16} color='#EF4444' />
              </TouchableOpacity>
            </View>

            {/* name & details */}
            <View className='pt-[10px] px-2'>
              <AppText bold size='xs' font='raleway'>
                {item.name}
              </AppText>
              <View className='flex-row items-center gap-[6px] mt-[10px]'>
                <View className='flex-row items-center gap-1'>
                  <AntDesign name='star' size={10} color='#FFC42D' />
                  <AppText bold font='montserrat' className='text-[10px]'>
                    {item.rating}
                  </AppText>
                </View>
                <View className='flex-row gap-0.5 items-center flex-1'>
                  <Ionicons name='location' size={10} color='#234F68' />
                  <AppText
                    font='raleway'
                    color='secondary'
                    className='text-[10px]'
                  >
                    {item.location.city}
                  </AppText>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
