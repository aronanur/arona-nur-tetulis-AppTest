import React from 'react';
import PropTypes from 'prop-types'
import {Button} from 'react-native-paper';
import {colors} from '../../constant/colors';
import styles from '../../style/style';

const BlockButtonComponent = (props) => {
    const {buttonText, buttonColor, onPressButton, buttonStyle, isDisabled} = props;
    return(
    <Button 
        disabled={isDisabled}
        uppercase={false} 
        mode="contained" 
        onPress={onPressButton} 
        style={[
            styles.blockButton, 
            { backgroundColor: isDisabled ? colors.lightGrey : buttonColor }, 
            {...buttonStyle}
        ]}
        labelStyle={styles.buttonBlockText}>
            {buttonText}
      </Button>
    )
};

BlockButtonComponent.propTypes = {
    buttonText: PropTypes.string,
    buttonColor: PropTypes.string,
    onPressButton: PropTypes.func,
    buttonStyle: PropTypes.object,
    isDisabled: PropTypes.bool
}
BlockButtonComponent.defaultProps = {
    buttonText: "Button",
    buttonColor: colors.green,
    isDisabled: false,
    buttonStyle: {},
    onPressButton: () => {}
}


export default BlockButtonComponent;