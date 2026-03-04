import { AntDesign, Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

interface featureEstate {
  name: string
  rating: number
  location: {
    city: string
    lat: number
    long: number
  }
  price: number
  imageUri: string
}

interface FeaturedEstatesProps {
  featureEstateList: featureEstate[]
}

const FeaturedEstates: FC<FeaturedEstatesProps> = ({ featureEstateList }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={featureEstateList}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          className={`${index === 0 && 'ml-5'} ${featureEstateList.length - 1 === index && 'mr-5'}`}
        >
          <View className='bg-gray rounded-3xl'>
            <View className='p-2 flex-row gap-3'>
              <Image
                source={{
                  uri: item.imageUri,
                }}
                className='h-[140px] w-[134px] rounded-3xl'
              />
              <View className='max-w-32 justify-between py-2'>
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
                      {item.location.city}
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
  )
}

export default FeaturedEstates
