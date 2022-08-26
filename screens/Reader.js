import { View, Text } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const Reader = () => {
  return (
    <View>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <Text>Reader</Text>
    </View>
  );
};

export default Reader;
