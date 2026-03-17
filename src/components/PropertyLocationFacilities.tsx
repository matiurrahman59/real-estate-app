import { FontAwesome5 } from '@expo/vector-icons';
import { FC } from 'react';
import { FlatList, View } from 'react-native';
import { COLORS } from '../assets/constants/colors';
import AppText from './AppText';

interface locationFacilities {
  id: string;
  label: string;
  value: number;
  icon: string;
}

interface PropertyLocationFacilitiesProps {
  locationFacilities: locationFacilities[];
}

const PropertyLocationFacilities: FC<PropertyLocationFacilitiesProps> = ({
  locationFacilities,
}) => {
  return (
    <FlatList
      data={locationFacilities}
      scrollEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 10,
      }}
      renderItem={({ item, index }) => (
        <View
          key={index}
          className={`py-[15px] px-[25px] bg-gray self-start rounded-full flex-row items-center gap-2 ${index === 0 && 'ml-5'} ${locationFacilities.length - 1 === index && 'mr-5'}`}
        >
          <FontAwesome5 name={item.icon} size={16} color={COLORS.green} />
          <AppText font='raleway' size='xs'>
            {item.value} {item.label}
          </AppText>
        </View>
      )}
    />
  );
};

export default PropertyLocationFacilities;
