import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View>
          <Text>Котировки с биржи Poloniex</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
