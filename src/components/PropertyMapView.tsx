import { FC } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AppText from './AppText';

interface PropertyMapViewProps {
  propertyName: string;
  propertyLocation: {
    lat: number;
    long: number;
    address: string;
  };
}

const PropertyMapView: FC<PropertyMapViewProps> = ({
  propertyName,
  propertyLocation,
}) => {
  return (
    <View
      className='h-[235px] w-full rounded-3xl'
      style={{ overflow: 'hidden' }}
    >
      <MapView
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 24,
        }}
        initialRegion={{
          latitude: Number(propertyLocation.lat),
          longitude: Number(propertyLocation.long),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(propertyLocation.lat),
            longitude: Number(propertyLocation.long),
          }}
          title={propertyName}
          description={propertyLocation.address}
        />
      </MapView>
      <View className='absolute bottom-0 bg-gray py-4 w-full'>
        <AppText font='raleway' size='small' className='text-center'>
          View all on map
        </AppText>
      </View>
    </View>
  );
};

export default PropertyMapView;
