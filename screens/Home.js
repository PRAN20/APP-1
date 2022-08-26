import { View, Text } from "react-native";
import React from "react";

import { FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <View>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <Text>Home</Text>
    </View>
  );
};

export default Home;
