import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import "react-native-reanimated"

import { useColorScheme } from "@/hooks/useColorScheme"


SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboard2" />
        <Stack.Screen name="onboard3" />
        <Stack.Screen name="home" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name = "sos" options={{ headerShown: true, title: "SOS", headerBackTitle: "Back" }}  />
        <Stack.Screen name = "helpline" options={{ headerShown: true, title: "Helpline", headerBackTitle: "Back" }}  />
        <Stack.Screen name = "record" options={{ headerShown: true, title: "Record", headerBackTitle: "Back" }}  />
        <Stack.Screen name = "courseDetails" options={{ headerShown: true, title: "Course Details", headerBackTitle: "Back" }}  />
        <Stack.Screen name = "track" options={{ headerShown: true, title: "Track", headerBackTitle: "Back" }}  />
        <Stack.Screen name = "support" options={{ headerShown: true, title: "Support", headerBackTitle: "Back" }}  />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
