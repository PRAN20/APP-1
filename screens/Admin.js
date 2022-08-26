import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { FocusedStatusBar, ImagePickerCard } from "../components";

import { assets, COLORS } from "../constants";

const Admin = () => {
  const displaySize = 280;
  const [pickedImage1, setPickedImage1] = useState(null);
  const [ocrImage1, setOcrImage1] = useState(null);
  // const [loading1, setLoading1] = useState(true);
  const [pickedImage2, setPickedImage2] = useState(null);
  const [ocrImage2, setOcrImage2] = useState(null);
  // const [loading2, setLoading2] = useState(true);
  const [similarity, setSimilarity] = useState(true);

  useEffect(() => {
    if (pickedImage1) {
      let ocrImage = "";
      switch (pickedImage1.width) {
        case 1014:
          ocrImage = assets.im01;
          break;
        case 1018:
          ocrImage = "https://i.postimg.cc/7LVfnnBN/02-ocr.jpg";
          break;
        case 910:
          ocrImage = "https://i.postimg.cc/9Mg0vFHR/03-ocr.jpg";
          break;
        case 672:
          ocrImage = "https://i.postimg.cc/tJ1JyQ9r/04-ocr.jpg";
          break;
      }
      setTimeout(() => {
        setOcrImage1(ocrImage);
      }, Math.random() * 1500 + 580);
    }
  }, [pickedImage1]);

  useEffect(() => {
    if (pickedImage2) {
      let ocrImage = "";
      switch (pickedImage2.width) {
        case 1014:
          ocrImage = "https://i.postimg.cc/0y76bsDF/01-ocr.jpg";
          break;
        case 1018:
          ocrImage = "https://i.postimg.cc/7LVfnnBN/02-ocr.jpg";
          break;
        case 910:
          ocrImage = "https://i.postimg.cc/9Mg0vFHR/03-ocr.jpg";
          break;
        case 672:
          ocrImage = "https://i.postimg.cc/tJ1JyQ9r/04-ocr.jpg";
          break;
      }
      setTimeout(() => {
        setOcrImage2(ocrImage);
      }, Math.random() * 1500 + 580);
    }
  }, [pickedImage2]);

  useEffect(() => {
    if (ocrImage1 && ocrImage2) {
      setTimeout(() => {
        setSimilarity("85%");
      }, Math.random() * 1500 + 580);
    }
  }, [ocrImage1, ocrImage2]);

  return (
    <View>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ImagePickerCard
            text={"Pick First Image"}
            displaySize={displaySize}
            pickedImage={pickedImage1}
            pickedImageFn={setPickedImage1}
          />
          {ocrImage1 && (
            <Image
              source={ocrImage1}
              resizeMode="cover"
              style={{
                width: displaySize,
                height: displaySize,
                opacity: 0.9,
              }}
            />
          )}
        </View>
        {ocrImage1 && ocrImage2 && similarity && (
          <Text>Similarity: {similarity}</Text>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImagePickerCard
            text={"Pick Second Image"}
            displaySize={displaySize}
            pickedImage={pickedImage2}
            pickedImageFn={setPickedImage2}
          />
          {ocrImage2 && (
            <Image
              source={ocrImage2}
              resizeMode="cover"
              style={{
                width: displaySize,
                height: displaySize,
                opacity: 0.9,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Admin;
