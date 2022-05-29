import reduxString from "../../constant/reduxString"

const initialState = {
    isLoadingList: false,
    isLoadingSubmit: false,
    isLoadingDetail: false,
    recentlyAddedContact: [],
    refreshing: false,
    listContact: [],
    backupListContact: [],
    detailContact: null,
    message: null
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {   
        case reduxString.BACKUP_LIST_CONTACT:
            return{
                ...state,
                backupListContact: action.payload
            }
        case reduxString.SET_LIST_CONTACT:
            return{
                ...state,
                isLoadingList: false,
                refreshing: false,
                listContact: action.payload
            } 
        case reduxString.SET_RECENT_CONTACT:
            return{
                ...state,
                recentlyAddedContact: action.payload
            }
        case reduxString.SET_DETAIL_DATA:
            return{
                ...state,
                detailContact: action.payload,
                isLoadingDetail: false
            }
        case reduxString.SET_MESSAGE:
            return{
                ...state,
                message: action.payload
            }
        case reduxString.REQUEST_DATA:
            return{
                ...state,
                isLoadingList: true,
            }
        case reduxString.REQUEST_DETAIL_DATA:
            return {
                ...state,
                isLoadingDetail: true
            }
        case reduxString.REFRESH_DATA:
            return{
                ...state,
                refreshing: true
            }
        case reduxString.REQUEST_SUBMIT:
            return{
                ...state,
                isLoadingSubmit: action.payload,
            }
        case reduxString.SET_ERROR: {
            return{
                ...state,
                isLoadingList: false,
                isLoadingSubmit: false,
                isLoadingDetail: false,
            }
        }
        default:
            return state;
    }
}

export default contactReducer