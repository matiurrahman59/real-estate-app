import {
  DEVICE,
  dhakaEstateList,
  featureEstateList,
} from '@/src/assets/constants';
import { COLORS } from '@/src/assets/constants/colors';
import AppText from '@/src/components/AppText';
import NearbyEstates from '@/src/components/NearbyEstates';
import PropertyLocationFacilities from '@/src/components/PropertyLocationFacilities';
import PropertyMapView from '@/src/components/PropertyMapView';
import { default as PropertyReviewLists } from '@/src/components/PropertyReviewLists';
import ReviewSummaryCard from '@/src/components/ReviewSummaryCard';
import SecondaryButton from '@/src/components/SecondaryButton';
import SectionHeader from '@/src/components/SectionHeader';
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// const rotateIcon = require('../../../src/assets/images/rotate-360.png');

export default function EstateDetailScreen() {
  const { id } = useLocalSearchParams();
  const property = dhakaEstateList.find((item) => item.id === Number(id));
  const [coverImage, setCoverImage] = useState(property?.coverImage);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  if (!property) {
    return (
      <View className='bg-red flex-1 items-center justify-center'>
        <Text>No data found</Text>
      </View>
    );
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    if (currentOffset > 0) {
      setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
  };

  return (
    <View className='relative'>
      {/* Buy now button */}
      {isButtonVisible && (
        <View className='w-full bg-white py-5 items-center absolute z-50 bottom-0'>
          <Pressable className='bg-green rounded-lg items-center justify-center w-[80vw] h-[60px]'>
            <AppText bold size='medium' color='white'>
              Buy Now
            </AppText>
          </Pressable>
        </View>
      )}

      <ScrollView className='bg-white' onScroll={onScroll}>
        {/* property coverImage */}
        <View className='h-[500px] relative w-full'>
          <Image
            source={{
              uri: coverImage,
            }}
            className='inset-0 -z-10 absolute rounded-b-[40px]'
          />

          {/* button group */}
          <View
            className='flex-row items-center justify-between mx-6'
            style={{
              marginTop: DEVICE.statusBar,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              className='h-[50px] w-[50px] bg-white items-center justify-center rounded-full'
            >
              <MaterialIcons
                name='keyboard-arrow-left'
                size={18}
                color='black'
              />
            </TouchableOpacity>

            <View className='flex-row items-center gap-4'>
              <TouchableOpacity className='h-[50px] w-[50px] bg-white items-center justify-center rounded-full'>
                <Feather name='upload' size={18} color='black' />
              </TouchableOpacity>
              <TouchableOpacity className='h-[50px] w-[50px] bg-white items-center justify-center rounded-full'>
                <AntDesign name='heart' size={18} color='black' />
              </TouchableOpacity>
            </View>
          </View>

          {/* rating & estate types */}
          <View className='absolute bottom-4 left-4 flex-row items-center gap-[6px]'>
            <View className='bg-tertiary py-4 px-6 rounded-3xl flex-row items-center gap-2'>
              <AntDesign name='star' size={15} color={COLORS.yellow} />
              <AppText bold font='montserrat' color='white'>
                {property.rating}
              </AppText>
            </View>

            <View className='bg-tertiary py-4 px-6 rounded-3xl '>
              <AppText size='xs' font='raleway' color='white'>
                Apartment
              </AppText>
            </View>
          </View>

          {/* image gallery */}
          <View className='absolute bottom-4 right-4 gap-1'>
            {property.images.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCoverImage(item)}
                className={`h-[60px] w-[60px] overflow-hidden rounded-2xl border-2 border-white ${index === property.images.length - 1 && 'items-center justify-center'}`}
              >
                <Image
                  source={{
                    uri: item,
                  }}
                  className={` ${index === property.images.length - 1 ? 'inset-0 absolute' : 'h-full w-full'} `}
                />
                {index === property.images.length - 1 && (
                  <Text className='font-montserrat text-lg text-white'>+3</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* property details */}
        <View className='mt-3 mx-6 flex-row justify-between'>
          {/* name & location */}
          <View className='flex-1 gap-1'>
            <AppText bold className='text-xl'>
              {property.name}
            </AppText>
            <View className='flex-row items-center gap-1'>
              <Ionicons name='location' size={12} color='black' />
              <Text className='font-raleway text-sm text-secondary'>
                {property.location.city}
              </Text>
            </View>
          </View>

          {/* price */}
          <View className='items-end'>
            <AppText font='montserrat' bold className='text-xl'>
              TK {property.price}
            </AppText>
            <AppText font='raleway' color='secondary' className='text-sm'>
              per month
            </AppText>
          </View>
        </View>

        <View className='mt-5 mx-6 flex-row items-center justify-between'>
          <View className='flex-row gap-6'>
            <View className='py-4 px-6 bg-green self-start rounded-[20px]'>
              <AppText bold font='raleway' size='xs' color='white'>
                Rent
              </AppText>
            </View>
            <View className='py-4 px-6 bg-gray self-start rounded-[20px]'>
              <AppText bold font='raleway' size='xs'>
                Buy
              </AppText>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/(protected)/property360ViewScreen')}
            className='h-[50px] w-[50px] rounded-full bg-gray items-center justify-center'
          >
            {/* <Image source={rotateIcon} /> */}
            <AppText color='tertiary' className='mb-3'>
              360
            </AppText>
            <MaterialCommunityIcons
              name='rotate-360'
              size={22}
              color='#234F68'
              className='absolute bottom-2'
            />
          </TouchableOpacity>
        </View>

        {/* seperator */}
        <View className='h-0.5 bg-gray mt-6 mx-6' />

        {/* agent profile */}
        <View className='mt-5 mx-6 p-6 bg-gray flex-row items-center justify-between rounded-[20px]'>
          <View className='flex-row items-center gap-6'>
            <Image
              source={{
                uri: property.agent.image,
              }}
              className='h-[38px] w-[38px] rounded-full'
            />
            <View>
              <AppText>{property.agent.name}</AppText>
              <AppText>real estate Agent</AppText>
            </View>
          </View>
          <AntDesign name='message' size={20} color={COLORS.primary} />
        </View>

        {/* property roomFacilities */}
        <View className='mt-5 flex-row items-center gap-[10px]'>
          <FlatList
            data={property.roomFacilities}
            scrollEnabled={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
            }}
            renderItem={({ item, index }) => (
              <View
                key={index}
                className={`py-[15px] px-[25px] bg-gray rounded-full flex-row items-center gap-2 ${index === 0 && 'ml-5'} ${property.roomFacilities.length - 1 === index && 'mr-5'}`}
              >
                <FontAwesome5 name={item.icon} size={16} color={COLORS.green} />
                <AppText font='raleway' size='xs'>
                  {item.value} {item.label}
                </AppText>
              </View>
            )}
          />
        </View>

        {/*property location & facilities */}
        <View className=' mt-[35px]'>
          <SectionHeader title='Location & Public Facilities' />
          <View className='mx-6'>
            {/* location */}
            <View className='mt-5 flex-row items-center gap-[15px]'>
              <View className='h-[50px] w-[50px] bg-gray items-center justify-center rounded-full'>
                <Ionicons
                  name='location-outline'
                  size={16}
                  color={COLORS.primary}
                />
              </View>
              <AppText
                style={{
                  width: DEVICE.width * 0.7,
                }}
                font='raleway'
                size='small'
                color='secondary'
              >
                {property.location.address}
              </AppText>
            </View>

            {/* distance */}
            <View className='mt-[15px] border-gray border rounded-full p-[15px] flex-row items-center justify-between'>
              <MaterialCommunityIcons
                name='map-marker'
                size={16}
                color={COLORS.primary}
              />
              <View className='flex-row items-center gap-1'>
                <AppText bold size='small' font='montserrat'>
                  2.5 km
                </AppText>
                <AppText font='raleway' size='small'>
                  from your location
                </AppText>
              </View>
              <MaterialIcons
                name='keyboard-arrow-down'
                size={16}
                color={COLORS.primary}
              />
            </View>
          </View>
        </View>

        {/* location facilities */}
        <View className='mt-[15px]'>
          <PropertyLocationFacilities
            locationFacilities={property.locationFacilities}
          />
        </View>

        {/* property location */}
        <View className='mx-6 mt-[18px]'>
          <PropertyMapView
            propertyName={property.name}
            propertyLocation={property.location}
          />
        </View>

        {/* living cost */}
        <View className='mt-8'>
          <SectionHeader title='Cost of Living' buttonText='view details' />
          <View className='mx-6 mt-4 py-6 pl-4 rounded-3xl bg-gray'>
            <View className='flex-row items-center'>
              <AppText bold size='large' font='montserrat'>
                TK 83000
              </AppText>
              <AppText size='xs' font='raleway'>
                /month
              </AppText>
            </View>
            <AppText font='raleway' size='xs'>
              From average citizen spend around this location
            </AppText>
          </View>
        </View>

        {/* customer reviews */}
        <View className='mt-8 mx-4'>
          <SectionHeader title='reviews' />
          <ReviewSummaryCard />
          <PropertyReviewLists reviews={property.reviews} />
          <SecondaryButton label='View All reviews' />
        </View>

        {/* nearby property from this location */}
        <View
          className='mt-10'
          style={{
            marginBottom: DEVICE.statusBar,
          }}
        >
          <SectionHeader title='Nearby From this Location' />
          <View className='mx-5'>
            <NearbyEstates nearbyEstateList={featureEstateList} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
