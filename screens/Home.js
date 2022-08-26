import { View, Text, FlatList, Image } from "react-native";
import React from "react";

import { FocusedStatusBar, BookCard, HomeHeader } from "../components";
import { COLORS, books, assets } from "../constants";

const Home = () => {
  return (
    <View>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      {books.books && (
        <FlatList
          data={books.books}
          renderItem={({ item }) => <BookCard data={item} />}
          keyExtractor={(item) => item.title}
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
  );
};

export default Home;
