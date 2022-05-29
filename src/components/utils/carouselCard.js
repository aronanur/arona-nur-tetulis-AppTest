import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, FlatList} from 'react-native'
import {Avatar} from 'react-native-paper'
import styles from '../../style/style'
import NoDataTextComponent from './noDataText'
import CardHeaderComponent from './cardHeader'
import Helper from '../../helper/helper'
import { AvatarDefault } from '../../constant/images'

const CarouselCardComponent = (props) => {
    const {title, listData, keyExtractor, noDataText} = props

    const renderItem = ({ item }) => (
        <View style={styles.carouselCard}>
            <Avatar.Image style={styles.carouselCard} size={70} source={Helper.isValidUrl(item?.photo) ? { uri: item?.photo } : AvatarDefault} />
            <Text style={styles.carouselCardTitle}>{item?.name}</Text>
        </View>
    )

    return(
        <View style={styles.carouselCardContainer}>
            <CardHeaderComponent title={title} />
            {
                listData.length > 0 ?
                <View style={styles.horizontalListContainer}>
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item[keyExtractor]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            :
                <NoDataTextComponent
                    noDataText={noDataText}
                />
            }
        </View>
    );

}

CarouselCardComponent.propTypes = {
    title: PropTypes.string,
    listData: PropTypes.array,
    keyExtractor: PropTypes.string,
    noDataText: PropTypes.string
}
CarouselCardComponent.defaultProps = {
    title: 'Recent',
    listData: [],
    keyExtractor: "id",
    noDataText: 'No Data'
}

export default CarouselCardComponent