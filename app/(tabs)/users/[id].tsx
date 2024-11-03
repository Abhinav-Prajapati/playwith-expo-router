import { Link, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import React from 'react-native'

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>UserPage for user {id}</Text>
      <Link href={"/"}>
        Home
      </Link>
    </View>
  )
}

export default UserPage
