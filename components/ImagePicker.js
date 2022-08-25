import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";

const ImagePickerCard = ({ text, displaySize, pickedImageFn, pickedImage }) => {
  if (!pickedImageFn) {
    [pickedImage, pickedImageFn] = useState(null);
  }

  useEffect(() => {
    const getPermissionAsync = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };
    getPermissionAsync();
  }, []);

  const selectImageAsync = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
      });

      if (!response.cancelled) {
        console.log(response);
        const manipResponse = await ImageManipulator.manipulateAsync(
          response.uri,
          [{ resize: { width: 640, height: 640 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
        );
        const source = { uri: response.uri };
        pickedImageFn(source);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      onPress={selectImageAsync}
      style={{
        width: displaySize,
        height: displaySize,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.medium,
        ...SHADOWS.light,
      }}
    >
      {pickedImage && (
        <Image
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.font,
            opacity: 0.9,
          }}
          source={pickedImage}
        />
      )}
      <View
        style={{
          position: "absolute",
        }}
      >
        {pickedImage ? null : (
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
            }}
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImagePickerCard;
