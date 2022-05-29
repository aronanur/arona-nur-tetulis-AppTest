import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import {contactReducer} from './reducers'
import errorHandler from './middleware/errorHandler'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['contactReducer']
}

const reducers = combineReducers({
    contactReducer
})

const persistReducers = persistReducer(persistConfig, reducers)
const store = createStore(persistReducers, applyMiddleware(thunk, errorHandler))
const persist = persistStore(store)

export{
    persist,
    store
}