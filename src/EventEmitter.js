import { NativeModules, NativeEventEmitter } from 'react-native';
const { AppLovinMAX } = NativeModules;
// Note that this is a singleton in ES6 module
const emitter = new NativeEventEmitter(AppLovinMAX);
const subscriptions = {};
export const addEventListener = (event, handler) => {
    const subscription = emitter.addListener(event, handler);
    const currentSubscription = subscriptions[event];
    if (currentSubscription) {
        currentSubscription.remove();
    }
    subscriptions[event] = subscription;
};
export const removeEventListener = (event) => {
    const currentSubscription = subscriptions[event];
    if (currentSubscription) {
        currentSubscription.remove();
        delete subscriptions[event];
    }
};
