import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";

const HomePage = () => {
  return (
    <View>
      <Text>
        hello
      </Text>
      <Link href="/users/abhi">
        Go to user 1
      </Link>
      <Pressable
        onPress={() => router.push({
          pathname: "/users/[id]",
          params: { id: 2 }
        })}
      >
        <Text>
          Go to user 2
        </Text>
      </Pressable>
      <Link href="/onboard">
        goto test page
      </Link>
    </View>
  )
}

export default HomePage;
