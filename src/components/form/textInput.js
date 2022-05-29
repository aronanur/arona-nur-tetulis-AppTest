import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../style/style';
import {TextInput} from 'react-native';
import {colors} from '../../constant/colors';
import Helper from '../../helper/helper';

const TextInputComponent = (props) => {
  const {
    inputHandler,
    editable,
    value,
    placeholder,
    name,
    title,
    validation,
    setValidationError,
    isError
  } = props;
  const onChangeHandler = (text) => {
    inputHandler(name, text);
    if(validation){
        setValidationError(name, Helper.requiredvalidation(title, text));
    }
  };
  return (
    <TextInput
      onChangeText={onChangeHandler}
      style={[
        styles.textInputContainer,
        {backgroundColor: editable ? colors.grey : colors.lightGrey},
        isError && { borderColor: colors.lightRed }
      ]}
      value={value}
      editable={editable || false}
      placeholder={placeholder}
      placeholderTextColor={colors.white}
    />
  );
};

TextInputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setIsTouch: PropTypes.func,
  inputHandler: PropTypes.func,
  value: PropTypes.string,
  editable: PropTypes.bool,
  placeholder: PropTypes.string,
  validation: PropTypes.bool,
  validationType: PropTypes.string,
  setValidationError: PropTypes.func,
  isError: PropTypes.bool
};
TextInputComponent.defaultProps = {
  name: '',
  title: '',
  setIsTouch: () => {},
  inputHandler: () => {},
  value: '',
  editable: false,
  placeholder: '',
  validation: false,
  validationType: 'required',
  isError: false,
  setValidationError: () => {},
};

export default TextInputComponent;