import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./styles.js";

function goLogin() {
  navigation.navigate("Login");
}

return (
  <ScrollView>
    <View activeOpacity={0.7} style={styles.menu}>
      <TouchableOpacity
        style={styles.buttonOut}
        onPress={() => navigation.navigate("Login")}
      >
        <Icon name="sign-out" size={45} color="white" />
      </TouchableOpacity>

      <Text style={styles.areaTitle}> USUÁRIO </Text>
    </View>

    <View>
      <TouchableOpacity
        onPress={goHome}
        activeOpacity={0.5}
        style={styles.formButton}
      >
        <Text style={styles.formButtonText}>AJUDA</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "rgba(0,0,0,0.35)",
          fontWeight: "600",
          marginVertical: -48,
        }}
      ></Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.formButton}>
        <Text style={styles.formButtonText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

export default Profile;
