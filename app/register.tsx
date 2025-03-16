import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"
import { Button, TextInput } from "react-native-paper"
import { useState } from "react"

export default function RegisterScreen() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleRegister = () => {
    console.log("Register", username, email, password, confirmPassword)
  }

  return (
    <SafeAreaView>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.bgImg}
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
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          mode="outlined"
        />
        <TextInput
          outlineColor="#AC1754"
          activeOutlineColor="#AC1754"
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
        />
        <TextInput
          outlineColor="#AC1754"
          activeOutlineColor="#AC1754"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <TextInput
          outlineColor="#AC1754"
          activeOutlineColor="#AC1754"
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={showConfirmPassword ? "eye-off" : "eye"}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
        />
        <Button mode="contained" buttonColor="#AC1754" onPress={handleRegister}>
          Register
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
    resizeMode: "cover",
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
