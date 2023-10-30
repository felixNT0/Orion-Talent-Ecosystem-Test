/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState<string>("Post"); // Define state to track the active tab.

  const [screenDimensions, setScreenDimensions] = useState<any>(
    Dimensions.get("window")
  ); // Define state to track screen dimensions.

  const { width } = screenDimensions;

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "#94A1AD",
      elevation: 7,
      marginBottom: width >= 500 ? 20 : 0, // Adjust marginBottom based on screen width.
    },
    tab: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      marginHorizontal: 4,
      height: 50,
      marginBottom: 5,
    },
    activeTab: {
      // backgroundColor: '#41BCC4',
    },
    tabLabel: {
      color: "white",
      fontSize: 12,
      marginTop: 4,
    },
  });

  useEffect(() => {
    const onChange = ({ window }: any) => {
      setScreenDimensions(window);
    };

    Dimensions?.addEventListener("change", onChange); // Add an event listener for screen dimension changes.
  }, [screenDimensions]);

  return (
    <View style={styles.container}>
      <View style={[styles.tab, activeTab === "Feed" && styles.activeTab]}>
        <FontAwesomeIcon
          name="feed"
          size={24}
          style={{ color: activeTab === "Feed" ? "#41BCC4" : "#94A1AD" }}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === "Feed" ? "#41BCC4" : "#94A1AD" },
          ]}
        >
          Feed
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Post" && styles.activeTab]}
      >
        <Ionicons
          name="add"
          size={24}
          style={{ color: activeTab === "Post" ? "#41BCC4" : "#94A1AD" }}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === "Post" ? "#41BCC4" : "#94A1AD" },
          ]}
        >
          Post
        </Text>
      </TouchableOpacity>
      <View style={[styles.tab, activeTab === "Account" && styles.activeTab]}>
        <FontAwesome5
          name="user"
          size={24}
          style={{ color: activeTab === "Account" ? "#41BCC4" : "#94A1AD" }}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === "Account" ? "#41BCC4" : "#94A1AD" },
          ]}
        >
          Account
        </Text>
      </View>
    </View>
  );
};

export default BottomNavigationBar;
