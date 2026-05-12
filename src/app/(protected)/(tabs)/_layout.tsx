import tabbedScreenOptions from '@/src/components/tabbedScreenOptions';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Tabs screenOptions={tabbedScreenOptions}>
          <Tabs.Screen
            name='index'
            options={{ headerShown: false, popToTopOnBlur: true }}
          />
          <Tabs.Screen
            name='search'
            options={{ title: 'Search', headerTitleAlign: 'center' }}
          />
          <Tabs.Screen
            name='favorite'
            options={{ title: 'My Favorite', headerTitleAlign: 'center' }}
          />
          <Tabs.Screen
            name='profile'
            options={{ title: 'Profile', headerTitleAlign: 'center' }}
          />
        </Tabs>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
