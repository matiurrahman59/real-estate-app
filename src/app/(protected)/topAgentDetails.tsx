import { dhakaEstateList, topAgentList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import BackButton from '@/src/components/BackButton';
import EstateVerticalCard from '@/src/components/EstateVerticalCard';
import DataGroup from '@/src/features/profile/components/DataGroup';
import SettingButton from '@/src/features/profile/components/SettingButton';
import TabbedButtonGroup from '@/src/features/profile/components/TabbedButtonGroup';
import UserProfile from '@/src/features/profile/components/UserProfile';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type Tab = 'transaction' | 'listings' | 'sold';

export default function TopAgentDetails() {
  const insets = useSafeAreaInsets();
  const { agentName, agentRanking } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>('listings');

  const agentDetails = topAgentList.find((agent) => agent.name === agentName);

  if (!agentDetails || !agentRanking) return null;

  return (
    <ScrollView
      className='bg-white px-5'
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <BackButton />
      <SettingButton />
      <UserProfile agent={agentDetails} agentRanking={agentRanking} />
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
          <EstateVerticalCard estateList={dhakaEstateList} />
        )}
      </View>
    </ScrollView>
  );
}
