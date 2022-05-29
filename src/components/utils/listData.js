import React from 'react'
import PropTypes from 'prop-types'
import {View, FlatList, RefreshControl, Text} from 'react-native'
import {Avatar, Card, IconButton} from 'react-native-paper'
import styles from '../../style/style'
import NoDataTextComponent from './noDataText'
import CardHeaderComponent from './cardHeader'
import {colors} from '../../constant/colors'
import ListPlaceholderComponent from './listPlaceholder'
import {AvatarDefault} from '../../constant/images'
import Helper from '../../helper/helper'

const CarouselCardComponent = (props) => {
    const {
        title, 
        listData, 
        keyExtractor, 
        noDataText, 
        cardHeaderAction, 
        subtitleSuffix, 
        onPressButton,
        isLoading,
        refreshing,
        onRefreshData
    } = props

    const _pressButton = (data) => {
        onPressButton(data)
    }

    const renderItem = ({ item }) => (
        <View style={styles.verticalListContainer}>
            <Card.Title
                title={`${item?.firstName} ${item?.lastName}`}
                subtitle={item?.age + subtitleSuffix}
                titleStyle={{ color: colors.white }}
                subtitleStyle={{ color: colors.white }}
                left={(props) => <Avatar.Image {...props} source={ Helper.isValidUrl(item?.photo) ? { uri: item?.photo } : AvatarDefault } />}
                right={(props) => <IconButton {...props} icon="more" onPress={() => _pressButton(item[keyExtractor])} color={colors.green} />}
            />
        </View>
    )

    return(
        <View style={styles.listDataCardContainer}>
            <CardHeaderComponent title={title} cardActionComponent={cardHeaderAction} />
            {
                isLoading 
                ? <ListPlaceholderComponent />
                : (
                    <>
                        {
                            listData.length > 0 ?
                                <FlatList
                                    contentContainerStyle={styles.listDataContentStyle}
                                    data={listData}
                                    renderItem={renderItem}
                                    keyExtractor={item => item[keyExtractor]}
                                    showsVerticalScrollIndicator={false}
                                    refreshControl={
                                        <RefreshControl refreshing={refreshing} onRefresh={onRefreshData} />
                                    }
                                />
                        :
                            <NoDataTextComponent
                                noDataText={noDataText}
                            />
                        }
                    </>
                )
            }
        </View>
    );

}

CarouselCardComponent.propTypes = {
    title: PropTypes.string,
    listData: PropTypes.array,
    keyExtractor: PropTypes.string,
    noDataText: PropTypes.string,
    cardHeaderAction: PropTypes.element,
    subtitleSuffix: PropTypes.string,
    onPressButton: PropTypes.func,
    isLoading: PropTypes.bool,
    refreshing: PropTypes.bool,
    onRefreshData: PropTypes.func
}
CarouselCardComponent.defaultProps = {
    title: 'Recent',
    listData: [],
    keyExtractor: "id",
    noDataText: 'No Data',
    subtitleSuffix: ' years',
    isLoading: false,
    refreshing: false,
    onRefreshData: () => {},
    onPressButton: () => {}
}

export default CarouselCardComponent