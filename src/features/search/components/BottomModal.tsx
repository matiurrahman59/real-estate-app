import { PRICE_OPTIONS } from '@/src/assets/constants/filterOptions';
import AppText from '@/src/components/AppText';
import SectionHeader from '@/src/components/SectionHeader';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useState } from 'react';
import { Platform, Pressable, View } from 'react-native';
import PriceFilterPills from './PriceFilterPills';
import PropertyFilterPills from './PropertyFilterPills';

export default function BottomModal({
  ref,
}: {
  ref: React.RefObject<BottomSheetModal | null>;
}) {
  const [selectedCategories, setSelectedCategories] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(PRICE_OPTIONS[0]);

  const iosShadow = Platform.OS === 'ios' && {
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      backdropComponent={renderBackdrop}
      backgroundStyle={
        iosShadow || {
          borderRadius: 50,
          elevation: 20,
          shadowColor: 'black',
        }
      }
    >
      <BottomSheetView style={{ flex: 1, padding: 24 }}>
        <View className='flex-row items-center justify-between'>
          <AppText bold font='raleway' size='large'>
            Filter
          </AppText>
          <Pressable className='py-4 px-7 bg-tertiary rounded-[35px]'>
            <AppText font='raleway' color='white' size='small'>
              Reset
            </AppText>
          </Pressable>
        </View>

        <View className='mt-8 gap-3'>
          <SectionHeader title='Property type' />
          <PropertyFilterPills
            selected={selectedCategories}
            onSelect={setSelectedCategories}
          />
        </View>

        <View className='mt-8 gap-3'>
          <SectionHeader title='Price range' />
          <PriceFilterPills
            selected={selectedPrice}
            onSelect={setSelectedPrice}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
