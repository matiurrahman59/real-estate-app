import { DEVICE } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import MessageList from '@/src/components/MessageList';
import NotificationList from '@/src/components/NotificationList';
import { TabSwitcher } from '@/src/components/TabSwitcher';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

type Tab = 'notification' | 'message';

export default function NotificationScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('notification');

  return (
    <ScrollView className='bg-white'>
      <View
        style={{
          marginBottom: DEVICE.statusBar,
        }}
      >
        <View className='mt-5 mx-5'>
          <TabSwitcher
            initialTab='notification'
            tabs={[
              {
                key: 'notification',
                renderLabel: (isActive) => (
                  <AppText
                    bold
                    font='raleway'
                    size='xs'
                    color={isActive ? 'primary' : 'placeholder'}
                    className='py-3'
                  >
                    Notification
                  </AppText>
                ),
              },
              {
                key: 'message',
                renderLabel: (isActive) => (
                  <AppText
                    bold
                    font='raleway'
                    size='xs'
                    color={isActive ? 'primary' : 'placeholder'}
                    className='py-3'
                  >
                    Messages
                  </AppText>
                ),
              },
            ]}
            onTabChange={(tab) => setActiveTab(tab)}
          />
        </View>
        {activeTab === 'notification' ? <NotificationList /> : <MessageList />}
      </View>
    </ScrollView>
  );
}
