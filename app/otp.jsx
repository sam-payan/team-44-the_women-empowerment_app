import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import OTPInputView from "react-native-otp-input";
import { useRouter } from "expo-router";

const OTPInputScreen = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleOTPSubmit = () => {
    console.log("Entered OTP:", otp);
    router.push("/(tabs)/tabHome"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your OTP</Text>
      <Text style={styles.subtitle}>
        A verification code has been sent to your email. Please enter it below.
      </Text>

      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        value={otp || ""}
        onCodeChanged={setOtp}
        autoFocusOnLoad
        codeInputFieldStyle={styles.otpBox}
      />

      <Button
        mode="contained"
        onPress={handleOTPSubmit}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        <Text style={{ color: "#FFFFFF" }}>Verify OTP</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE4EC",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  otpInput: {
    width: "80%",
    height: 60,
  },
  otpBox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#D81B60",
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#D81B60",
    width: "80%",
    borderRadius: 20,
  },
  buttonContent: {
    height: 50,
  },
});

export default OTPInputScreen;
