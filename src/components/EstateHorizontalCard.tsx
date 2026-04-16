import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

interface estate {
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
}

export default function EstateHorizontalCard({
  estateList,
}: {
  estateList: estate[];
}) {
  const router = useRouter();

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      // scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      data={estateList}
      // ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      contentContainerStyle={{
        gap: 10,
      }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          // className={`${index === 0 && 'ml-5'} ${estateList.length - 1 === index && 'mr-5'}`}
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
              <Image
                source={{
                  uri: item.coverImage,
                }}
                className='h-[140px] w-[134px] rounded-3xl'
              />
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
      )}
    />
  );
}
