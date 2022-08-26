import { View, Text, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";

import { FocusedStatusBar, ImagePickerCard, HomeHeader } from "../components";
import { useWindowDimensions } from "react-native";

import { assets, COLORS } from "../constants";

const Admin = () => {
  let displaySize = 0;
  if (Platform.OS == "web") {
    displaySize = useWindowDimensions().width / 5.1;
  } else {
    displaySize = useWindowDimensions().width / 2;
  }
  const [pickedImage1, setPickedImage1] = useState(null);
  const [ocrImage1, setOcrImage1] = useState(null);
  const [im1, setIm1] = useState();
  const [pickedImage2, setPickedImage2] = useState(null);
  const [ocrImage2, setOcrImage2] = useState(null);
  const [im2, setIm2] = useState();
  const [similarity, setSimilarity] = useState(true);

  const simi_mat = [
    [100, 73, 67, 81],
    [73, 100, 78, 54],
    [67, 78, 100, 65],
    [81, 54, 65, 100],
  ];

  useEffect(() => {
    if (pickedImage1) {
      let ocrImage = "";
      switch (pickedImage1.width) {
        case 1014:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/0y76bsDF/01-ocr.jpg";
          } else {
            ocrImage = assets.im01;
          }
          setIm1(1);
          break;
        case 1018:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/7LVfnnBN/02-ocr.jpg";
          } else {
            ocrImage = assets.im02;
          }
          setIm1(2);
          break;
        case 910:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/9Mg0vFHR/03-ocr.jpg";
          } else {
            ocrImage = assets.im03;
          }
          setIm1(3);
          break;
        case 672:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/tJ1JyQ9r/04-ocr.jpg";
          } else {
            ocrImage = assets.im04;
          }
          setIm1(4);
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
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/0y76bsDF/01-ocr.jpg";
          } else {
            ocrImage = assets.im01;
          }
          setIm2(1);
          break;
        case 1018:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/7LVfnnBN/02-ocr.jpg";
          } else {
            ocrImage = assets.im02;
          }
          setIm2(2);
          break;
        case 910:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/9Mg0vFHR/03-ocr.jpg";
          } else {
            ocrImage = assets.im03;
          }
          setIm2(3);
          break;
        case 672:
          if (Platform.OS == "web") {
            ocrImage = "https://i.postimg.cc/tJ1JyQ9r/04-ocr.jpg";
          } else {
            ocrImage = assets.im04;
          }
          setIm2(4);
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
        setSimilarity(simi_mat[im1 - 1][im2 - 1] + "%");
      }, Math.random() * 980 + 580);
    }
  }, [ocrImage1, ocrImage2]);

  return (
    <View>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <HomeHeader />
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
