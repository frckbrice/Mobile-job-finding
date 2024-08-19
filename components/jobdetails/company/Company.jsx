//libraries
import React from "react";
import { View, Text, Image } from "react-native";

//styles
import styles from "./company.style";

//constants
import { icons } from "../../../constants";

//utils
import { checkImage } from "../../../utils";

const Company = ({ company }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoBox}>
        <Image
          source={{
            uri: checkImage(company.company_logo)
              ? company.company_logo
              : "/assets/imagesjobSearch.jpg",
          }}
          style={styles.logoImage}
        />
      </Text>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{company.job_title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{company.company_name}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{company.job_location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
