import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../style/style'
import {View, Text} from 'react-native'

const NoDataTextComponent = (props) => {
    const {noDataText} = props
    return(
    <View style={styles.noDataWrapper}>
        <Text style={styles.noDataText}>{noDataText}</Text>
    </View>
    )
} 

NoDataTextComponent.propTypes = {
    noDataText: PropTypes.string
}
NoDataTextComponent.defaultProps = {
    noDataText: "No Data"
}

export default NoDataTextComponent