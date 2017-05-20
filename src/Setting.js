import React, { Component } from 'react';
import {
  View,
  Picker,
  AsyncStorage
} from 'react-native';

class Setting extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  constructor(props) {
    super(props);
    this.state = {
      sceneTransition: '',
      scene: '',
    };
  }

  setSelectSceneTransition(scene) {
    try {
      this.setSceneTransition(scene);
      this.setState({
        scene
      });
    } catch (error) {
      console.log(error);
    }
  }

  // set data to AsyncStorage
  async setSceneTransition(scene) {
    try {
      await AsyncStorage.setItem('SCENE_SELECTED', scene);
      this.setState({
        sceneTransition: scene
      });
    } catch (error) {
       console.log(error);
    }
  }

  // get data to AsyncStorage
  async getSceneTransition() {
    try {
      const sceneTransitionValue = await AsyncStorage.getItem('SCENE_SELECTED');
      // Store value to State
      this.setState({
        sceneTransition: sceneTransitionValue
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getSceneTransition();
  }

  render() {
    return (
      <View style={{ marginTop: 50, padding: 10 }}>
        <Picker
          selectedValue={this.state.sceneTransition}
          onValueChange={(scene) => this.setSelectSceneTransition(scene)}
        >
          <Picker.Item label="FloatFromRight" value="FloatFromRight" />
          <Picker.Item label="FloatFromLeft" value="FloatFromLeft" />
          <Picker.Item label="FloatFromBottom" value="FloatFromBottom" />
          <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid" />
          <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft" />
          <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump" />
          <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight" />
        </Picker>
      </View>
    );
  }
}

export default Setting;
