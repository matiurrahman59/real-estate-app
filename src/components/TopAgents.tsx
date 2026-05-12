import { useRouter } from 'expo-router';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

type agentProps = {
  name: string;
  phone: string;
  image: string;
}[];

export const TopAgents = ({ topAgents }: { topAgents: agentProps }) => {
  const router = useRouter();
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
          onPress={() =>
            router.push({
              pathname: '/(protected)/topAgentDetails',
              params: {
                agentName: item.name,
                agentRanking: index + 1,
              },
            })
          }
        >
          <View className='bg-gray h-[70px] w-[70px] rounded-full p-1'>
            <Image
              source={{
                uri: item.image,
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
  );
};
