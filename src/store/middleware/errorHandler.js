import { setMessage } from "../actions/userAction.js/contactAction";

const errorHandler = (store) => (next) => (action) => {
    try {
        if(action.payload?.error){
            const {error} = action.payload
            switch (error) {
                case 'ERR_NETWORK':
                    store.dispatch(setMessage({
                        title: 'Error Network',
                        type: 'error',
                        text: 'Oops! looks like your device is not connected to the internet'
                    }))
                    break;
                case 'ERR_BAD_REQUEST':
                    store.dispatch(setMessage({
                        title: 'Error',
                        type: 'error',
                        text: 'Error with code 400'
                    }))
                    break;
                default:
                    store.dispatch(setMessage({
                        title: 'Error Network',
                        type: 'error',
                        text: 'General Error'
                    }))
                    break;
            }
        }
        next(action)
    } catch (error) {
        next({ type: '' })
    }
}

export default errorHandler