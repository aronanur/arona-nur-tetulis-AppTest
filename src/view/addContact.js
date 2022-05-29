import React from 'react'
import {
    KeyboardAvoidingView, 
    Platform, 
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native'
import {Avatar} from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux'
import {BlockButtonComponent, FormFactoryComponent} from '../components'
import AddContactConfig from '../constant/config/addContact.config'
import {AvatarDefault} from '../constant/images'
import Helper from '../helper/helper'
import {onCreateContact, setError} from '../store/actions/userAction.js/contactAction'
import styles from '../style/style'

const AddContactPage = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const {isLoadingSubmit, recentlyAddedContact} = useSelector((state) => state.contactReducer)
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
        dispatch(onCreateContact(form))
        navigation.navigate('Dashboard')
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
        const isComplete = Object.keys(form).every((key) => form[key].trim().length > 0)
        setIsComplete(isComplete)
    }, [form])
    React.useEffect(() => {
        const pageBlur = navigation.addListener('blur', () => {
            dispatch(setError())
            setForm(AddContactConfig.form)
            setFormError(AddContactConfig.formValidation)
            setNewAvatar('')
            setIsComplete(false)
        })
        return pageBlur
    }, [navigation])

    return(
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.centerContainer}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        <BlockButtonComponent
                            isDisabled={!isComplete || isLoadingSubmit}
                            buttonText={isLoadingSubmit ? 'Loading ...' : 'Save Contact'}
                            onPressButton={onSaveContact}
                        />
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default AddContactPage