import React from 'react';
import PropTypes from 'prop-types'
import {Button} from 'react-native-paper';
import {colors} from '../../constant/colors';

const LinkButtonComponent = (props) => {
    const {buttonText, buttonColor, onPressButton, labelStyle} = props;

    return(
    <Button 
        uppercase={false} 
        mode="text" 
        onPress={onPressButton} 
        labelStyle={[{ fontSize: 14, color: buttonColor }, {...labelStyle}]}>
            {buttonText}
      </Button>
    )
};

LinkButtonComponent.propTypes = {
    buttonText: PropTypes.string,
    buttonColor: PropTypes.string,
    onPressButton: PropTypes.func,
    labelStyle: PropTypes.object,
}
LinkButtonComponent.defaultProps = {
    buttonText: "Button",
    buttonColor: colors.white,
    labelStyle: {},
    onPressButton: () => {}
}


export default LinkButtonComponent;