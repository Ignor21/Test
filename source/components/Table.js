import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

class Table extends React.PureComponent {
  cell = (text, last) => {
    return (
      <View style={[styles.cell, last && styles.lastCell]}>
        <Text
          style={[
            styles.text,
            text[1] > text[0] && { color: "green" },
            text[1] < text[0] && { color: "red" },
            text[1] == text[0] && { color: "black" },
          ]}
        >
          {text[1]}
        </Text>
      </View>
    );
  };

  row = (prev, next) => {
    return (
      <View style={styles.row} key={next.id}>
        {this.cell([prev.name, next.name])}
        {this.cell([prev.lastBid, next.lastBid])}
        {this.cell([prev.highestBid, next.highestBid])}
        {this.cell([prev.percentChange, next.percentChange], true)}
      </View>
    );
  };

  renderItem = ({ item, index }) => this.row(this.props.oldData[index], item);

  render() {
    let labels = {
      id: 0,
      name: "Name",
      lastBid: "Last Bid",
      highestBid: "Highest Bid",
      percentChange: "Percent Change",
    };
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrap} />
        {this.row(labels, labels)}
        {this.props.error && (
          <View style={styles.error}>
            <Text>Ошибка</Text>
          </View>
        )}
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={100}
          maxToRenderPerBatch={50}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={styles.wrap} />}
        />
      </View>
    );
  }
}

export default Table;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrap: {
    padding: 5,
  },
  error: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f55553",
    width: "96%",
    borderWidth: 0.5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    width: "24%",
    borderWidth: 0.5,
    borderRightWidth: 0.25,
    paddingVertical: 3,
  },
  lastCell: {
    justifyContent: "center",
    borderRightWidth: 0.25,
  },
  text: {
    textAlign: "center",
    fontSize: 10,
  },
});
