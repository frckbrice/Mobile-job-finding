// libraries
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
//components

//styles
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const JOBS_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Brice</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JOBS_TYPES} // the list of data to render
          horizontal // align items data horizontally
          showsHorizontalScrollIndicator={false} // remove the scroll bar
          renderItem={(
            { item } // render the list of data items
          ) => (
            <TouchableOpacity // each item should be clickable
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);

                //route to individual screen based on job type
                router.push(`/search/${item}`);
              }}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: SIZES.small }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
