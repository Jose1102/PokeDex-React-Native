import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screen/Pokedex";
import Pokemon from "../screen/Pokemon";

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: " Pokedex " }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
