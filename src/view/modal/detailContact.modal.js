import React from 'react'
import {ScrollView, View} from 'react-native'
import {Avatar} from 'react-native-paper'
import {BlockButtonComponent, FormFactoryComponent, FormPlaceholderComponent} from '../../components'
import {colors} from '../../constant/colors'
import AddContactConfig from '../../constant/config/addContact.config'
import {AvatarDefault} from '../../constant/images'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../style/style'
import { useDispatch, useSelector } from 'react-redux'
import { onDeleteContact, onUpdateContact } from '../../store/actions/userAction.js/contactAction'
import Helper from '../../helper/helper'

const DetailContactModal = (props) => {
    const {onHideModal} = props
    const dispatch = useDispatch()
    const {isLoadingDetail, detailContact, isLoadingSubmit} = useSelector((state) => state.contactReducer)
    const [contactId, setContactId] = React.useState(null)
    const [form, setForm] = React.useState(AddContactConfig.form)
    const [formList, setFormList] = React.useState(AddContactConfig.formList)
    const [formError, setFormError] = React.useState(AddContactConfig.formValidation)
    const [newAvatar, setNewAvatar] = React.useState('')
    const [isComplete, setIsComplete] = React.useState(false)

    const inputHandler = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    }
    const onSaveContact = () => {
        onHideModal()
        dispatch(onUpdateContact(contactId, form))
    }
    const deleteContact = () => {
        onHideModal()
        dispatch(onDeleteContact(contactId))
    }
    const setValidationError = (name, error) => {
        setFormError({
            ...formError,
            [name]: error
        })
    }
    React.useMemo(() => {
        const {photo} = form
        setNewAvatar(photo)
        const isComplete = Object.keys(form).every((key) => String(form[key]).trim().length > 0)
        setIsComplete(isComplete)
    }, [form])
    React.useMemo(() => {
        if(detailContact){
            const {id, firstName, lastName, age, photo} = detailContact
            setForm({ firstName, lastName, age: String(age), photo })
            setContactId(id)
        }
    }, [detailContact])

    return(
        <ScrollView 
            contentContainerStyle={{ alignItems: 'center' }}
            showsVerticalScrollIndicator={false}>
            {
                isLoadingDetail ?
                <FormPlaceholderComponent />
                :
                <>
                    <Avatar.Image 
                        style={styles.avatar} 
                        size={90} 
                        source={Helper.isValidUrl(newAvatar) ? { uri: newAvatar } : AvatarDefault}  />
                    <FormFactoryComponent 
                        editable={true}
                        formList={formList}
                        formError={formError}
                        isValidate={true}
                        inputHandler={inputHandler}
                        setFormError={setValidationError}
                        value={form}
                    />
                    <View style={styles.modalButtonContainer}>
                        <BlockButtonComponent
                            isDisabled={!isComplete || isLoadingSubmit}
                            buttonText={isLoadingSubmit ? 'Loading...' : 'Edit Contact'}
                            onPressButton={onSaveContact}
                            buttonStyle={styles.modalEditButton}
                        />
                        <BlockButtonComponent
                            buttonColor={colors.lightRed}
                            buttonText={<MaterialIcon name='delete' size={24} color={colors.white} />}
                            onPressButton={deleteContact}
                            buttonStyle={styles.modalDeleteButton}
                        />
                    </View>
                </>
            }
        </ScrollView>
    )
}

export default DetailContactModal