import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Animated,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./styles.js";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function goHome() {
    navigation.navigate("Home");
  }

  const [userIconColor] = useState(new Animated.Value(0));
  const [passwordIconColor] = useState(new Animated.Value(0));

  let userIconColorInterpolation = userIconColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0,0,0,0.15)", "rgb(255,128,0)"],
  });

  let passwordIconColorInterpolation = passwordIconColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0,0,0,0.15)", "rgb(255,128,0)"],
  });

  function login() {
    Alert.alert("Login", `Username: ${username}\nPassword: ${password}`);
  }

  function onFocusInput(_n) {
    if (_n === 1) {
      Animated.timing(userIconColor, {
        duration: 200,
        toValue: 1,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(passwordIconColor, {
        duration: 200,
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  }

  function onBlurInput(_n) {
    if (_n === 1) {
      Animated.timing(userIconColor, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(passwordIconColor, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  }

  const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome);
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -120 : -180}
        style={styles.form}
      >
        <Text style={styles.formTitle}>LIBRE-SE</Text>

        <View style={{ width: "80%" }}>
          <AnimatedIcon
            style={{
              ...styles.formTextInputIcon,
              color: userIconColorInterpolation,
            }}
            size={24}
            name="user"
          />
          <AnimatedTextInput
            value={username}
            onFocus={() => {
              onFocusInput(1);
            }}
            onBlur={() => {
              onBlurInput(1);
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuário"
            style={{
              ...styles.formTextInput,
              borderBottomColor: userIconColorInterpolation,
            }}
          />
        </View>
        <View style={{ width: "80%" }}>
          <AnimatedIcon
            style={{
              ...styles.formTextInputIcon,
              color: passwordIconColorInterpolation,
            }}
            size={24}
            name="lock"
          />
          <AnimatedTextInput
            value={password}
            onFocus={() => {
              onFocusInput(2);
            }}
            onBlur={() => {
              onBlurInput(2);
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry
            placeholder="Senha"
            style={{
              ...styles.formTextInput,
              borderBottomColor: passwordIconColorInterpolation,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={goHome}
          activeOpacity={0.5}
          style={styles.formButton}
        >
          <Text style={styles.formButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "rgba(0,0,0,0.35)",
            fontWeight: "600",
            marginVertical: -48,
          }}
        >
          ou
        </Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.formButton}>
          <Text style={styles.formButtonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
