import { jsx as _jsx } from "react/jsx-runtime";
import { View, Image, StyleSheet } from 'react-native';
const AppLogo = () => {
    return (_jsx(View, { style: styles.container, children: _jsx(Image, { style: styles.logo, source: require('../resources/applovin_logo.png') }) }));
};
const styles = StyleSheet.create({
    logo: {
        resizeMode: 'stretch',
        width: 235,
        height: 55,
    },
    container: {
        height: 60,
        alignItems: 'center', // horizontal-align
        justifyContent: 'center', // vertical-align
    },
});
export default AppLogo;
