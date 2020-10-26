import React from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';

function Table(props) {

  cell = (text, last) => {
    return (
      <View style={[styles.cell, last && styles.lastCell]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  row = (id, name, lastBid, highestBid, percentageChange) => {
    return (
      <View style={styles.row} key={id}>
        {cell(name)}
        {cell(lastBid)}
        {cell(highestBid)}
        {cell(percentageChange, true)}
      </View>
    );
  };

  dataForTable = () => {
    return props.data.map((element) => {
      return (
        row(element.id, element.name, element.lastBid, element.highestBid, element.percentChange)
      );
    });
  };

  return (
    <View style={styles.wrapper}>
      {!!props.data ?
      <ScrollView>
        <View style={styles.wrap}/>
        {row('0', 'Name', 'Last Bid', 'Highest Bid', 'Percent Change')}
        {props.error &&
          <View style={styles.error}>
            <Text>Ошибка</Text>
          </View>
        }
        {dataForTable()}
        <View style={styles.wrap}/>
      </ScrollView>
      :
      <View style={styles.center}>
        <ActivityIndicator color="#0000ff" />
        <Text>Загрузка...</Text>
      </View>
      }
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrap: {
    padding: 5,
  },
  error: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f55553',
    width: '96%',
    borderWidth: 0.5,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '24%',
    borderWidth: 0.5,
    borderRightWidth: 0.25,
    paddingVertical: 3,
  },
  lastCell: {
    justifyContent: 'center',
    borderRightWidth: 0.25,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
  },
});
