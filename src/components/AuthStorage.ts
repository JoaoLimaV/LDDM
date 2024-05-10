import AsyncStorage from '@react-native-async-storage/async-storage';
import { InterfaceDataUser } from '@components/Interface'

export async function storeToken(str: string): Promise<string> {
    await AsyncStorage.setItem('AuthToken', str);
    return 'Done'
}

export async function getToken(): Promise<null | string> {
    let token: string | null = await AsyncStorage.getItem('AuthToken');
    return (token == null) ? null : token
}

export async function deleteToken(key: string): Promise<string> {
    try {
        await AsyncStorage.removeItem(`@${key}`)
    } catch (e) {
    }
    return 'Removed'
}