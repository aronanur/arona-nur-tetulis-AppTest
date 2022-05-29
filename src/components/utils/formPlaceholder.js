import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {colors} from '../../constant/colors'

const ListPlaceholderComponent = () => {
    return(
        <>
            <SkeletonPlaceholder highlightColor={colors.grey}>
                <SkeletonPlaceholder.Item height={100} alignItems="center">
                    <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>    
            <SkeletonPlaceholder highlightColor={colors.grey}>
            </SkeletonPlaceholder>   
            <SkeletonPlaceholder highlightColor={colors.grey}>
                <SkeletonPlaceholder.Item marginVertical={10}>
                    <SkeletonPlaceholder.Item width={100} height={20} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width={180}
                        height={20}
                        borderRadius={4}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>   
            <SkeletonPlaceholder highlightColor={colors.grey}>
                <SkeletonPlaceholder.Item marginVertical={10}>
                    <SkeletonPlaceholder.Item width={100} height={20} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width={180}
                        height={20}
                        borderRadius={4}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>   
            <SkeletonPlaceholder highlightColor={colors.grey}>
                <SkeletonPlaceholder.Item marginVertical={10}>
                    <SkeletonPlaceholder.Item width={100} height={20} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width={180}
                        height={20}
                        borderRadius={4}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>   
            <SkeletonPlaceholder highlightColor={colors.grey}>
                <SkeletonPlaceholder.Item marginVertical={10}>
                    <SkeletonPlaceholder.Item width={100} height={20} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width={180}
                        height={20}
                        borderRadius={4}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>   
        </>
    )
}

export default ListPlaceholderComponent