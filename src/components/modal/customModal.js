import * as React from 'react';
import PropTypes from 'prop-types';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import styles from '../../style/style';

const CustomModalComponent = (props) => {
  const {visible, onHideModal, modalContent} = props

  return (
    <Provider>
      <Portal>
        <Modal 
            visible={visible} 
            onDismiss={onHideModal} 
            contentContainerStyle={styles.modalContainer}
        >
          {modalContent}
        </Modal>
      </Portal>
    </Provider>
  );
};

CustomModalComponent.propTypes = {
    visible: PropTypes.bool,
    onHideModal: PropTypes.func,
    modalContent: PropTypes.element
}
CustomModalComponent.defaultProps = {
    visible: false,
    onHideModal: () => {}
}

export default CustomModalComponent;