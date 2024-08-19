//libraries
import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

//styles
import styles from "./nearbyjobcard.style";

//utils
import { checkImage } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImage(job.employer_logo)
              ? job.employer_logo
              : "/assets/imagesjobSearch.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <view style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </view>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
