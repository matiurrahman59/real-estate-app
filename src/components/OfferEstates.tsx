import { FontAwesome } from '@expo/vector-icons';
import { FC } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from './AppText';
import ItemSperator from './ItemSperator';

interface offerEstate {
  id: number;
  name: string;
  discount: number;
  imageUrl: string;
}

interface OfferEstatesProps {
  offerEstatesList: offerEstate[];
}

const OfferEstates: FC<OfferEstatesProps> = ({ offerEstatesList }) => {
  return (
    <FlatList
      data={offerEstatesList}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <ItemSperator width={13} />}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          className={`w-[270px] h-[180px] relative ${item.id === 1 && 'ml-5'} ${offerEstatesList.length === item.id && 'mr-5'}`}
        >
          {/* image overlay */}
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
            className='rounded-3xl rounded-bl-none'
          />
          <Image
            source={{ uri: item.imageUrl }}
            className='absolute inset-0 -z-50 rounded-3xl rounded-bl-none'
          />

          <View className='pt-10 pl-[22px]'>
            <AppText bold font='raleway' size='large' color='white'>
              {item.name}
            </AppText>
            <AppText font='raleway' color='white' className='text-[10px]'>
              All discounts upto {item.discount}%
            </AppText>
          </View>

          <View className='w-[93px] h-[56px] items-center justify-center bg-tertiary rounded-tr-3xl absolute left-0 bottom-0'>
            <FontAwesome name='long-arrow-right' size={17} color='white' />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default OfferEstates;
