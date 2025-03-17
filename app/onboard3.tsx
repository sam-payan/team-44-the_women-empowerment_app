import { Image, StatusBar, StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Image
        resizeMode="cover"
        source={require("@/assets/images/onboard3.png")}
        style={styles.bgImg}
      />
      <LinearGradient
        colors={["transparent", "#AC1754"]}
        locations={[0, 0.8]}
        style={styles.overlay}
      >
        <ThemedText
          type="defaultSemiBold"
          style={{ textAlign: "center", fontSize: 20, marginBottom: 30 }}
        >
          Sharing your location with people you trust is a smart way to increase
          safety and security when walking alone.
        </ThemedText>
        <ThemedText style={{ textAlign: "center" }}>
          We respect your privacy and location will only be shared with your
          consent.
        </ThemedText>
        <View style={styles.steps}>
          <Link href={"/"}>
            <View
              style={[
                styles.stepCircle,
                { backgroundColor: "rgba(255,255,255,0.5)" },
              ]}
            ></View>
          </Link>
          <Link href={"/onboard2"}>
            <View
              style={[
                styles.stepCircle,
                { backgroundColor: "rgba(255,255,255,0.5)" },
              ]}
            ></View>
          </Link>
          <View style={styles.stepCircle}></View>
        </View>
        <View style={styles.skipView}>
          <Link href={"/home"} style={{ color: "#fff" }}>
            Skip
          </Link>
          <Link href={"/home"}>
            <Ionicons name="chevron-forward-circle" size={28} color={"#fff"} />
          </Link>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",

    height: "100%",
    // resizeMode: "cover",
    position: "absolute",
    top: StatusBar.currentHeight,
  },
  overlay: {
    height: "100%",
    justifyContent: "flex-end",
    gap: 20,
    padding: 20,
  },
  steps: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    // outline: "1px solid",
  },
  stepCircle: {
    width: 15,
    height: 15,
    borderRadius: 1000,
    backgroundColor: "#fff",
  },
  skipView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
