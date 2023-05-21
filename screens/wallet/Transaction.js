import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { WalletContext } from "../../App";
import { USDTOETH } from "@env";
export default function Transaction() {
  const [balance, setBalance] = useState("0");
  const [valid, isValid] = useState(false);
  const [success, isSuccess] = useState(false);
  const [amount, setAmount] = useState("");
  const [toAddr, setToAddr] = useState("0x0");
  const { wallet, setWallet } = useContext(WalletContext);
  useEffect(() => {
    async function retrieveBalance() {
      if (wallet.address) {
        const b = await wallet.getBalance();
        setBalance(ethers.utils.formatEther(b));
      }
    }
    retrieveBalance();
  });
  useEffect(() => {
    const total = parseFloat(USDTOETH) * parseFloat(amount);
    isSuccess(false);
    if (
      parseFloat(total) <= parseFloat(balance) &&
      total !== NaN &&
      parseFloat(amount) >= 1
    ) {
      isValid(true);
    } else {
      isValid(false);
    }
  });
  async function submitTransaction() {
    const value = parseFloat(USDTOETH) * parseFloat(amount);
    const toWei = ethers.utils.parseUnits(value.toString(), "ether");
    const nonce = await wallet.getTransactionCount();
    const tx = {
      nonce: nonce,
      to: toAddr,
      value: toWei,
      chainId: 11155111,
    };
    const sentResponse = await wallet.sendTransaction(tx);
    await sentResponse.wait(1);
    console.log(sentResponse);
    isSuccess(true);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.transactionsContainer}>
          <Text>Your Balance: {balance}ETH</Text>
          <Text style={styles.transactionHeaderText}>Send a Transaction</Text>
          <Text style={styles.text}>Who are you sending money to?</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={(addr) => setToAddr(addr)}
          />
          <Text style={styles.text}>How much in dollars?</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount (USD)"
            onChangeText={(amt) => setAmount(amt)}
          />
          <Text>
            Your transaction cost:
            {parseFloat(USDTOETH) * amount === NaN
              ? 0
              : parseFloat(USDTOETH) * amount}
            ETH
          </Text>
          <TouchableHighlight
            onPress={() => submitTransaction()}
            disabled={valid === false}
          >
            <View style={styles.submit}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableHighlight>
          <Text>
            {success === false ? "" : "Transaction went through successfully!"}
          </Text>
        </View>
      </View>
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
    height: "50%",
    width: "100%",
    backgroundColor: "gray",
    alignItems: "center",
    //justifyContent: "flex-end",
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    color: "white",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "transparent",
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: "20%",
  },
  transactionHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: { fontSize: 15 },
  transactionsContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    //borderRadius: 10,
    width: "80%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    //backgroundColor: "rgb(240, 230, 230)",
    margin: 20,
  },
  submit: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: "25%",
    paddingVertical: "5%",
    backgroundColor: "rgb(20, 140, 255)",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
