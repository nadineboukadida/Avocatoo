import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import guy from "../../../../assets/guy.png";

export default function LPinfo() {
  return (
    <View style={styles.container}>
        <View style={{ paddingRight: 10 }}>
          <Image style={styles.img} source={guy}></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  selected: {
    backgroundColor: "yellow",
  },
  scrollView: {
    flexDirection: "row",
  },
  img: {
    width: 60,
    height: 60,
  },
});
