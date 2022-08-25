import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { FocusedStatusBar, ImagePickerCard } from "../components";

const Admin = () => {
  const [pickedImage, setPickedImage] = useState(null);
  const [ocrImage, setOcrImage] = useState(null);

  useEffect(() => {
    if (pickedImage) {
      const k = pickedImage.uri.split("/");
      k[k.length - 1] = "!!!!";
      console.log(k);
      // switch (k) {
      //   case "01.jpeg":
      //     setOcrImage("01_ocr.jpeg");
      //     break;
      //   case "02.jpeg":
      //     setOcrImage("02_ocr.jpeg");
      //     break;
      //   case "03.jpeg":
      //     setOcrImage("03_ocr.jpeg");
      //     break;
      //   case "04.jpeg":
      //     setOcrImage("04_ocr.jpeg");
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
