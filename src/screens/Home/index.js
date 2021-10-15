import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles.js";

function Home({ navigation }) {
  const [casa, setCasa] = useState("");

  function goLogin() {
    navigation.navigate("Login");
  }

  return (
    <View>
      <View activeOpacity={0.7} style={styles.menu}>
        <TouchableOpacity
          style={styles.buttonOut}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="sign-out" size={40} color="#424242" />
        </TouchableOpacity>

        <Text style={styles.areaTitle}> USUÁRIO </Text>

        <TouchableOpacity
          style={styles.buttonProfile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="user" size={35} color="#424242" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -120 : -180}
          style={styles.form}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => navigation.navigate("Alfabeto")}
          >
            <MaterialCommunityIcons
              name="alphabetical-variant"
              size={60}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => navigation.navigate("Cores")}
          >
            <MaterialCommunityIcons name="palette" size={60} color="black" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -120 : -180}
          style={styles.form}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => navigation.navigate("Alfabeto")}
          >
            <Icon name="paw" size={60} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => navigation.navigate("Alimentos")}
          >
            <FontAwesome name="cutlery" size={60} color="black" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -120 : -180}
          style={styles.form}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => navigation.navigate("Saudacoes")}
          >
            <MaterialCommunityIcons
              name="human-greeting"
              size={60}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button} /*onPress={goFamilia}*/
          >
            <MaterialIcons name="family-restroom" size={60} color="black" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

export default Home;
