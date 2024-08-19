//libraries
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

//styles
import styles from "./popularjobcard.style";

//utils
import { checkImage } from "../../../../utils";

const PopularJobCard = ({ item, handleCardPress, selectedJobs }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJobs, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJobs, item)}>
        <Image
          source={{
            uri: checkImage(item.employer_logo)
              ? item.employer_logo
              : "/assets/imagesjobSearch.jpg",
          }}
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
