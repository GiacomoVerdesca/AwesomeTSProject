import AsyncStorage from '@react-native-community/async-storage';

export const setItemStorage = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getMultiple = async (key: string[]) => {
  let values;
  try {
    values = await AsyncStorage.multiGet(key);
    return values;
  } catch (error) {
    console.log(error);
  }
};

export const getAllKeys = async () => {
  let keys: string[] = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMultiple = async (key: string[]) => {
  try {
    await AsyncStorage.multiRemove(key);
  } catch (error) {
    console.log(error);
  }
};