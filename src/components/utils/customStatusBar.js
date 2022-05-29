import React from 'react';
  import {
    View,
    StatusBar,
    Platform,
    SafeAreaView,
    StyleSheet
  } from 'react-native';

  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
  const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
  
  const CustomStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: STATUSBAR_HEIGHT,
    },
    appBar: {
      backgroundColor:'#79B45D',
      height: APPBAR_HEIGHT,
    },
    content: {
      flex: 1,
      backgroundColor: '#33373B',
    },
  });

  export default CustomStatusBar