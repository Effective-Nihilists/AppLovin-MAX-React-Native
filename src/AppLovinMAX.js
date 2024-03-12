import { NativeModules } from 'react-native';
const NativeAppLovinMAX = NativeModules['AppLovinMAX'];
const VERSION = '6.3.0';
/**
 * This enum represents the user's geography used to determine the type of consent flow shown to the
 * user.
 */
export var ConsentFlowUserGeography;
(function (ConsentFlowUserGeography) {
    /**
     * User's geography is unknown.
     */
    ConsentFlowUserGeography["UNKNOWN"] = "U";
    /**
     * The user is in GDPR region.
     */
    ConsentFlowUserGeography["GDPR"] = "G";
    /**
     * The user is in a non-GDPR region.
     */
    ConsentFlowUserGeography["OTHER"] = "O";
})(ConsentFlowUserGeography || (ConsentFlowUserGeography = {}));
/**
 * AppLovin SDK-defined app tracking transparency status values (extended to include "unavailable"
 * state on iOS before iOS14).
 */
export var AppTrackingStatus;
(function (AppTrackingStatus) {
    /**
     * Device is on iOS before iOS14, AppTrackingTransparency.framework is not available.
     */
    AppTrackingStatus["UNAVAILABLE"] = "U";
    /**
     * The user has not yet received an authorization request to authorize access to app-related
     * data that can be used for tracking the user or the device.
     */
    AppTrackingStatus["NOT_DETERMINED"] = "N";
    /**
     * Authorization to access app-related data that can be used for tracking the user or the device
     * is restricted.
     */
    AppTrackingStatus["RESTRICTED"] = "R";
    /**
     * The user denies authorization to access app-related data that can be used for tracking the
     * user or the device.
     */
    AppTrackingStatus["DENIED"] = "D";
    /**
     * The user authorizes access to app-related data that can be used for tracking the user or the
     * device.
     */
    AppTrackingStatus["AUTHORIZED"] = "A";
})(AppTrackingStatus || (AppTrackingStatus = {}));
/**
 * Represents errors for CMP flow.
 */
export var CMPErrorCode;
(function (CMPErrorCode) {
    /**
     * Indicates that an unspecified error has occurred.
     */
    CMPErrorCode[CMPErrorCode["UNSPECIFIED"] = -1] = "UNSPECIFIED";
    /**
     * Indicates that the CMP has not been integrated correctly.
     */
    CMPErrorCode[CMPErrorCode["INTEGRATION_ERROR"] = 1] = "INTEGRATION_ERROR";
    /**
     * Indicates that the CMP form is unavailable.
     */
    CMPErrorCode[CMPErrorCode["FORM_UNAVAILABLE"] = 2] = "FORM_UNAVAILABLE";
    /**
     * Indicates that the CMP form is not required.
     */
    CMPErrorCode[CMPErrorCode["FORM_NOT_REQUIRED"] = 3] = "FORM_NOT_REQUIRED";
})(CMPErrorCode || (CMPErrorCode = {}));
const initialize = async (sdkKey) => {
    return NativeAppLovinMAX.initialize(VERSION, sdkKey);
};
const nativeMethods = NativeAppLovinMAX;
export const AppLovinMAX = {
    ...nativeMethods,
    initialize,
};
export default AppLovinMAX;
