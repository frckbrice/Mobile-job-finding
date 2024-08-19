//librairies
import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";

//styles
import styles from "./footer.style";

//constants
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View styles={styles.container}>
      <TouchableOpacity styles={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        styles={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;
