import { NativeModules } from 'react-native';
import { addEventListener, removeEventListener } from './EventEmitter';
const { AppLovinMAX } = NativeModules;
const { ON_REWARDED_AD_LOADED_EVENT, ON_REWARDED_AD_LOAD_FAILED_EVENT, ON_REWARDED_AD_CLICKED_EVENT, ON_REWARDED_AD_DISPLAYED_EVENT, ON_REWARDED_AD_FAILED_TO_DISPLAY_EVENT, ON_REWARDED_AD_HIDDEN_EVENT, ON_REWARDED_AD_RECEIVED_REWARD_EVENT, ON_REWARDED_AD_REVENUE_PAID, } = AppLovinMAX.getConstants();
const isAdReady = (adUnitId) => {
    return AppLovinMAX.isRewardedAdReady(adUnitId);
};
const loadAd = (adUnitId) => {
    AppLovinMAX.loadRewardedAd(adUnitId);
};
const showAd = (adUnitId, placement, customData) => {
    AppLovinMAX.showRewardedAd(adUnitId, placement ?? null, customData ?? null);
};
const setExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setRewardedAdExtraParameter(adUnitId, key, value);
};
const setLocalExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setRewardedAdLocalExtraParameter(adUnitId, { [key]: value });
};
const addAdLoadedEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_LOADED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdLoadedEventListener = () => {
    removeEventListener(ON_REWARDED_AD_LOADED_EVENT);
};
const addAdLoadFailedEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_LOAD_FAILED_EVENT, (errorInfo) => listener(errorInfo));
};
const removeAdLoadFailedEventListener = () => {
    removeEventListener(ON_REWARDED_AD_LOAD_FAILED_EVENT);
};
const addAdClickedEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_CLICKED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdClickedEventListener = () => {
    removeEventListener(ON_REWARDED_AD_CLICKED_EVENT);
};
const addAdDisplayedEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_DISPLAYED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdDisplayedEventListener = () => {
    removeEventListener(ON_REWARDED_AD_DISPLAYED_EVENT);
};
const addAdFailedToDisplayEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_FAILED_TO_DISPLAY_EVENT, (errorInfo) => listener(errorInfo));
};
const removeAdFailedToDisplayEventListener = () => {
    removeEventListener(ON_REWARDED_AD_FAILED_TO_DISPLAY_EVENT);
};
const addAdHiddenEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_HIDDEN_EVENT, (adInfo) => listener(adInfo));
};
const removeAdHiddenEventListener = () => {
    removeEventListener(ON_REWARDED_AD_HIDDEN_EVENT);
};
const addAdRevenuePaidListener = (listener) => {
    addEventListener(ON_REWARDED_AD_REVENUE_PAID, (adInfo) => listener(adInfo));
};
const removeAdRevenuePaidListener = () => {
    removeEventListener(ON_REWARDED_AD_REVENUE_PAID);
};
// Rewarded specific APIs
const addAdReceivedRewardEventListener = (listener) => {
    addEventListener(ON_REWARDED_AD_RECEIVED_REWARD_EVENT, (adInfo) => listener(adInfo));
};
const removeAdReceivedRewardEventListener = () => {
    removeEventListener(ON_REWARDED_AD_RECEIVED_REWARD_EVENT);
};
export const RewardedAd = {
    isAdReady,
    loadAd,
    showAd,
    setExtraParameter,
    setLocalExtraParameter,
    addAdLoadedEventListener,
    removeAdLoadedEventListener,
    addAdLoadFailedEventListener,
    removeAdLoadFailedEventListener,
    addAdClickedEventListener,
    removeAdClickedEventListener,
    addAdDisplayedEventListener,
    removeAdDisplayedEventListener,
    addAdFailedToDisplayEventListener,
    removeAdFailedToDisplayEventListener,
    addAdHiddenEventListener,
    removeAdHiddenEventListener,
    addAdRevenuePaidListener,
    removeAdRevenuePaidListener,
    // Rewarded specific APIs
    addAdReceivedRewardEventListener,
    removeAdReceivedRewardEventListener,
};
export default RewardedAd;
