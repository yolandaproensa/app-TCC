import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles.js";
import Content from "../../content.json";

function Cores({ navigation }) {
  const [color, setColor] = useState("");
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
        <Text style={styles.formTitle}>Cores</Text>

        <View style={styles.letterContainer}>
          <View style={styles.letter}>
            <Image
              style={styles.letterImage}
              source={{
                uri: "http://www.edutic.pe/galeria/storage/cache/images/000/044/a-letter-lowercase-red,medium.2x.1532897099.png",
              }}
            />
          </View>
          <View style={styles.person}>
            <Image
              style={styles.personImage}
              source={{
                uri: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
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

export default Cores;
