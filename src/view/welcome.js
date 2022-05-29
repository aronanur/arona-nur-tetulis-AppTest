import React from 'react'
import {View} from 'react-native'
import {
    CarouselCardComponent, 
    CustomModalComponent, 
    ListDataComponent, 
    SearchBarComponent
} from '../components'
import styles from '../style/style'
import {useDispatch, useSelector } from 'react-redux'
import {getDetailContact, getListContact, onRefreshListContact, setDetailData, setError, setListContact, setRecentContact} from '../store/actions/userAction.js/contactAction'
import DetailContactModal from './modal/detailContact.modal'

const WelcomePage = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const {
            listContact, 
            isLoadingList, 
            recentlyAddedContact, 
            refreshing, 
            backupListContact
        } = useSelector((state) => state.contactReducer)
    const [showContactModal, setShowContactModal] = React.useState(false)
    const [keyword, setKeyword] = React.useState('')

    const onRefreshData = () => dispatch(onRefreshListContact())
    React.useEffect(() => {
        const pageLoad = navigation.addListener('focus', () => {
            dispatch(getListContact())
        })
        return pageLoad
    }, [navigation])
    React.useEffect(() => {
        const pageBlur = navigation.addListener('blur', () => {
            dispatch(setError())
            dispatch(setListContact([]))
            dispatch(setDetailData(null))
        })
        return pageBlur
    }, [navigation])
    React.useMemo(() => {
        const newList = [...backupListContact].filter((data) => {
            const joinValue = Object.values(data).join(' ')
            return joinValue.includes(keyword)
        });
        dispatch(setListContact(newList))
    }, [keyword])
    return(
        <View style={styles.container}>
            <SearchBarComponent setKeyword={setKeyword} />
            <CarouselCardComponent
                title='Recently Added'
                noDataText='No Recent Contact'
                listData={recentlyAddedContact}
            />
            <ListDataComponent 
                title='Contact'
                listData={listContact}
                noDataText="No Contact"
                onPressButton={(data) => {
                    dispatch(getDetailContact(data))
                    setShowContactModal(true)
                }}
                isLoading={isLoadingList}
                refreshing={refreshing}
                onRefreshData={onRefreshData}
            />
            <CustomModalComponent 
                visible={showContactModal}
                onHideModal={() => setShowContactModal(false)}
                modalContent={<DetailContactModal onHideModal={() => {
                    dispatch(setDetailData(null))
                    setShowContactModal(false)
                    dispatch(getListContact())
                }} />}
            />
        </View>
    )
}

export default WelcomePage