import { View, Text, StatusBar } from "react-native";
import React from "react";

const FocusedStatusBar = ({ backgroundColor, ...props }) => {
  const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;
  return (
    <>
      <View
        style={{ height: STATUS_BAR_HEIGHT, backgroundColor: backgroundColor }}
      >
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
      <View
        style={{ backgroundColor: backgroundColor, height: HEADER_HEIGHT }}
      />
    </>
  );
};

export default FocusedStatusBar;
