import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useContext, useImperativeHandle, useRef, useState, useEffect, useCallback } from 'react';
import { NativeModules, requireNativeComponent, UIManager, findNodeHandle } from 'react-native';
import { NativeAdViewContext, NativeAdViewProvider } from './NativeAdViewProvider';
const { AppLovinMAX } = NativeModules;
const NativeAdViewComponent = requireNativeComponent('AppLovinMAXNativeAdView');
/**
 * The {@link NativeAdView} component that you use building a native ad. This loads a native ad and
 * renders it with the asset views:
 *
 * - {@link IconView}
 * - {@link TitleView}
 * - {@link AdvertiserView}
 * - {@link StarRatingView}
 * - {@link BodyView}
 * - {@link MediaView}
 * - {@link CallToActionView}
 *
 * {@link NativeAdView} fills each asset view with the data of a native ad as soon as it loads the native
 * ad, but you need to provide the layout and style of the asset views.
 * {@link NativeAdView} can reload a new native ad by using the ref handler.
 *
 * ### Example:
 * ```js
 * <NativeAdView
 *   ref={nativeAdViewHandler}
 *   adUnitId={adUnitId}
 *   style={styles.nativead}
 *   onAdLoaded={(adInfo: AdInfo) => { ... }}
 * >
 *   <View style={ ... }>
 *     <IconView style={styles.icon} />
 *     <TitleView style={styles.title} />
 *     <AdvertiserView style={styles.advertiser} />
 *     <StarRatingView style={styles.starRatingView} />
 *     <OptionsView style={styles.optionsView} />
 *     <BodyView style={styles.body} />
 *     <MediaView style={styles.mediaView} />
 *     <CallToActionView style={styles.callToAction} />
 *   </View>
 * </NativeAdView>
 * ```
 */
export const NativeAdView = forwardRef(function NativeAdView(props, ref) {
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        // check that AppLovinMAX has been initialized
        AppLovinMAX.isInitialized().then((result) => {
            setIsInitialized(result);
            if (!result) {
                console.warn('NativeAdView is mounted before the initialization of the AppLovin MAX React Native module');
            }
        });
    }, []);
    // Not ready to render NativeAdView
    if (!isInitialized) {
        return null;
    }
    return (_jsx(NativeAdViewProvider, { children: _jsx(NativeAdViewImpl, { ...props, ref: ref }) }));
});
const NativeAdViewImpl = forwardRef(function NativeAdViewImpl({ adUnitId, placement, customData, extraParameters, localExtraParameters, onAdLoaded, onAdLoadFailed, onAdClicked, onAdRevenuePaid, children, style, ...otherProps }, ref) {
    // context from NativeAdViewProvider
    const { setNativeAd, setNativeAdView } = useContext(NativeAdViewContext);
    // keep the nativeAdView ref
    const nativeAdViewRef = useRef(null);
    // invoke the native ad loader
    const loadAd = () => {
        if (nativeAdViewRef) {
            UIManager.dispatchViewManagerCommand(findNodeHandle(nativeAdViewRef.current), UIManager.getViewManagerConfig('AppLovinMAXNativeAdView').Commands['loadAd'], undefined);
        }
    };
    // expose a list of functions via the provided ref
    useImperativeHandle(ref, () => ({ loadAd }), []);
    // save the DOM element via the ref callback
    const saveElement = useCallback((element) => {
        if (element) {
            nativeAdViewRef.current = element;
            setNativeAdView(element);
        }
    }, []);
    const onAdLoadedEvent = (event) => {
        setNativeAd(event.nativeEvent.nativeAd);
        if (onAdLoaded)
            onAdLoaded(event.nativeEvent.adInfo);
    };
    const onAdLoadFailedEvent = (event) => {
        if (onAdLoadFailed)
            onAdLoadFailed(event.nativeEvent);
    };
    const onAdClickedEvent = (event) => {
        if (onAdClicked)
            onAdClicked(event.nativeEvent);
    };
    const onAdRevenuePaidEvent = (event) => {
        if (onAdRevenuePaid)
            onAdRevenuePaid(event.nativeEvent);
    };
    return (_jsx(NativeAdViewComponent, { ref: saveElement, adUnitId: adUnitId, placement: placement, customData: customData, extraParameters: extraParameters, localExtraParameters: localExtraParameters, onAdLoadedEvent: onAdLoadedEvent, onAdLoadFailedEvent: onAdLoadFailedEvent, onAdClickedEvent: onAdClickedEvent, onAdRevenuePaidEvent: onAdRevenuePaidEvent, style: style, ...otherProps, children: children }));
});
