import { View, Text, Image } from "react-native";
import React from "react";

import { SIZES, FONTS, COLORS, assets, SHADOWS } from "../constants";

export const Title = ({
  title,
  subject,
  standard,
  titleSize,
  subjectSize,
  classSize,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
          marginBottom: SIZES.font,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subjectSize,
          color: COLORS.primary,
        }}
      >
        {subject}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: classSize,
          color: COLORS.primary,
        }}
      >
        Class {standard}
      </Text>
    </View>
  );
};
