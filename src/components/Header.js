import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 1,
    margin: 10
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header;
