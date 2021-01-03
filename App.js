import React,{useEffect} from "react";
import Route from "./src/navigation/Route";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const App = () => {

    useEffect(() => {
        registerForPushNotification().then(token=>console.log(token));
    }, [])

    async function registerForPushNotification(){
        const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        if (status != 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            // finalStatus = status;
        }
        if (status !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        return token
    }

        return(
            <Route/>
        );

    
}
export default App;