import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { FocusedStatusBar, ImagePickerCard } from "../components";

import { assets } from "../constants";

const Admin = () => {
  const [pickedImage, setPickedImage] = useState(null);
  const [ocrImage, setOcrImage] = useState(null);

  useEffect(() => {
    if (pickedImage) {
      setOcrImage(assets.im01);
      // const k = pickedImage.uri.split("/");
      // switch (k) {
      //   case "01.jpeg":
      //     setOcrImage("https://i.postimg.cc/0y76bsDF/01-ocr.jpg");
      //     break;
      //   case "02.jpeg":
      //     setOcrImage("https://i.postimg.cc/7LVfnnBN/02-ocr.jpg");
      //     break;
      //   case "03.jpeg":
      //     setOcrImage("https://i.postimg.cc/9Mg0vFHR/03-ocr.jpg");
      //     break;
      //   case "04.jpeg":
      //     setOcrImage("https://i.postimg.cc/tJ1JyQ9r/04-ocr.jpg");
      //     break;
      // }
    }
  }, [pickedImage]);
  return (
    <View>
      {/* <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      /> */}
      <ImagePickerCard
        text={"Pick Image"}
        displaySize={320}
        pickedImage={pickedImage}
        pickedImageFn={setPickedImage}
      />
      {ocrImage && <Image source={ocrImage} />}
    </View>
  );
};

export default Admin;
