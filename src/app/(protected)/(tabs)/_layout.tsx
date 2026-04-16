import tabbedScreenOptions from '@/src/components/tabbedScreenOptions';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={tabbedScreenOptions}>
      <Tabs.Screen
        name='index'
        options={{ headerShown: false, popToTopOnBlur: true }}
      />
      <Tabs.Screen
        name='search'
        options={{ title: 'Search results', headerTitleAlign: 'center' }}
      />
      <Tabs.Screen name='favorite' options={{ title: 'Favorite' }} />
      <Tabs.Screen
        name='profile'
        options={{ title: 'Profile', headerTitleAlign: 'center' }}
      />
    </Tabs>
  );
}
