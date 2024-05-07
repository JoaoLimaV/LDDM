import AsyncStorage from '@react-native-async-storage/async-storage';
import { InterfaceDataUser } from '@components/Interface'

export async function storeToken(str: InterfaceDataUser): Promise<string> {
    await AsyncStorage.setItem('AuthToken', JSON.stringify(str));
    return 'Done'
}

export async function getToken(): Promise<string | InterfaceDataUser> {
    let token: string | null = await AsyncStorage.getItem('AuthToken');
    return (token == null) ? "Token Inexistente" : JSON.parse(token)
}

export async function deleteToken( key : string): Promise<string> {
    try {
        await AsyncStorage.removeItem(`@${key}`)
    } catch (e) {
        // remove error
    }
    return 'Removed'
}