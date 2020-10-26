import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from "mobx-react";

@inject('store')
@observer
export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text>Котировки с биржи Poloniex</Text>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});