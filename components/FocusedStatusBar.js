import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

const FocusedStatusBar = ({ backgroundColor, ...props }) => {
  const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  let HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;
  if (Platform.OS === "web") {
    HEADER_HEIGHT = 0;
  }
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
