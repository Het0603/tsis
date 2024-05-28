import StorageService from "../StorageService";

export const AuthStorageKey = {
  AuthData: "w-writeup-kurd-cyclone",
  OnboardingAuthData: "w-rocky-warfare-nibble",
};

export default class AuthStorage {
  static encode(data) {
    return {
      j: data.token,
      t: data.userId,
    };
  }

  static decode(data) {
    return {
      token: data.j,
      userId: data.t,
    };
  }

  static loadBaseData(key = AuthStorageKey.AuthData) {
    return StorageService.loadJson(key);
  }

  static loadData(key = AuthStorageKey.AuthData) {
    const baseData = AuthStorage.loadBaseData(key) || null;

    return baseData && baseData.j && baseData.t
      ? AuthStorage.decode(baseData)
      : null;
  }

  static saveData(data, key = AuthStorageKey.AuthData) {
    const newBaseData = AuthStorage.encode(data);

    return StorageService.saveJson(key, newBaseData);
  }

  static clearData(key = AuthStorageKey.AuthData) {
    return StorageService.remove(key);
  }

  static clearLegacyData() {
    const authKey = "whiptail";
    const onboardingAuthKey = "o-town";
    StorageService.remove(authKey);
    StorageService.remove(onboardingAuthKey);
  }
}
