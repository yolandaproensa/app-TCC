import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles.js";
import Content from "../../content.json";

function Animais({ navigation }) {
  const [animal, setAnimal] = useState("");
  const [content, setContent] = useState("../../icones/abacaxi.jpeg");
  const [abacaxi, setAbacaxi] = useState();

  function goHome() {
    navigation.navigate("Home");
  }

  function getImage() {
    var url = new URL("../../icones/abacaxi.jpeg");
    return url;
  }

  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View activeOpacity={0.7} style={styles.menu}>
        <TouchableOpacity style={styles.buttonReturn} onPress={goHome}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.formTitle}>Animais</Text>

        <View style={styles.letterContainer}>
          <View style={styles.letter}>
            <Image
              style={styles.letterImage}
              source={{
                uri: "",
              }}
            />
          </View>
          <View style={styles.person}>
            <Image
              style={styles.personImage}
              source={{
                uri: "",
              }}
            />
          </View>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button2}
            onPress={() => navigation.navigate("")}
          >
            <AntDesign name="check" size={38} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button1}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.button1Text}>PULAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Animais;
