import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteScreen from "../screen/Favorite";
import PokedexScreen from "../screen/Pokedex";
import AccountScreen from "../screen/Account";

const Tab = createBottomTabNavigator();

const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
