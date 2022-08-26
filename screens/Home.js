import { View, Text, FlatList, Image } from "react-native";
import React from "react";

import { FocusedStatusBar, BookCard, HomeHeader } from "../components";
import { COLORS, books, assets } from "../constants";

const Home = () => {
  console.log(books);
  return (
    <>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        {books.books && (
          <FlatList
            data={books.books}
            renderItem={({ item }) => <BookCard data={item} />}
            keyExtractor={(item) => item.title + item.class + item.subject}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader
              // onSearch={handleSearch}
              // userInfo={userInfo}
              // loginFn={loginFn}
              />
            }
          />
        )}
      </View>
    </>
  );
};

export default Home;
