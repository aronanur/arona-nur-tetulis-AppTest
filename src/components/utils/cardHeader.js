import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../style/style'
import {View, Text} from 'react-native'

const CardHeaderComponent = (props) => {
    const {title, cardActionComponent} = props
    return(
    <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <>
         {cardActionComponent}
        </>
    </View>
    )
} 

CardHeaderComponent.propTypes = {
    title: PropTypes.string,
    cardActionComponent: PropTypes.element
}
CardHeaderComponent.defaultProps = {
    title: "No Data"
}

export default CardHeaderComponent