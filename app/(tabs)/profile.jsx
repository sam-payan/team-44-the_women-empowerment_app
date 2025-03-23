import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://source.unsplash.com/200x200/?woman,portrait" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.email}>janedoe@example.com</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Personal Information</Text>
        <Text style={styles.infoText}>📞 +123 456 7890</Text>
        <Text style={styles.infoText}>📍 New York, USA</Text>
        <Text style={styles.infoText}>🎂 15th March 1995</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Account Details</Text>
        <Text style={styles.infoText}>🔑 Username: janedoe95</Text>
        <Text style={styles.infoText}>📅 Joined: January 2022</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 15 },

  header: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", color: "#333" },
  email: { fontSize: 16, color: "#666" },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoTitle: { fontSize: 18, fontWeight: "bold", color: "#d45b7a", marginBottom: 5 },
  infoText: { fontSize: 16, color: "#333", marginBottom: 3 },

  button: {
    backgroundColor: "#d45b7a",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  logoutButton: { backgroundColor: "#ff4d4d" },
});

export default ProfileScreen;
