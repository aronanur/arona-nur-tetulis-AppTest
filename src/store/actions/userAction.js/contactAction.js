import httpRequest from "../../../constant/httpRequest";
import reduxString from "../../../constant/reduxString";
import servicePath from "../../../constant/servicePath";

const backupListAction = (data) => ({
    type: reduxString.BACKUP_LIST_CONTACT,
    payload: data
})

const setListContact = (data) => ({
    type: reduxString.SET_LIST_CONTACT,
    payload: data
})

const setRecentContact = (data) => ({
    type: reduxString.SET_RECENT_CONTACT,
    payload: data
})

const setDetailData = (data) => ({
    type: reduxString.SET_DETAIL_DATA,
    payload: data
})

const setMessage = (data) => ({
    type: reduxString.SET_MESSAGE,
    payload: data
})

const requestData = () => ({
    type: reduxString.REQUEST_DATA,
})

const requestDetailData = () => ({
    type: reduxString.REQUEST_DETAIL_DATA,
})

const requestSubmit = (data) => ({
    type: reduxString.REQUEST_SUBMIT,
    payload: data
})

const refreshData = () => ({
    type: reduxString.REFRESH_DATA
})

const setError = (error) => ({
    type: reduxString.SET_ERROR,
    payload: error
})

const onRefreshListContact = () => {
    return (dispatch) => {
        dispatch(refreshData())
        dispatch(getListContact())
    }
}

const onCreateContact = ({ firstName, lastName, age, photo }) => {
    return async (dispatch, getState) => {
        const {recentlyAddedContact} = await getState().contactReducer
        dispatch(requestSubmit(true))
        const dataRequest = {...servicePath.saveContact}
        dataRequest.data = {
            firstName, 
            lastName,
            age,
            photo
        }
        try {
            const { data } = await httpRequest(dataRequest)
            if(data){
                const recentData = [...recentlyAddedContact]
                recentData.unshift({ name: firstName, photo: String(photo) })
                recentData.slice(0, 10)
                dispatch(setRecentContact(recentData))
                dispatch(setMessage({
                    title: 'Add Contact',
                    type: 'success',
                    text: 'Contact Added'
                }))
                dispatch(requestSubmit(false))
            }
        } catch (error) {
            dispatch(setError(error))
        }
    }
}

const onUpdateContact = (id, { firstName, lastName, age, photo }) => {
    return async (dispatch) => {
        dispatch(requestSubmit())
        const dataRequest = {...servicePath.editContact}
        dataRequest.data = {
            firstName, 
            lastName,
            age,
            photo
        }
        dataRequest.url = `${dataRequest.url}/${id}` 
        try {
            const {data} = await httpRequest(dataRequest)
            if(data){
                dispatch(setMessage({
                    title: 'Edit Contact',
                    type: 'success',
                    text: 'Contact Edited'
                }))
                requestSubmit(false)
            }
        } catch (error) {
            dispatch(setError({ error: error?.code }))
        }
    }
}

const onDeleteContact = (id) => {
    return async (dispatch) => {
        const dataRequest = {...servicePath.deleteContact}
        dataRequest.url = `${dataRequest.url}/${id}` 
        try {
            const { data } = await httpRequest(dataRequest)
            if(data){
                dispatch(setMessage({
                    title: 'Delete Contact',
                    type: 'success',
                    text: 'Contact Deleted'
                }))
            }
        } catch (error) {
            dispatch(setError({ error: error?.code }))
        }
    }
}

const getListContact = () => {
    return async (dispatch) => {
        dispatch(requestData())
        try {
            const { data } = await httpRequest(servicePath.listContact)
            if(data){
                dispatch(setListContact(data?.data))
                dispatch(backupListAction(data?.data))
            }
        } catch (error) {
            dispatch(setError({ error: error?.code }))
        }
    }
}

const getDetailContact = (id) => {
    return async (dispatch) => {
        dispatch(requestDetailData())
        const dataRequest = {...servicePath.detailContact}
        dataRequest.url = `${dataRequest.url}/${id}`
        try {
            const { data } = await httpRequest(dataRequest)
            if(data){
                dispatch(setDetailData(data?.data))
            }
        } catch (error) {
            dispatch(setError({ error: error?.code }))  
        }
    }
}

export {
    backupListAction,
    setListContact,
    setRecentContact,
    setDetailData,
    setMessage,
    requestData,
    requestDetailData,
    requestSubmit,
    refreshData,
    setError,
    getListContact,
    onRefreshListContact,
    onCreateContact,
    onUpdateContact,
    onDeleteContact,
    getDetailContact
}