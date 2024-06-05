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

export function userNotAuth() {
    const navigation = useNavigation();

    const alertNotLogin = () => {
        Alert.alert("Ação não permitida", "Para acessar essa função é necessário se tornar um leiloeiro.", [
            {
                text: "Ler Termos",
                onPress: () => {
                    // @ts-ignore
                    navigation.navigate('TermoLeilao');
                }
            },
            {
                text: "Fechar",
            },
        ]);
    };

    return alertNotLogin;
}

export function userCompleteCad() {
    const navigation = useNavigation();

    const alertCompleteCad = () => {
        Alert.alert("Ação não permitida", "Para acessar essa função é necessário cadastrar CPF e Endereço.", [
            {
                text: "Finalizar cadastro",
                onPress: () => {
                    // @ts-ignore
                    navigation.navigate('UserConfig');
                }
            },
            {
                text: "Fechar",
            },
        ]);
    };

    return alertCompleteCad;
}