import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          color: '#fff',
          fontSize: 12
        },
        tabBarStyle: {
          backgroundColor: '#2f95dc',
          borderTopWidth: 0
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: () => (
            <MaterialIcons name="restaurant-menu" size={24} color="#fff" />
          )
        }}
      />
    </Tabs>
  )
}
