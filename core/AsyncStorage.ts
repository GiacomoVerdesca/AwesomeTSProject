import AsyncStorage from "@react-native-community/async-storage";

export const setItemStorage = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  };
