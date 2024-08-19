import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, handleCardPress, selectedJobs }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJobs, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJobs, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </text>
      <view style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJobs, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </view>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
