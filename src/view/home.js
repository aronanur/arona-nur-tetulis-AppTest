import React from 'react'
import {HeaderComponent} from '../components'
import {colors} from '../constant/colors'
import {langId} from '../wording'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {WelcomePage} from './index'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AddContactPage from './addContact'
import useToastHooks from '../customHooks/useToastHooks'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../store/actions/userAction.js/contactAction'

const Tab = createBottomTabNavigator()

const TabRoute = () => {
    return(
     <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
              backgroundColor: colors.grey
          },
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Dashboard') iconName = 'dashboard';
            if (route.name === 'Add Contact') iconName = 'add-box';
            return <MaterialIcon name={iconName} size={(size + 4)} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.green,
          inactiveTintColor: colors.lightGrey,
        }}>
        <Tab.Screen name="Dashboard" component={WelcomePage} />
        <Tab.Screen name="Add Contact" component={AddContactPage} />
      </Tab.Navigator> 
    )
}

const HomePage = () => {
  const dispatch = useDispatch()
  const openToast = useToastHooks()
  const {message} = useSelector((state) => state.contactReducer) 
  
  React.useMemo(() => {
    if(message){
      const {title, type, text} = message
      openToast({
        title,
        type,
        message: text,
        duration: 4500,
        showToast: true,
        position: 'top',
      });
      setTimeout(() => {
        dispatch(setMessage(null))
      }, 4500);
    }
  }, [message])

    return(
        <>
            <HeaderComponent title={langId.header} backgroundColor={colors.deepGrey} />
            <TabRoute />
        </>
    )
}

export default HomePage