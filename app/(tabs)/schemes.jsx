import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"

const { width } = Dimensions.get("window") // Get screen width for responsiveness

const links = [
  "All",
  "Education",
  "Entrepreneurship",
  "Safety",
  "Rehabilitation",
  "Financial Assistants",
]

const schemes = [
  {
    tag: "Entrepreneurship",
    title: "Pradhan Mantri Mudra Yojana (PMMY)",
    desc: "Provides collateral-free loans to small and micro-enterprises.",
    details: "This scheme helps small businesses get financial support from banks without the need for collateral...",
  },
  {
    tag: "Education",
    title: "Beti Bachao Beti Padhao",
    desc: "A scheme to reduce the child sex ratio and educate and empower women.",
    details: "This initiative provides scholarships and awareness programs for girl education across India...",
  },
  {
    tag: "Safety",
    title: "Mission Shakti",
    desc: "An umbrella scheme for the safety, security, and empowerment of women.",
    details: "This scheme offers self-defense training, legal aid, and financial support for women in distress...",
  },
  {
    tag: "Rehabilitation",
    title: "Working Women Hostel",
    desc: "Provides safe and conveniently located accommodation for working women.",
    details: "The government funds hostels for working women, ensuring security and comfort in major cities...",
  },
]

const Schemes = () => {
  const [activeTab, setActiveTab] = useState("list")
  const [selectedScheme, setSelectedScheme] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER SECTION */}
      <LinearGradient
        style={styles.topOverlay}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={["#AC1754", "transparent"]}
      >
        <Image
          style={styles.schemeImg}
          source={require("../../assets/images/shemes.png")}
        />
        <View style={styles.top}>
          <Text style={styles.topText}>
            {activeTab === "list" ? "Government Schemes" : selectedScheme.title}
          </Text>
        </View>
      </LinearGradient>

      {/* CATEGORY TABS (FIXED HEIGHT) */}
      {activeTab === "list" ? (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.links}
          >
            {links.map((link) => (
              <TouchableOpacity
                key={link}
                onPress={() => setActiveCategory(link)}
                style={[
                  styles.linkItem,
                  activeCategory === link && styles.activeLink,
                ]}
              >
                <Text
                  style={[
                    styles.linkText,
                    activeCategory === link && styles.activeLinkText,
                  ]}
                  numberOfLines={1} // Prevents text wrapping
                >
                  {link}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* SCHEMES LIST */}
          <ScrollView contentContainerStyle={styles.schemes}>
            {schemes
              .filter((scheme) => activeCategory === "All" || scheme.tag === activeCategory)
              .map((scheme) => (
                <View key={scheme.title} style={styles.scheme}>
                  <Text style={styles.schemeTag}>{scheme.tag}</Text>
                  <Text style={styles.schemeTitle}>{scheme.title}</Text>
                  <Text style={styles.schemeDesc}>{scheme.desc}</Text>

                  {/* "View More" Button */}
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedScheme(scheme)
                      setActiveTab("details")
                    }}
                    style={styles.button}
                  >
                    <Ionicons size={20} name="book-outline" color="white" />
                    <Text style={styles.buttonText}>View More</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>

          {/* FIX: If no schemes are found, show a message */}
          {schemes.filter((scheme) => activeCategory === "All" || scheme.tag === activeCategory).length === 0 && (
            <Text style={styles.noDataText}>No schemes available for this category.</Text>
          )}
        </>
      ) : (
        // DETAILS VIEW
        <View style={styles.detailsContainer}>
          {/* BACK BUTTON */}
          <TouchableOpacity
            onPress={() => setActiveTab("list")}
            style={styles.backButton}
          >
            <Ionicons size={24} name="arrow-back" color="white" />
          </TouchableOpacity>

          <Text style={styles.detailsText}>{selectedScheme.details}</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topOverlay: { position: "relative", height: 160, justifyContent: "flex-end" },
  top: { padding: 20 },
  schemeImg: {
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
    zIndex: -1,
  },
  topText: { color: "white", fontWeight: "bold", fontSize: 22 },
  links: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60, // Fixed height for the tab container
    alignItems: "center", // Center tabs vertically
  },
  linkItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#AC1754",
    height: 40, // Fixed height for each tab
    justifyContent: "center",
    alignItems: "center", // Center text horizontally
    marginRight: 10, // Add spacing between tabs
  },
  activeLink: {
    backgroundColor: "#AC1754",
  },
  linkText: {
    fontWeight: "bold",
    color: "#AC1754",
    textAlign: "center",
    numberOfLines: 1, // Prevent text wrapping
  },
  activeLinkText: {
    color: "#fff",
  },
  schemes: {
    padding: 20,
    paddingTop: 0, // Remove extra padding at the top
    gap: 15,
  },
  scheme: {
    width: width * 0.9,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: "center",
  },
  schemeTag: {
    color: "#777",
    fontSize: 14,
    marginBottom: 5,
  },
  schemeTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  schemeDesc: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
    alignSelf: "flex-start",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  noDataText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 20,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  detailsText: {
    fontSize: 16,
    color: "#333",
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: "#AC1754",
    padding: 10,
    alignSelf: "flex-start",
    borderRadius: 50,
  },
})

export default Schemes