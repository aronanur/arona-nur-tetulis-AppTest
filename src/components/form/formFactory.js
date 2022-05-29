import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../style/style';
import TextInputComponent from './textInput';
import {View, Text} from 'react-native';
import {colors} from '../../constant/colors';

const FormFactoryComponent = (props) => {
  const {
    formList,
    editable,
    value,
    inputHandler,
    isValidate,
    formError,
    setFormError,
  } = props;
  const formType = (form) => {
    if (editable) {
      switch (form.type) {
        case 'text':
          return (
            <TextInputComponent
              name={form.name}
              title={form.title}
              inputHandler={inputHandler}
              value={value[form.name]}
              editable={form?.editable}
              placeholder={form?.title}
              validation={form?.validation}
              validationType={form?.validationType}
              setValidationError={setFormError}
              isError={formError[form.name]}
            />
          );
        default:
          return (
            <TextInputComponent
              name={form.name}
              inputHandler={inputHandler}
              value={value[form.name]}
              editable={form?.editable}
              placeholder={form.title}
            />
          );
      }
    } else {
      switch (form.type) {
        default:
          return (
            <TextInputComponent
              name={form.name}
              inputHandler={inputHandler}
              value={value[form.name]}
              editable={editable}
              placeholder={form.title}
            />
          );
      }
    }
  };

  const generateForm = () => (
    <>
      {formList.map((form, index) => (
        <View key={index} style={styles.formGroup}>
          <Text fontType="bold" style={styles.label}>
            {form.title}
            {form.isRequired && <Text style={{color: colors.lightRed}}> *</Text>}
          </Text>
          {formType(form)}
          {isValidate && formError[form.name] && (
            <Text style={[styles.errorText, {color: colors.lightRed}]}>
              {formError[form.name] || ' '}
            </Text>
          )}
        </View>
      ))}
    </>
  );

  return <View style={styles.formContainer}>{generateForm()}</View>;
};

FormFactoryComponent.propTypes = {
  formList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      validation: PropTypes.bool,
      isRequired: PropTypes.bool.isRequired,
      type: PropTypes.oneOf([
        'text',
      ]),
      fileType: PropTypes.array,
      fieldForFilename: PropTypes.string,
      editable: PropTypes.bool,
    }),
  ),
  editable: PropTypes.bool,
  value: PropTypes.object,
  inputHandler: PropTypes.func,
  isValidate: PropTypes.bool,
  imagePreview: PropTypes.string,
  imageBgColor: PropTypes.string,
  formError: PropTypes.object,
  setFormError: PropTypes.func,
};
FormFactoryComponent.defaultProps = {
  formList: [],
  editable: false,
  value: '',
  inputHandler: () => {},
  isValidate: false,
  setFormError: () => {},
};

export default FormFactoryComponent;