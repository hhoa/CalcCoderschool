import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import Header from './components/Header';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: '',
      selectedIndex: 0
    };
  }

  static navigationOptions = {
    title: 'Calculator',
  };

  onChangeCalculateTotal(billAmount) {
    this.setState({ billAmount });
  }

  handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }

  calcTipAmount() {
    if (this.state.billAmount.length === 0) {
      return (0);
    }
    return (
      parseFloat(this.state.billAmount) * this.calcPercent()
    );
  }

  calcPercent() {
    switch (this.state.selectedIndex) {
      case 0:
        return 0.1;
      case 1:
        return 0.15;
      case 2:
        return 0.5;
      default:
        return 0;
    }
  }

  calcResult() {
    if (this.state.billAmount.length !== 0) {
      return (parseFloat(this.state.billAmount) + this.calcTipAmount());
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <View style={styles.containerSection}>
          <Text>Bill amount</Text>
          <TextInput
             onChangeText={(billAmount) => this.onChangeCalculateTotal(billAmount)}
             keyboardType='numeric'
             maxLength={10}
             value={this.state.billAmount}
             style={styles.inputBillAmountStyle}
          />
        </View>
        <View style={styles.containerSection}>
          <Text>Tip amount: </Text>
          <Text>{this.calcTipAmount()}</Text>
        </View>
        <View>
          <SegmentedControlTab
            values={['10%', '15%', '50%']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View>
        <View>
          <Text>Bill amount: {this.state.billAmount}</Text>
          <Text>Tip amount: {this.calcTipAmount()}</Text>
          <Text>Percent: {this.calcPercent()}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Result: {this.calcResult()}</Text>
        </View>

        <Button
          title="Go to setting page"
          onPress={() =>
            navigate('Setting', { title: 'Scene Transition' })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSection: {
    flexDirection: 'row',
  },
  inputBillAmountStyle: {
    borderWidth: 1,
    width: 200
  }
});

export default Calculator;
