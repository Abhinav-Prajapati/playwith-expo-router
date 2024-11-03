import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index"
        options={{
          headerTitle: "Home Page"
        }}
      />
      <Tabs.Screen name="users/[id]" />
    </Tabs>
  )
}

export default TabsLayout
