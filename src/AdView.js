import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef, useCallback, useImperativeHandle, forwardRef } from 'react';
import { NativeModules, requireNativeComponent, StyleSheet, UIManager, findNodeHandle } from 'react-native';
const { AppLovinMAX } = NativeModules;
const { BANNER_AD_FORMAT_LABEL, MREC_AD_FORMAT_LABEL, TOP_CENTER_POSITION, TOP_LEFT_POSITION, TOP_RIGHT_POSITION, CENTERED_POSITION, CENTER_LEFT_POSITION, CENTER_RIGHT_POSITION, BOTTOM_LEFT_POSITION, BOTTOM_CENTER_POSITION, BOTTOM_RIGHT_POSITION, } = AppLovinMAX.getConstants();
/**
 * Defines a format of an ad.
 */
export var AdFormat;
(function (AdFormat) {
    /**
     * Banner ad.
     */
    AdFormat[AdFormat["BANNER"] = BANNER_AD_FORMAT_LABEL] = "BANNER";
    /**
     * MREC ad.
     */
    AdFormat[AdFormat["MREC"] = MREC_AD_FORMAT_LABEL] = "MREC";
})(AdFormat || (AdFormat = {}));
/**
 * Defines a position of a banner or MREC ad.
 */
export var AdViewPosition;
(function (AdViewPosition) {
    AdViewPosition[AdViewPosition["TOP_CENTER"] = TOP_CENTER_POSITION] = "TOP_CENTER";
    AdViewPosition[AdViewPosition["TOP_LEFT"] = TOP_LEFT_POSITION] = "TOP_LEFT";
    AdViewPosition[AdViewPosition["TOP_RIGHT"] = TOP_RIGHT_POSITION] = "TOP_RIGHT";
    AdViewPosition[AdViewPosition["CENTERED"] = CENTERED_POSITION] = "CENTERED";
    AdViewPosition[AdViewPosition["CENTER_LEFT"] = CENTER_LEFT_POSITION] = "CENTER_LEFT";
    AdViewPosition[AdViewPosition["CENTER_RIGHT"] = CENTER_RIGHT_POSITION] = "CENTER_RIGHT";
    AdViewPosition[AdViewPosition["BOTTOM_LEFT"] = BOTTOM_LEFT_POSITION] = "BOTTOM_LEFT";
    AdViewPosition[AdViewPosition["BOTTOM_CENTER"] = BOTTOM_CENTER_POSITION] = "BOTTOM_CENTER";
    AdViewPosition[AdViewPosition["BOTTOM_RIGHT"] = BOTTOM_RIGHT_POSITION] = "BOTTOM_RIGHT";
})(AdViewPosition || (AdViewPosition = {}));
const AdViewComponent = requireNativeComponent('AppLovinMAXAdView');
const ADVIEW_SIZE = {
    banner: { width: 320, height: 50 },
    leader: { width: 728, height: 90 },
    mrec: { width: 300, height: 250 },
};
const getOutlineViewSize = (style) => {
    const viewStyle = StyleSheet.flatten(style || {});
    return [viewStyle?.width, viewStyle?.height];
};
const sizeAdViewDimensions = (adFormat, adaptiveBannerEnabled, width, height) => {
    const sizeForBannerFormat = async () => {
        const isTablet = await AppLovinMAX.isTablet();
        const minWidth = isTablet ? ADVIEW_SIZE.leader.width : ADVIEW_SIZE.banner.width;
        let minHeight;
        if (adaptiveBannerEnabled) {
            if (typeof width === 'number' && width > minWidth) {
                minHeight = await AppLovinMAX.getAdaptiveBannerHeightForWidth(width);
            }
            else {
                minHeight = await AppLovinMAX.getAdaptiveBannerHeightForWidth(minWidth);
            }
        }
        else {
            minHeight = isTablet ? ADVIEW_SIZE.leader.height : ADVIEW_SIZE.banner.height;
        }
        return Promise.resolve({
            ...(width === 'auto'
                ? {
                    width: minWidth,
                }
                : {
                    minWidth: minWidth,
                }),
            ...(height === 'auto'
                ? {
                    height: minHeight,
                }
                : {
                    minHeight: minHeight,
                }),
        });
    };
    if (adFormat === AdFormat.BANNER) {
        return sizeForBannerFormat();
    }
    else {
        return Promise.resolve({
            ...(width === 'auto'
                ? {
                    width: ADVIEW_SIZE.mrec.width,
                }
                : {
                    minWidth: ADVIEW_SIZE.mrec.width,
                }),
            ...(height === 'auto'
                ? {
                    height: ADVIEW_SIZE.mrec.height,
                }
                : {
                    minHeight: ADVIEW_SIZE.mrec.height,
                }),
        });
    }
};
/**
 * The {@link AdView} component that you use building a banner or an MREC. Phones
 * sizes banners to 320x50 and MRECs to 300x250. Tablets sizes banners to 728x90 and MRECs to
 * 300x250. You may use the utility method {@link AppLovinMAX.isTablet()} to help with view sizing
 * adjustments. For adaptive banners, call {@link BannerAd.getAdaptiveHeightForWidth()} to get
 * the banner height, and then adjust your content accordingly.
 *
 * ### Example:
 * ```js
 * <AdView
 *   adUnitId={adUnitId}
 *   adFormat={AdFormat.BANNER}
 *   placement="my_placement"
 *   customData="my_customData"
 *   extraParameters={{"key1":"value1", "key2":"value2"}}
 *   localExtraParameters={{"key1":123", "key2":object}}
 *   adaptiveBannerEnabled={false}
 *   autoRefresh={false}
 *   style={styles.banner}
 *   onAdLoaded={(adInfo: AdInfo) => { ... }}
 * />
 * ```
 */
