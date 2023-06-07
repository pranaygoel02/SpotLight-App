import { Link } from "expo-router";
import {  StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import logoutLogic from "../../Logic/UserLogic.js/Logout.logic";

export default function Page() {
  const {logout} = logoutLogic()
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={{
          pathname: "/pranay",
          params: {
            name: "John Doe",
          }
        }}>Pranay</Link>
        <TouchableOpacity onPress={() => logout()}>
          <Text>Logout User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
