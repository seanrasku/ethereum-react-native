import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { RPC_URL } from "@env";
import { WalletContext } from "../../App";
export default function Home({ navigation }) {
  const [connected, setConnected] = useState(false);
  const { wallet, setWallet } = useContext(WalletContext);
  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    const connectedWallet = wallet.connect(provider);
    if (connectedWallet.provider !== null) {
      setWallet(connectedWallet);
      setConnected(true);
    }
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>3 line popup</Text>
        <Text style={styles.title}>Title/Search</Text>
        <Text style={styles.title}>QR Code</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>{connected === true ? "Connected" : "Not Connected"}</Text>
          <Text>Address: {wallet.address}</Text>
        </View>
        <View style={styles.quicklinksContainer}>
          <Text style={styles.text}>Quick Links</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate("Transaction")}
          >
            <View style={styles.quicklink}>
              <Text style={styles.quicklinkText}>TX</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "space-between",
  },
  header: {
    height: "13%",
    backgroundColor: "rgb(0, 50, 100)",
    width: "100%",
    alignItems: "center",
    //justifyContent: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flex: 6,
  },
  title: {
    fontSize: 25,
    color: "white",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
  },
  quicklinksContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    margin: 20,
  },
  transactionsContainer: { flex: 5 },
  quicklink: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "rgb(100, 210, 200)",
    marginBottom: "10%",
  },
  quicklinkText: {
    color: "green",
  },
});
