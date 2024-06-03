import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeToken(str: string): Promise<string> {
    await AsyncStorage.setItem('AuthToken', str);
    return 'Done';
}

export async function getToken(): Promise<null | string> {
  try {
    const token = await AsyncStorage.getItem('AuthToken');
    return token ? token : null;
  } catch (error) {
    console.error("Error fetching token: ", error);
    return null;
  }
}

export async function deleteToken(): Promise<string> {
    try {
        await AsyncStorage.removeItem(`AuthToken`);
    } catch (e) {
        console.error("Error deleting token: ", e);
    }
    return 'Removed';
}