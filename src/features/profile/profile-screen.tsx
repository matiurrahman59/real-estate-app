import { dhakaEstateList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import PropertyCard from '@/src/components/PropertyCard';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import DataGroup from './components/DataGroup';
import SettingButton from './components/SettingButton';
import TabbedButtonGroup from './components/TabbedButtonGroup';

export type Tab = 'transaction' | 'listings' | 'sold';

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('transaction');

  return (
    <ScrollView className='bg-white px-5'>
      <SettingButton />
      {/* <UserProfile /> */}
      <DataGroup />
      <TabbedButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} />

      <View className='mt-5 flex-row items-center justify-between'>
        <AppText bold size='large'>
          {activeTab === 'listings' ? dhakaEstateList.length : 0} {activeTab}
        </AppText>
        <View className='flex-row items-center gap-3'>
          <TouchableOpacity className='p-2 bg-gray rounded-2xl'>
            <MaterialCommunityIcons
              name='select-group'
              size={24}
              color='black'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='add-circle' size={40} color='#234F68' />
          </TouchableOpacity>
        </View>
      </View>
      <View className='mt-5'>
        {activeTab === 'listings' && (
          <PropertyCard propertyList={dhakaEstateList} />
        )}
      </View>
    </ScrollView>
  );
}

// const { logout, resetOnboarding } = useAuthStore();
// <Button title='Sign out' onPress={logout} />
// <Button title='Reset Onboarding' onPress={resetOnboarding} />
