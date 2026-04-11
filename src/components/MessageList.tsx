import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { Swipeable } from 'react-native-gesture-handler';
import { topAgentList } from '../assets/constants';
import AppText from './AppText';
import SectionHeader from './SectionHeader';

export default function MessageList() {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleDeleteAll = () => {
    Alert.alert(
      'Delete all',
      'Are you sure you want to delete all of your favorites?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'ok', onPress: () => console.log('Clear messages') },
      ],
    );
  };

  return (
    <View className='mt-5'>
      {/* header right clear button */}
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => handleDeleteAll()}
              className='h-11 w-11 rounded-full bg-gray items-center justify-center'
            >
              <Ionicons name='trash-bin-outline' size={16} color='black' />
            </TouchableOpacity>
          ),
        }}
      />

      <SectionHeader title='All chats are here' />
      <View className='mt-3 gap-3'>
        <FlatList
          scrollEnabled={false}
          data={topAgentList}
          contentContainerStyle={{
            gap: 12,
          }}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({ index, item }) => (
            <View className='mx-5'>
              {/* swipe to delete button */}
              <TouchableOpacity
                className='absolute inset-0 rounded-3xl bg-tertiary items-end justify-center'
                style={{
                  width: containerWidth,
                }}
              >
                <Ionicons
                  name='trash-bin-outline'
                  size={20}
                  color='white'
                  className='mr-7'
                />
              </TouchableOpacity>

              <View
                key={index}
                className='bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'
                onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
              >
                <Image
                  source={{
                    uri: item.imageUri,
                  }}
                  className='h-[50px] w-[50px] rounded-full border-2 border-white'
                />
                <View className='flex-1'>
                  <AppText bold font='raleway' size='medium'>
                    {item.name}
                  </AppText>
                  <AppText font='raleway' size='small'>
                    tempor incididunt ut labore et dolore
                  </AppText>
                </View>
                <View className='justify-center items-center gap-[2px]'>
                  <AppText font='montserrat' size='xs' color='placeholder'>
                    11.00
                  </AppText>
                  <View className='bg-green h-4 w-4 rounded-full items-center justify-center'>
                    <Text className='text-white text-[8px]'>1</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />

        <View className='mx-5 bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'>
          <Image
            source={{
              uri: topAgentList[0].imageUri,
            }}
            className='h-[50px] w-[50px] rounded-full border-2 border-white'
          />
          <View className='flex-1'>
            <AppText bold font='raleway' size='medium'>
              {topAgentList[0].name}
            </AppText>
            <AppText font='raleway' size='small'>
              tempor incididunt ut labore et dolore
            </AppText>
          </View>
          <View>
            <AppText font='montserrat' size='xs' color='placeholder'>
              11.00
            </AppText>
          </View>
        </View>
        <View className='mx-5 bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'>
          <Image
            source={{
              uri: topAgentList[0].imageUri,
            }}
            className='h-[50px] w-[50px] rounded-full border-2 border-white'
          />
          <View className='flex-1'>
            <AppText bold font='raleway' size='medium'>
              {topAgentList[0].name}
            </AppText>
            <AppText font='raleway' size='small'>
              tempor incididunt ut labore et dolore
            </AppText>
          </View>
          <View>
            <AppText font='montserrat' size='xs' color='placeholder'>
              11.00
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
}
