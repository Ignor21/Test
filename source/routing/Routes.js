import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../containers/About";
import Stocks from "../containers/Stocks";
const Tab = createBottomTabNavigator();

function icon(isFocused, focused, unfocused) {
  return (
    <Image style={styles.image} source={isFocused ? focused : unfocused} />
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#9637fc",
          inactiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            title: "О приложении",
            tabBarIcon: ({ focused }) => {
              return icon(
                focused,
                require("../assets/aboutActive.png"),
                require("../assets/about.png")
              );
            },
          }}
        />
        <Tab.Screen
          name="Stocks"
          component={Stocks}
          options={{
            headerShown: false,
            title: "Котировки",
            tabBarIcon: ({ focused }) => {
              return icon(
                focused,
                require("../assets/stocksActive.png"),
                require("../assets/stocks.png")
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
