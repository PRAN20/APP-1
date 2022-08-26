import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { assets, COLORS, SIZES, SHADOWS, FONTS } from "../constants";

const RectButton = ({
  text,
  minWidth,
  fontSize,
  handlePress,
  marginTop,
  backgroundColor,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        marginTop: marginTop,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
