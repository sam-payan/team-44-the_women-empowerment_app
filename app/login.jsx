import { Image, StatusBar, StyleSheet, Text, View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Link, router } from "expo-router"
import { Button, TextInput } from "react-native-paper"
import { useState } from "react"
import { signIn } from "@/api/Auth"

export default function HomeScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  // handle input change
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }
  // handle login
  const handleLogin = async () => {
    const response = await signIn(formData);
    console.log("Login Response:", response);
    if (response.token) {
      console.log("Login Successful:", response.token);
      router.push("/(tabs)/tabHome");
    } else {
      console.log("Login Failed:", response.error);
    }
  }
  return (
    <SafeAreaView>
      <Image
        resizeMode="cover"

        source={require("@/assets/images/login.png")}
        style={styles.bgImg}
      />

      <LinearGradient
        colors={["transparent", "#fff"]}
        locations={[0, 0.4]}
        style={styles.overlay}
      >
        <Text style={{ fontSize: 40, marginBottom: 10, fontWeight: "bold" }}>
          Login
        </Text>
        <TextInput
  outlineColor="#AC1754"
  activeOutlineColor="#AC1754"
  label="Email"
  value={formData.email} 
  onChangeText={(value) => handleInputChange("email", value)} 
  keyboardType="email-address"
  autoCapitalize="none"
  mode="outlined"
/>
<TextInput
  outlineColor="#AC1754"
  activeOutlineColor="#AC1754"
  label="Password"
  value={formData.password}
  onChangeText={(value) => handleInputChange("password", value)} 
  secureTextEntry={!showPassword}
  mode="outlined"
  right={
    <TextInput.Icon
      icon={showPassword ? "eye-off" : "eye"}
      onPress={() => setShowPassword(!showPassword)}
    />
  }
/>

        <Button mode="contained" buttonColor="#AC1754" onPress={handleLogin}>
          Login
        </Button>
        <Button
          icon="google"
          mode="outlined"
          textColor="#AC1754"
          onPress={handleLogin}
        >
          Continue with Google
        </Button>
        <Text>
          Already Have One?{" "}
          <Link
            href={"/register"}
            style={{
              color: "#AC1754",
            }}
          >
            Register
          </Link>
        </Text>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bgImg: {
    margin: 0,
    padding: 0,
    width: "100%",

    // resizeMode: "cover",
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
