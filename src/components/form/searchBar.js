import React from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {colors} from '../../constant/colors';

const MyComponent = ({ setKeyword = () => {}}) => {
  const onChangeSearch = query => setKeyword(query);

  return (
    <Searchbar
      style={styles.input}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={setKeyword}
      inputStyle={{ color: colors.white }}
      iconColor={colors.white}
      placeholderTextColor={colors.white}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: colors.grey,
        color: colors.white,
        tintColor: colors.white
    }
})

export default MyComponent;