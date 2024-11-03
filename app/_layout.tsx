import { Stack } from 'expo-router';

export default function RootLayout() {
  const isOnboarded = false;
  return (
    <Stack>
      {
        isOnboarded ?
          (
            <Stack.Screen name="(tabs)"
              options={{
                headerShown: false
              }}
            />
          ) : (
            <Stack.Screen name="auth/register"
              options={{
                headerShown: false
              }}
            />
          )
      }
    </Stack>
  );
}