export const AdView = forwardRef(function AdView({ adUnitId, adFormat, placement, customData, adaptiveBannerEnabled = true, autoRefresh = true, loadOnMount = true, extraParameters, localExtraParameters, onAdLoaded, onAdLoadFailed, onAdDisplayFailed, onAdClicked, onAdExpanded, onAdCollapsed, onAdRevenuePaid, style, ...otherProps }, ref) {
    const adViewRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [dimensions, setDimensions] = useState({});
    const loadAd = () => {
        if (adViewRef.current) {
            UIManager.dispatchViewManagerCommand(findNodeHandle(adViewRef.current), UIManager.getViewManagerConfig('AppLovinMAXAdView').Commands['loadAd'], undefined);
        }
    };
    useImperativeHandle(ref, () => ({ loadAd }), []);
    const saveElement = useCallback((element) => {
        if (element) {
            adViewRef.current = element;
        }
    }, []);
    useEffect(() => {
        AppLovinMAX.isInitialized().then((result) => {
            setIsInitialized(result);
            if (!result) {
                console.warn('AdView is mounted before the initialization of the AppLovin MAX React Native module');
            }
        });
    }, []);
    useEffect(() => {
        if (!isInitialized)
            return;
        const [width, height] = getOutlineViewSize(style);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: width and height should be of type DimensionValue in react-native 0.72.0 and above
        sizeAdViewDimensions(adFormat, adaptiveBannerEnabled, width, height).then((value) => {
            setDimensions(value);
        });
    }, [isInitialized]);
    const onAdLoadedEvent = (event) => {
        if (onAdLoaded)
            onAdLoaded(event.nativeEvent);
    };
    const onAdLoadFailedEvent = (event) => {
        if (onAdLoadFailed)
            onAdLoadFailed(event.nativeEvent);
    };
    const onAdDisplayFailedEvent = (event) => {
        if (onAdDisplayFailed)
            onAdDisplayFailed(event.nativeEvent);
    };
    const onAdClickedEvent = (event) => {
        if (onAdClicked)
            onAdClicked(event.nativeEvent);
    };
    const onAdExpandedEvent = (event) => {
        if (onAdExpanded)
            onAdExpanded(event.nativeEvent);
    };
    const onAdCollapsedEvent = (event) => {
        if (onAdCollapsed)
            onAdCollapsed(event.nativeEvent);
    };
    const onAdRevenuePaidEvent = (event) => {
        if (onAdRevenuePaid)
            onAdRevenuePaid(event.nativeEvent);
    };
    // Not initialized
    if (!isInitialized) {
        return null;
    }
    else {
        const isDimensionsSet = Object.keys(dimensions).length > 0;
        // Not sized yet
        if (!isDimensionsSet) {
            return null;
        }
    }
    return (_jsx(AdViewComponent, { ref: saveElement, adUnitId: adUnitId, adFormat: adFormat, placement: placement, customData: customData, adaptiveBannerEnabled: adaptiveBannerEnabled, autoRefresh: autoRefresh, loadOnMount: loadOnMount, extraParameters: extraParameters, localExtraParameters: localExtraParameters, onAdLoadedEvent: onAdLoadedEvent, onAdLoadFailedEvent: onAdLoadFailedEvent, onAdDisplayFailedEvent: onAdDisplayFailedEvent, onAdClickedEvent: onAdClickedEvent, onAdExpandedEvent: onAdExpandedEvent, onAdCollapsedEvent: onAdCollapsedEvent, onAdRevenuePaidEvent: onAdRevenuePaidEvent, style: Object.assign({}, style, dimensions), ...otherProps }));
});
