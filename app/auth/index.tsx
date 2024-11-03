import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const { height } = Dimensions.get('window');

const FullScreenGradient = () => {
  return (
    <LinearGradient colors={["#285D89", "#181E36"]} style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>

          <View style={styles.topContainer}>
            <Image style={styles.logo} source={require("../../assets/logo.png")} />
            <Text style={styles.logoStyle}>Hydrate Me</Text>
            <Text style={styles.logoMoto}>Elevating Hydration</Text>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => router.push("/auth/register")} type='solid' title='Log In' />
            <CustomButton onPress={() => router.push("/auth/register")} type='outline' title='Create New Account' />
          </View>

        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  buttonContainer: {
    width: '85%',
    marginBottom: 70,
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  logoStyle: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 10,
  },
  logoMoto: {
    color: "#27AAF7",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
});
export default FullScreenGradient;
