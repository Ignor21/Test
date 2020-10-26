import React from 'react';
import { View, StyleSheet } from 'react-native';
import Table from '../components/Table';
import { inject, observer } from "mobx-react";

@inject('store')
@observer
export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount(){
    this.props.store.updateData();
    this.props.navigation.addListener('blur', e => {
      clearInterval(this.interval);
    });
    this.props.navigation.addListener('focus', e => {
      this.interval = setInterval(() => {
        this.props.store.updateData();
      }, 5000);
    });
  };

  render() {
    const { data, error } = this.props.store;
    return (
      <View style={styles.wrapper}>
        <Table data={data} error={error} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
});