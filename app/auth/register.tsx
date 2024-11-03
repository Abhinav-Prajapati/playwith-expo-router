import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const { height } = Dimensions.get('window');
const Register = () => {
  return (
    <LinearGradient colors={["#285D89", "#181E36"]} style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Text>Register</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height
  },
});

export default Register

