import { Image, StatusBar, StyleSheet, Text, View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Image
        source={require("@/assets/images/home.png")}
        style={styles.bgImg}
      />

      <LinearGradient
        colors={["transparent", "#fff"]}
        locations={[0, 0.42]}
        style={styles.overlay}
      >
        <Text style={{ fontSize: 32 }}>Safe Women</Text>
        <Text>
          Providing solutions and assistance in situations that can threaten or
          make you feel unsafe, especially when you are walking alone in a quiet
          place at night.
        </Text>
        <Link style={styles.loginBtn} href={"/login"}>
          Login
        </Link>
        <Link style={styles.registerBtn} href={"/register"}>
          Register
        </Link>
        <Link style={styles.registerBtn} href={"/(tabs)/tabHome"}>
          Proceed
        </Link>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bgImg: {
    margin: 0,
    padding: 0,
    resizeMode: "cover",
    position: "absolute",
    top: StatusBar.currentHeight,
  },
  overlay: {
    height: "100%",
    justifyContent: "flex-end",
    gap: 20,
    padding: 20,
    paddingBottom: 120,
  },
  loginBtn: {
    backgroundColor: "#AC1754",
    borderRadius: 50,
    color: "#fff",
    padding: 10,
    textAlign: "center",
  },
  registerBtn: {
    borderColor: "#AC1754",
    borderWidth: 1,
    borderRadius: 50,
    color: "#AC1754",
    padding: 10,
    textAlign: "center",
  },
})
