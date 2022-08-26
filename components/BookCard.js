import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, SIZES, SHADOWS, FONTS } from "../constants";

import { RectButton } from "../components";

import { Title } from "./SubInfo";

const BookCard = ({ data }) => {
  console.log(
    require("../assets/images/books/7-8/An Alien Hand-English_Supplementary_Reader-7.jpg")
  );
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 300 }}>
        <Image
          source={data.asset}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.font,
          }}
        />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              padding: SIZES.font,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderBottomLeftRadius: SIZES.font,
              borderBottomRightRadius: SIZES.font,
            }}
          >
            <View
              style={{
                // marginTop: SIZES.font,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title
                title={data.title}
                subject={data.subject}
                standard={data.class}
                titleSize={SIZES.large}
                subjectSize={SIZES.font}
                standardSize={SIZES.small}
              />

              <RectButton
                style={{ marginTop: SIZES.font }}
                text={"Add to Cart"}
                minWidth={120}
                fontSize={SIZES.font}
                backgroundColor={COLORS.primary}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookCard;
