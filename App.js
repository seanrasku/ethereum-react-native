import { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./screens/Welcome";
import Create from "./screens/Create";
import Wallet from "./screens/Wallet";
import Home from "./screens/wallet/Home";
import Transaction from "./screens/wallet/Transaction";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./screens/wallet/Profile";
const HomeTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const WalletContext = createContext();

function HomeTabScreen() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Home" component={Home} />
      <HomeTab.Screen name="Profile" component={Profile} />
    </HomeTab.Navigator>
  );
}

export default function App() {
  const [wallet, setWallet] = useState({});
  const w = { wallet, setWallet };
  return (
    <WalletContext.Provider value={w}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen
            name="HomePage"
            options={{ headerShown: false }}
            component={HomeTabScreen}
          />
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletContext.Provider>
  );
}
