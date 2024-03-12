import { NativeModules } from 'react-native';
import { addEventListener, removeEventListener } from './EventEmitter';
const { AppLovinMAX } = NativeModules;
const { ON_BANNER_AD_LOADED_EVENT, ON_BANNER_AD_LOAD_FAILED_EVENT, ON_BANNER_AD_CLICKED_EVENT, ON_BANNER_AD_COLLAPSED_EVENT, ON_BANNER_AD_EXPANDED_EVENT, ON_BANNER_AD_REVENUE_PAID, } = AppLovinMAX.getConstants();
const createAd = (adUnitId, position, xOffset, yOffset) => {
    AppLovinMAX.createBannerWithOffsets(adUnitId, position, xOffset ?? 0, yOffset ?? 0);
};
const destroyAd = (adUnitId) => {
    AppLovinMAX.destroyBanner(adUnitId);
};
const showAd = (adUnitId) => {
    AppLovinMAX.showBanner(adUnitId);
};
const hideAd = (adUnitId) => {
    AppLovinMAX.hideBanner(adUnitId);
};
const setPlacement = (adUnitId, placement) => {
    AppLovinMAX.setBannerPlacement(adUnitId, placement);
};
const setCustomData = (adUnitId, customData) => {
    AppLovinMAX.setBannerCustomData(adUnitId, customData);
};
const updatePosition = (adUnitId, bannerPosition) => {
    AppLovinMAX.updateBannerPosition(adUnitId, bannerPosition);
};
const setExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setBannerExtraParameter(adUnitId, key, value);
};
const setLocalExtraParameter = (adUnitId, key, value) => {
    AppLovinMAX.setBannerLocalExtraParameter(adUnitId, { [key]: value });
};
const startAutoRefresh = (adUnitId) => {
    AppLovinMAX.startBannerAutoRefresh(adUnitId);
};
const stopAutoRefresh = (adUnitId) => {
    AppLovinMAX.stopBannerAutoRefresh(adUnitId);
};
const addAdLoadedEventListener = (listener) => {
    addEventListener(ON_BANNER_AD_LOADED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdLoadedEventListener = () => {
    removeEventListener(ON_BANNER_AD_LOADED_EVENT);
};
const addAdLoadFailedEventListener = (listener) => {
    addEventListener(ON_BANNER_AD_LOAD_FAILED_EVENT, (errorInfo) => listener(errorInfo));
};
const removeAdLoadFailedEventListener = () => {
    removeEventListener(ON_BANNER_AD_LOAD_FAILED_EVENT);
};
const addAdClickedEventListener = (listener) => {
    addEventListener(ON_BANNER_AD_CLICKED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdClickedEventListener = () => {
    removeEventListener(ON_BANNER_AD_CLICKED_EVENT);
};
const addAdCollapsedEventListener = (listener) => {
    addEventListener(ON_BANNER_AD_COLLAPSED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdCollapsedEventListener = () => {
    removeEventListener(ON_BANNER_AD_COLLAPSED_EVENT);
};
const addAdExpandedEventListener = (listener) => {
    addEventListener(ON_BANNER_AD_EXPANDED_EVENT, (adInfo) => listener(adInfo));
};
const removeAdExpandedEventListener = () => {
    removeEventListener(ON_BANNER_AD_EXPANDED_EVENT);
};
const addAdRevenuePaidListener = (listener) => {
    addEventListener(ON_BANNER_AD_REVENUE_PAID, (adInfo) => listener(adInfo));
};
const removeAdRevenuePaidListener = () => {
    removeEventListener(ON_BANNER_AD_REVENUE_PAID);
};
// Banner specific APIs
const setBackgroundColor = (adUnitId, hexColorCode) => {
    AppLovinMAX.setBannerBackgroundColor(adUnitId, hexColorCode);
};
const setWidth = (adUnitId, width) => {
    AppLovinMAX.setBannerWidth(adUnitId, width);
};
const updateOffsets = (adUnitId, xOffset, yOffset) => {
    AppLovinMAX.updateBannerOffsets(adUnitId, xOffset, yOffset);
};
const getAdaptiveHeightForWidth = (width) => {
    return AppLovinMAX.getAdaptiveBannerHeightForWidth(width);
};
export const BannerAd = {
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
    // Banner specific APIs
    setBackgroundColor,
    setWidth,
    updateOffsets,
    getAdaptiveHeightForWidth,
};
export default BannerAd;
