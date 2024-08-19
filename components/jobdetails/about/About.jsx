//libraries
import React from "react";
import { View, Text } from "react-native";

//styles
import styles from "./about.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Job</Text>

      <View styles={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
