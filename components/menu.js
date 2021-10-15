import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles.js";

function Menu() {
  return (
    <View activeOpacity={0.7} style={styles.menu}>
      <TouchableOpacity style={styles.buttonReturn} onPress={goHome}>
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
