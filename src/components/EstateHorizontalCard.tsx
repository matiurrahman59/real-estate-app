import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { propertyType } from '../types';
import { useAuthStore } from '../utils/authStore';
import AppText from './AppText';
import BookmarkButton from './BookmarkButton';

export default function EstateHorizontalCard({
  estateList,
  scrollEnabled = false,
}: {
  estateList: propertyType[];
  scrollEnabled?: boolean;
}) {
  const router = useRouter();
  const { favoriteProperties } = useAuthStore();

  return (
    <FlatList
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      data={estateList}
      contentContainerStyle={{
        gap: 10,
      }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        const isFavorite = favoriteProperties.some(
          (property) => property.id === item.id,
        );

        return (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/(protected)/propertyDetailsScreen',
                params: {
                  id: item.id,
                },
              })
            }
          >
            <View className='bg-gray rounded-3xl'>
              <View className='p-2 flex-row gap-3'>
                <View>
                  <Image
                    source={{
                      uri: item.coverImage,
                    }}
                    className='h-[140px] w-[134px] rounded-3xl'
                  />
                  {/* bookMark Icon */}
                  <BookmarkButton
                    item={item}
                    isFavorite={isFavorite}
                    className='absolute left-2 top-2 z-10'
                  />

                  {/* apartment type */}
                  <View className='absolute bottom-2 left-2 bg-tertiary p-2 rounded-full'>
                    <AppText font='raleway' size='xs' color='white'>
                      House
                    </AppText>
                  </View>
                </View>
                <View className='flex-1 justify-between py-2'>
                  <View className='gap-2'>
                    <AppText bold font='raleway' size='small'>
                      {item.name}
                    </AppText>
                    <View className='flex-row items-center gap-1'>
                      <AntDesign name='star' size={12} color='#FFC42D' />

                      <AppText bold font='raleway' size='xs'>
                        {item.rating}
                      </AppText>
                    </View>
                    <View className='flex-row gap-0.5 items-center'>
                      <Ionicons name='location' size={12} color='#234F68' />
                      <AppText
                        font='raleway'
                        color='secondary'
                        className='text-[10px]'
                      >
                        {item.location.address}
                      </AppText>
                    </View>
                  </View>

                  <View className='flex-row items-baseline'>
                    <AppText font='montserrat' bold>
                      Tk {item.price}
                    </AppText>
                    <AppText font='montserrat' size='xs'>
                      /month
                    </AppText>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
