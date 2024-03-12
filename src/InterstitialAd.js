import { NativeModules } from 'react-native';
import { addEventListener, removeEventListener } from './EventEmitter';
const { AppLovinMAX } = NativeModules;
const { ON_INTERSTITIAL_LOADED_EVENT, ON_INTERSTITIAL_LOAD_FAILED_EVENT, ON_INTERSTITIAL_CLICKED_EVENT, ON_INTERSTITIAL_DISPLAYED_EVENT, ON_INTERSTITIAL_AD_FAILED_TO_DISPLAY_EVENT, ON_INTERSTITIAL_HIDDEN_EVENT, ON_INTERSTITIAL_AD_REVENUE_PAID, } = AppLovinMAX.getConstants();
const isAdReady = (adUnitId) => {
    return AppLovinMAX.isInterstitialReady(adUnitId);
};
const loadAd = (adUnitId) => {
    AppLovinMAX.loadInterstitial(adUnitId);
};
const showAd = (adUnitId, placement, customData) => {
    AppLovinMAX.showInterstitial(adUnitId, placement ?? null, customData ?? null);
};
const setExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setInterstitialExtraParameter(adUnitId, key, value);
};
const setLocalExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setInterstitialLocalExtraParameter(adUnitId, { [key]: value });
};
const addAdLoadedEventListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_LOADED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdLoadedEventListener = () => {
    removeEventListener(ON_INTERSTITIAL_LOADED_EVENT);
};
const addAdLoadFailedEventListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_LOAD_FAILED_EVENT, (errorInfo) => listener(errorInfo));
};
const removeAdLoadFailedEventListener = () => {
    removeEventListener(ON_INTERSTITIAL_LOAD_FAILED_EVENT);
};
const addAdClickedEventListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_CLICKED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdClickedEventListener = () => {
    removeEventListener(ON_INTERSTITIAL_CLICKED_EVENT);
};
const addAdDisplayedEventListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_DISPLAYED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdDisplayedEventListener = () => {
    removeEventListener(ON_INTERSTITIAL_DISPLAYED_EVENT);
};
const addAdFailedToDisplayEventListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_AD_FAILED_TO_DISPLAY_EVENT, (errorInfo) => listener(errorInfo));
};
const removeAdFailedToDisplayEventListener = () => {
    removeEventListener(ON_INTERSTITIAL_AD_FAILED_TO_DISPLAY_EVENT);
};
const addAdHiddenEventListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_HIDDEN_EVENT, (adInfo) => listener(adInfo));
};
const removeAdHiddenEventListener = () => {
    removeEventListener(ON_INTERSTITIAL_HIDDEN_EVENT);
};
const addAdRevenuePaidListener = (listener) => {
    addEventListener(ON_INTERSTITIAL_AD_REVENUE_PAID, (adInfo) => listener(adInfo));
};
const removeAdRevenuePaidListener = () => {
    removeEventListener(ON_INTERSTITIAL_AD_REVENUE_PAID);
};
export const InterstitialAd = {
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
};
export default InterstitialAd;
