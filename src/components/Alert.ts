import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Hook customizado que usa useNavigation
export function useAlertNotLogin() {
    const navigation = useNavigation();

    const alertNotLogin = () => {
        Alert.alert("Login Necessário", "Faça login para acessar esse recurso.", [
            {
                text: "Entrar",
                onPress: () => {
                    // @ts-ignore
                    navigation.navigate('Login');
                }
            },
            {
                text: "OK",
            },
        ]);
    };

    return alertNotLogin;
}