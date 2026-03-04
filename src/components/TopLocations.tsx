import { FC } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

interface TopLocation {
  name: string
  imageUri: string
}

interface TopLocationsProps {
  topLocations: TopLocation[]
}

const TopLocations: FC<TopLocationsProps> = ({ topLocations }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={topLocations}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          className={`bg-gray rounded-[50px] ${index === 0 && 'ml-5'} ${topLocations.length - 1 === index && 'mr-5'}`}
        >
          <View className='flex-row items-center gap-2 p-2'>
            <Image
              source={{
                uri: item.imageUri,
              }}
              className='h-10 w-10 rounded-full'
            />

            <AppText font='raleway' size='small'>
              {item.name}
            </AppText>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default TopLocations
