import React from 'react'
import Route from './src/route'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {CustomStatusBarComponent} from './src/components'
import {store, persist} from './src/store'
import { colors } from './src/constant/colors'
import { ToastContextProvider } from './src/context/toastContext'

const App = () => {
  return (
    <SafeAreaProvider>
        <Provider store={store}>
          <CustomStatusBarComponent backgroundColor={colors.deepGrey} barStyle="light-content" />
          <ToastContextProvider>
            <PersistGate persistor={persist}>
                <Route />
            </PersistGate>
          </ToastContextProvider>
        </Provider>
    </SafeAreaProvider>
  )
}

export default App;
