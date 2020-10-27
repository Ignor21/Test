import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from "react-native";
import Table from "../components/Table";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.updateData();
    this.props.navigation.addListener("blur", (e) => {
      clearInterval(this.interval);
    });
    this.props.navigation.addListener("focus", (e) => {
      this.interval = setInterval(() => {
        this.props.store.updateData();
      }, 5000);
    });
  }

  render() {
    const { oldData, data, error } = this.props.store;
    return (
      <SafeAreaView style={styles.wrapper}>
        {data ? (
          <Table oldData={oldData} data={data} error={error} />
        ) : (
          <View style={styles.center}>
            <ActivityIndicator color="#0000ff" />
            <Text>Загрузка котировок...</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
