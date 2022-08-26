import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { assets, COLORS, SIZES, SHADOWS, FONTS } from "../constants";

const HomeHeader = ({ onSearch, userInfo, loginFn }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 200, height: 32 }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
