import { NativeModules } from 'react-native';
const { AppLovinMAX } = NativeModules;
const nativeMethods = AppLovinMAX;
/**
 * This enumeration represents content ratings for the ads shown to users.
 */
export var AdContentRating;
(function (AdContentRating) {
    AdContentRating[AdContentRating["NONE"] = 0] = "NONE";
    AdContentRating[AdContentRating["ALL_AUDIENCES"] = 1] = "ALL_AUDIENCES";
    AdContentRating[AdContentRating["EVERYONE_OVER_TWELVE"] = 2] = "EVERYONE_OVER_TWELVE";
    AdContentRating[AdContentRating["MATURE_AUDIENCES"] = 3] = "MATURE_AUDIENCES";
})(AdContentRating || (AdContentRating = {}));
/**
 * This enumeration represents gender.
 */
export var UserGender;
(function (UserGender) {
    UserGender["UNKNOWN"] = "U";
    UserGender["FEMALE"] = "F";
    UserGender["MALE"] = "M";
    UserGender["OTHER"] = "O";
})(UserGender || (UserGender = {}));
/**
 * Defines additional data for the publisher to send to AppLovin.
 *
 * @see {@link https://support.applovin.com/hc/en-us/articles/13964925614733-Data-and-Keyword-Passing}
 */
export const TargetingData = {
    /**
     * Sets the year of birth of the user. Set this to 0 to clear this value.
     */
    set yearOfBirth(value) {
        if (typeof value === 'number') {
            nativeMethods.setTargetingDataYearOfBirth(value);
        }
        else {
            printError('TargetingData.yearOfBirth', 'number', typeof value);
        }
    },
    /**
     * Gets the year of birth of the user.
     */
    get yearOfBirth() {
        return nativeMethods.getTargetingDataYearOfBirth();
    },
    /**
     * Sets the gender of the user. Set this to {@link UserGender.Unknown} to clear this value.
     */
    set gender(value) {
        if (value === UserGender.UNKNOWN ||
            value === UserGender.FEMALE ||
            value === UserGender.MALE ||
            value === UserGender.OTHER) {
            nativeMethods.setTargetingDataGender(value);
        }
        else {
            printError('TargetingData.gender', 'UserGender', typeof value);
        }
    },
    /**
     * Gets the gender of the user.
     */
    get gender() {
        return nativeMethods.getTargetingDataGender().then((value) => {
            return value;
        });
    },
    /**
     * Sets the maximum ad content rating shown to the user. The levels are based on IQG Media
     * Ratings: 1=All Audiences, 2=Everyone Over 12, 3=Mature Audiences.
     * Set this to {@link AdContentRating.None} to clear this value.
     */
    set maximumAdContentRating(value) {
        if (value === AdContentRating.NONE ||
            value === AdContentRating.ALL_AUDIENCES ||
            value === AdContentRating.EVERYONE_OVER_TWELVE ||
            value === AdContentRating.MATURE_AUDIENCES) {
            nativeMethods.setTargetingDataMaximumAdContentRating(value);
        }
        else {
            printError('TargetingData.maximumAdContentRating', 'AdContentRating', typeof value);
        }
    },
    /**
     * Gets the maximum ad content rating shown to the user. The levels are based on IQG Media
     * Ratings: 1=All Audiences, 2=Everyone Over 12, 3=Mature Audiences.
     */
    get maximumAdContentRating() {
        return nativeMethods.getTargetingDataMaximumAdContentRating().then((value) => {
            return value;
        });
    },
    /**
     * Sets the email of the user. Set this to null to clear this value.
     */
    set email(value) {
        if (value === null) {
            nativeMethods.setTargetingDataEmail(null);
        }
        else if (typeof value === 'string') {
            nativeMethods.setTargetingDataEmail(value);
        }
        else {
            printError('TargetingData.email', 'string or null', typeof value);
        }
    },
    /**
     * Gets the email of the user.
     */
    get email() {
        return nativeMethods.getTargetingDataEmail();
    },
    /**
     * Sets the phone number of the user. Set this to null to clear this value.
     */
    set phoneNumber(value) {
        if (value === null) {
            nativeMethods.setTargetingDataPhoneNumber(null);
        }
        else if (typeof value === 'string') {
            nativeMethods.setTargetingDataPhoneNumber(value);
        }
        else {
            printError('TargetingData.phoneNumber', 'string or null', typeof value);
        }
    },
    /**
     * Gets the phone number of the user.
     */
    get phoneNumber() {
        return nativeMethods.getTargetingDataPhoneNumber();
    },
    /**
     * Sets the keywords describing the application. Set this to null to clear this value.
     */
    set keywords(value) {
        if (value === null) {
            nativeMethods.setTargetingDataKeywords(null);
        }
        else if (isStringArray(value)) {
            nativeMethods.setTargetingDataKeywords(value);
        }
        else {
            printError('TargetingData.keywords', 'string[] or null', typeof value);
        }
    },
    /**
     * Gets the keywords describing the application.
     */
    get keywords() {
        return nativeMethods.getTargetingDataKeywords();
    },
    /**
     * Sets the interests of the user. Set this to null to clear this value.
     */
    set interests(value) {
        if (value === null) {
            nativeMethods.setTargetingDataInterests(null);
        }
        else if (isStringArray(value)) {
            nativeMethods.setTargetingDataInterests(value);
        }
        else {
            printError('TargetingData.interests', 'string[] or null', typeof value);
        }
    },
    /**
     * Gets the interests of the user.
     */
    get interests() {
        return nativeMethods.getTargetingDataInterests();
    },
    /**
     * Clears all saved data from this class.
     */
    clearAll() {
        nativeMethods.clearAllTargetingData();
    },
};
const isStringArray = (strs) => {
    return Array.isArray(strs) && strs.every((value) => typeof value === 'string');
};
const printError = (fieldName, correctType, wrongType) => {
    console.error('Cannot set value to ' +
        fieldName +
        ' with unsupported type: ' +
        wrongType +
        '.  Value has to be of type ' +
        correctType +
        '.');
};
