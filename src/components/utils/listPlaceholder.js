import React from 'react'
import PropTypes from 'prop-types'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {colors} from '../../constant/colors'

const ListPlaceholderComponent = (props) => {
    const {placeholderNumber} = props
    const config = {
        containerHeight: 80,
        imageHeight: 60,
        imageWidth: 60,
        borderRadiusImage: 50,
        borderRadiusItem: 4,
        marginLeft: 20,
        marginRight: 100,
        titleWidth: 120,
        itemHeight: 20,
        iconHeight: 40,
        iconWidth: 40
    }
    const renderPlaceholder = () => {
        return Array(placeholderNumber).fill(0).map((_, index) => 
            <SkeletonPlaceholder highlightColor={colors.lightGrey}>
                <SkeletonPlaceholder.Item flexDirection="row" height={config.containerHeight}>
                <SkeletonPlaceholder.Item 
                    width={config.imageWidth} 
                    height={config.imageHeight} 
                    borderRadius={config.borderRadiusImage} 
                />
                <SkeletonPlaceholder.Item 
                    marginLeft={config.marginLeft} 
                    marginRight={config.marginRight}>
                <SkeletonPlaceholder.Item 
                    width={config.titleWidth} 
                    height={config.itemHeight} 
                    borderRadius={config.borderRadiusItem} />
                <SkeletonPlaceholder.Item
                    marginTop={6}
                    width={60}
                    height={20}
                    borderRadius={4}
                />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item 
                    width={config.iconWidth} 
                    height={config.iconHeight} 
                    borderRadius={config.borderRadiusImage} 
                />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder> 
        )
    }
    return(
        <>
            {renderPlaceholder()}
        </>
    )
}

ListPlaceholderComponent.propTypes = {
    placeholderNumber: PropTypes.number
}
ListPlaceholderComponent.defaultProps = {
    placeholderNumber: 3
}

export default ListPlaceholderComponent