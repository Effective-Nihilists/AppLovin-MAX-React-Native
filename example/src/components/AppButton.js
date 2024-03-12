import { jsx as _jsx } from "react/jsx-runtime";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
const AppButton = (props) => {
    const { style } = props;
    return (_jsx(View, { style: [styles.container, style], children: _jsx(TouchableOpacity, { disabled: !props.enabled, style: [
                styles.button,
                props.enabled ? { backgroundColor: '#DDDDDD' } : { backgroundColor: '#EEEEEE' },
                style,
            ], onPress: props.onPress, children: _jsx(Text, { style: [styles.text, props.enabled ? { color: 'black' } : { color: 'gray' }, style], children: props.title }) }) }));
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 8,
        paddingHorizontal: 48,
    },
    button: {
        borderRadius: 8,
        height: 36,
        justifyContent: 'center', // vertical-align
        alignItems: 'center', // horizontal-align
    },
    text: {
        fontSize: 18,
    },
});
export default AppButton;
