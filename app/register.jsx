import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"
import { Button, TextInput } from "react-native-paper"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { signUp } from "../api/Auth"
import { router } from "expo-router"

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone:"",
    confirmPassword: "",
    pan_no:"",
  })

  // handle input change
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleRegister = async () => {
    const response = await signUp(formData);
    console.log(response);
    if (response.token) {
      console.log("Register Successful:", response.token);
      await AsyncStorage.setItem("authToken", response.token);
      await AsyncStorage.setItem("otp", response.otp);
      router.push("/otp");
    } else {
      console.log("Register Failed:", response.error);
    }
  }

  return (
    <SafeAreaView>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.bgImg}
        resizeMode="cover" 
      />
      <LinearGradient
        colors={["transparent", "#fff"]}
        locations={[0, 0.4]}
        style={styles.overlay}
      >
        <Text style={{ fontSize: 40, marginBottom: 10, fontWeight: "bold" }}>
          Register
        </Text>
        <TextInput
  outlineColor="#AC1754"
  activeOutlineColor="#AC1754"
  label="Username"
  value={formData.name}
  onChangeText={(value) => handleInputChange("name", value)} // ✅ Fixed
  autoCapitalize="none"
  mode="outlined"
/>

<TextInput
  outlineColor="#AC1754"
  activeOutlineColor="#AC1754"
  label="Email"
  value={formData.email}
  onChangeText={(value) => handleInputChange("email", value)} // ✅ Fixed
  keyboardType="email-address"
  autoCapitalize="none"
  mode="outlined"
/>

<TextInput
  outlineColor="#AC1754"
  activeOutlineColor="#AC1754"
  label="Phone"
  value={formData.phone}
  onChangeText={(value) => handleInputChange("phone", value)} // ✅ Fixed
  keyboardType="number-pad"
  autoCapitalize="none"
  mode="outlined"
/>

<TextInput
  outlineColor="#AC1754"
  activeOutlineColor="#AC1754"
  label="Password"
  value={formData.password}
  onChangeText={(value) => handleInputChange("password", value)} // ✅ Fixed
  secureTextEntry
  autoCapitalize="none"
  mode="outlined"
/>

        <Button mode="contained" buttonColor="#AC1754" onPress={handleRegister}><Link href = {"/otp"}>
          Register</Link>
        </Button>
        <Button
          icon="google"
          mode="outlined"
          textColor="#AC1754"
          onPress={handleRegister}
        >
          Continue with Google
        </Button>
        <Text>
          Already have an account?{" "}
          <Link
            href={"/login"}
            style={{
              color: "#AC1754",
            }}
          >
            Login
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
  },
})
