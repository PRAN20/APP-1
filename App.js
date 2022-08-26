import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootSiblingParent } from "react-native-root-siblings";
import { createStackNavigator } from "@react-navigation/stack";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import Admin from "./screens/Admin";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Reader from "./screens/Reader";

/***
 * Navigation Setup
 */
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStackScreen = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Home"
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

/**
 * Theme Stuff
 */
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: "transparent",
  },
};

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Tab.Screen
            name="Admin"
            component={Admin}
            options={{
              tabBarLabel: "Admin",
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="cog" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Read"
            component={Reader}
            options={{
              tabBarLabel: "Read",
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="book-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
