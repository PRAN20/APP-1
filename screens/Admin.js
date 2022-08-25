import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { FocusedStatusBar, ImagePickerCard } from "../components";

const Admin = () => {
  const [pickedImage, setPickedImage] = useState(null);

  useEffect(() => {
    if (pickedImage) {
      console.log(pickedImage.uri.split("/").at(-1));
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
    </View>
  );
};

export default Admin;
