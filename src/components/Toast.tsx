import Toast, { BaseToast } from 'react-native-toast-message';
import defaultStyle from '@components/DefaultStyle'

export function ToastShow(type: string, title: string, text: string): void {
    Toast.show({
        type: type,
        text1: title,
        text2: text,
        visibilityTime: 2000,
        onPress: () => {
            Toast.hide();
        }
    });
}

export const styleToast = {
    success: (props: any) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: '#82C165', width: '90%', borderLeftWidth: 10, zIndex: 1000 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400',
                color: defaultStyle.text_black
            }}
            text2Style={{
                fontSize: 13,
                color: defaultStyle.text_black
            }}
        />
    ),
    error: (props: any) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: '#BA090B', width: '90%', borderLeftWidth: 10 , zIndex: 1000 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400',
                color: defaultStyle.text_black
            }}
            text2Style={{
                fontSize: 13,
                color: defaultStyle.text_black
            }}
        />
    ),
    info: (props: any) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: '#EBC911', width: '90%', borderLeftWidth: 10 , zIndex: 1000 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400',
                color: defaultStyle.text_black
            }}
            text2Style={{
                fontSize: 13,
                color: defaultStyle.text_black
            }}EBC911
        />
    ),
}