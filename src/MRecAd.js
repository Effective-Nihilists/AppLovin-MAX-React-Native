import { NativeModules } from 'react-native';
import { addEventListener, removeEventListener } from './EventEmitter';
const { AppLovinMAX } = NativeModules;
const { ON_MREC_AD_LOADED_EVENT, ON_MREC_AD_LOAD_FAILED_EVENT, ON_MREC_AD_CLICKED_EVENT, ON_MREC_AD_COLLAPSED_EVENT, ON_MREC_AD_EXPANDED_EVENT, ON_MREC_AD_REVENUE_PAID, } = AppLovinMAX.getConstants();
const createAd = (adUnitId, position) => {
    AppLovinMAX.createMRec(adUnitId, position);
};
const destroyAd = (adUnitId) => {
    AppLovinMAX.destroyMRec(adUnitId);
};
const showAd = (adUnitId) => {
    AppLovinMAX.showMRec(adUnitId);
};
const hideAd = (adUnitId) => {
    AppLovinMAX.hideMRec(adUnitId);
};
const setPlacement = (adUnitId, placement) => {
    AppLovinMAX.setMRecPlacement(adUnitId, placement);
};
const setCustomData = (adUnitId, customData) => {
    AppLovinMAX.setMRecCustomData(adUnitId, customData);
};
const updatePosition = (adUnitId, bannerPosition) => {
    AppLovinMAX.updateMRecPosition(adUnitId, bannerPosition);
};
const setExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setMRecExtraParameter(adUnitId, key, value);
};
const setLocalExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setMRecLocalExtraParameter(adUnitId, { [key]: value });
};
const startAutoRefresh = (adUnitId) => {
    AppLovinMAX.startMRecAutoRefresh(adUnitId);
};
const stopAutoRefresh = (adUnitId) => {
    AppLovinMAX.stopMRecAutoRefresh(adUnitId);
};
const addAdLoadedEventListener = (listener) => {
    addEventListener(ON_MREC_AD_LOADED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdLoadedEventListener = () => {
    removeEventListener(ON_MREC_AD_LOADED_EVENT);
};
const addAdLoadFailedEventListener = (listener) => {
    addEventListener(ON_MREC_AD_LOAD_FAILED_EVENT, (errorInfo) => listener(errorInfo));
};
const removeAdLoadFailedEventListener = () => {
    removeEventListener(ON_MREC_AD_LOAD_FAILED_EVENT);
};
const addAdClickedEventListener = (listener) => {
    addEventListener(ON_MREC_AD_CLICKED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdClickedEventListener = () => {
    removeEventListener(ON_MREC_AD_CLICKED_EVENT);
};
const addAdCollapsedEventListener = (listener) => {
    addEventListener(ON_MREC_AD_COLLAPSED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdCollapsedEventListener = () => {
    removeEventListener(ON_MREC_AD_COLLAPSED_EVENT);
};
const addAdExpandedEventListener = (listener) => {
    addEventListener(ON_MREC_AD_EXPANDED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdExpandedEventListener = () => {
    removeEventListener(ON_MREC_AD_EXPANDED_EVENT);
};
const addAdRevenuePaidListener = (listener) => {
    addEventListener(ON_MREC_AD_REVENUE_PAID, (adInfo) => listener(adInfo));
};
const removeAdRevenuePaidListener = () => {
    removeEventListener(ON_MREC_AD_REVENUE_PAID);
};
export const MRecAd = {
    createAd,
    destroyAd,
    showAd,
    hideAd,
    setPlacement,
    setCustomData,
    updatePosition,
    setExtraParameter,
    setLocalExtraParameter,
    startAutoRefresh,
    stopAutoRefresh,
    addAdLoadedEventListener,
    removeAdLoadedEventListener,
    addAdLoadFailedEventListener,
    removeAdLoadFailedEventListener,
    addAdClickedEventListener,
    removeAdClickedEventListener,
    addAdCollapsedEventListener,
    removeAdCollapsedEventListener,
    addAdExpandedEventListener,
    removeAdExpandedEventListener,
    addAdRevenuePaidListener,
    removeAdRevenuePaidListener,
};
export default MRecAd;
