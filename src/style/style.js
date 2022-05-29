import {StyleSheet, Dimensions, PixelRatio} from 'react-native'
import {colors} from '../constant/colors'

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
const actualSize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.deepGrey,
        padding: actualSize(10),
    },
    centerContainer: {
        flex: 1,
        backgroundColor: colors.deepGrey,
        padding: actualSize(10),
        alignItems: 'center'
    },
    listDataCardContainer: {
        marginBottom: actualSize(20)
    }, 
    carouselCardContainer: {
        marginVertical: actualSize(10)
    }, 
    carouselCard: {
        marginHorizontal: actualSize(5)
    },
    carouselCardTitle: {
        fontSize: actualSize(14),
        color: colors.white,
        textAlign: 'center',
        paddingVertical: actualSize(10)
    },
    horizontalListContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        width: "100%",
        alignItems: 'flex-start',
    },
    verticalListContainer: {
        flexWrap: "wrap",
        width: "100%",
        alignItems: 'flex-start',
    },
    noDataWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noDataText: {
        color: colors.white,
        fontSize: actualSize(14),
        fontWeight: "600"
    },
    cardTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: actualSize(16),
        color: colors.white,
        paddingHorizontal: actualSize(10),
        fontWeight: '600',
        paddingVertical: actualSize(10),
    }, 
    formContainer: {
        width: '100%',
        minHeight: actualSize(50),
        alignItems: 'center',
      },
      formGroup: {
        width: '90%',
        paddingVertical: actualSize(5),
      },
      label: {
        fontSize: actualSize(12),
        color: colors.white,
      },
      errorText: {
        fontSize: actualSize(12),
        color: colors.white,
        paddingLeft: actualSize(10)
      },
      textInputContainer: {
        height: actualSize(40),
        fontSize: actualSize(12),
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.deepGrey,
        backgroundColor: colors.grey,
        paddingLeft: actualSize(10),
        marginVertical: actualSize(10),
        color: colors.white,
      },
      avatar: {
          marginVertical: 10
      },
      blockButton: {
          borderRadius: 30,
          height: actualSize(40),
          width: '90%',
          justifyContent: 'center',
          marginVertical: actualSize(10)
      },
      buttonBlockText: {
          fontSize: actualSize(14),
          fontWeight: '600',
          color: 'black'
      },
      modalContainer: {
          backgroundColor: colors.deepGrey,
          padding: actualSize(20),
          width: '90%',
          marginHorizontal: '5%'
      },
      modalButtonContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
      },
      modalEditButton: {
          width: '65%',
          marginRight: 5
      },
      modalDeleteButton: {
          width: '20%'
      },
      listDataContentStyle: {
          paddingBottom: actualSize(120)
      }
})

export default styles