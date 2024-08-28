import { tabs_routes } from '#/constants/tabs_routes'
import { colors } from '#/constants/theme/colors'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          color: '#fff',
          fontSize: 12
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0
        }
      }}
    >
      {tabs_routes.map(({ name, tabBarLabel, title, icon }, i) => (
        <Tabs.Screen
          key={i}
          name={name}
          options={{
            tabBarLabel,
            title,
            tabBarIcon: () => icon
          }}
        />
      ))}
    </Tabs>
  )
}
