import { FC } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

interface TopAgent {
  name: string
  imageUri: string
}

interface TopAgentsProps {
  topAgents: TopAgent[]
}

const TopAgents: FC<TopAgentsProps> = ({ topAgents }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={topAgents}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          className={`items-center ${index === 0 && 'ml-5'} ${topAgents.length - 1 === index && 'mr-5'}`}
        >
          <View className='bg-gray h-[70px] w-[70px] rounded-full p-1'>
            <Image
              source={{
                uri: item.imageUri,
              }}
              className='h-full w-full rounded-full'
            />
          </View>
          <AppText font='raleway' size='small'>
            {item.name}
          </AppText>
        </TouchableOpacity>
      )}
    />
  )
}

export default TopAgents
