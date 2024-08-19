//library
import React, { useState } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

//constant
import { images, SIZES, COLORS, icons } from "../constants";

//components
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "flex-start",
        // alignItems: "center",
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => {}}
            />
          ),
          headerTitle: "", // to remove the header title
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
