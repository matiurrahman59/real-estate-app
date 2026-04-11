import { dhakaEstateList, topAgentList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import RatingPill, { RATING_CATEGORIES } from '@/src/components/RatingPill';
import SectionHeader from '@/src/components/SectionHeader';
import UserReviewCard from '@/src/components/UserReviewCard';
import { AntDesign } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

export default function UserReviewScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => (
      <RatingPill
        item={item}
        index={index}
        isSelected={selectedCategory === item}
        onPress={setSelectedCategory}
      />
    ),
    [selectedCategory],
  );

  return (
    <ScrollView className='bg-white'>
      <View className='my-5'>
        <View className='mx-5 bg-gray p-4 flex-row items-center justify-between rounded-3xl'>
          <View className='flex-row items-center gap-4'>
            <Image
              source={{ uri: topAgentList[0].imageUri }}
              className='h-[53px] w-[53px] rounded-full'
            />
            <View>
              <AppText bold>{topAgentList[0].name}</AppText>
              <AppText size='xs'>Owner</AppText>
            </View>
          </View>
          <AntDesign name='message' size={20} color='black' />
        </View>

        <View className='mt-[18px] flex-row items-center'>
          <FlatList
            data={RATING_CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            contentContainerStyle={{ gap: 10 }}
            renderItem={renderItem}
          />
        </View>

        <View className='mt-9'>
          <SectionHeader title='User reviews' />
          <View className='mt-5'>
            <FlatList
              data={dhakaEstateList}
              scrollEnabled={false}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{ gap: 10 }}
              renderItem={({ item }) => (
                // <View className=' mx-5 gap-[10px] border border-gray rounded-2xl'>
                //   <View className='ml-4 mt-[10px] flex-row items-center gap-[10px]'>
                //     {/* property image */}
                //     <Image
                //       source={{ uri: item.coverImage }}
                //       className='w-[74px] h-9 rounded-lg'
                //     />

                //     {/* property name & location */}
                //     <View className='gap-1'>
                //       <AppText bold size='xs'>
                //         {item.name}
                //       </AppText>
                //       <View className='flex-row items-center gap-[6px]'>
                //         <View className='flex-row items-center gap-1'>
                //           <AntDesign name='star' size={10} color='#234F68' />
                //           <AppText
                //             bold
                //             font='montserrat'
                //             className='text-[10px]'
                //           >
                //             {item.rating}
                //           </AppText>
                //         </View>
                //         <View className='flex-row gap-0.5 items-center'>
                //           <Ionicons name='location' size={10} color='#234F68' />
                //           <AppText color='secondary' className='text-[10px]'>
                //             {item.location.address}
                //           </AppText>
                //         </View>
                //       </View>
                //     </View>
                //   </View>

                //   <View className='p-[10px] bg-gray rounded-b-2xl flex-row gap-3'>
                //     {/* reviewers image */}
                //     <Image
                //       source={{
                //         uri: item.reviews[0].userImage,
                //       }}
                //       className='h-[50px] w-[50px] rounded-full'
                //     />
                //     <View className='flex-1 gap-1'>
                //       <View className='flex-row items-center justify-between'>
                //         {/* agent name */}
                //         <AppText
                //           bold
                //           font='raleway'
                //           size='small'
                //           color='primary'
                //         >
                //           {item.reviews[0].userName}
                //         </AppText>
                //         <View className='flex-row items-center'>
                //           <StarRating
                //             rating={item.reviews[0].rating}
                //             color='#234F68'
                //             size={10}
                //           />
                //           {/* <AntDesign name='star' size={10} color='#234F68' /> */}
                //         </View>
                //       </View>
                //       <AppText font='raleway' color='secondary'>
                //         {item.reviews[0].comment}
                //       </AppText>
                //       <AppText font='montserrat' size='xs' color='placeholder'>
                //         10 mins ago
                //       </AppText>
                //     </View>
                //   </View>
                // </View>
                <UserReviewCard propertyDetails={item} />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
