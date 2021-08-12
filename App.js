import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "HomeScreen";
import LibraryScreen from "LibraryScreen";
import SubscriptionScreen from "SubscriptionScreen";
import TrendingScreen from "TrendingScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Trending: TrendingScreen,
    Subscription: SubscriptionScreen,
    Library: LibraryScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "home";
        if (routeName === "Library") {
          iconName = "folder";
        }
        switch (routeName) {
          case "Home":
            iconName = "home";
            break;
          case "Library":
            iconName = "folder";
            break;
          case "Subscription":
            iconName = "message-video";
            break;
          case "Trending":
            iconName = "fire";
            break;
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
