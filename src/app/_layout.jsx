import { colors } from '#/constants/theme/colors'
import { AppProvider } from '@/context/app'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarStyle: 'light',
            statusBarColor: colors.primary
          }}
        />
      </SafeAreaView>
    </AppProvider>
  )
}
