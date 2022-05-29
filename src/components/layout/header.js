import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import {colors} from '../../constant/colors'

const HeaderComponent = (props) => {
    const {title, backgroundColor} = props
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

HeaderComponent.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string
}
HeaderComponent.defaultProps = {
    title: 'My Header',
    backgroundColor: colors.mainBlue
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20 
    },
    title: {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold'
    }
})

export default HeaderComponent