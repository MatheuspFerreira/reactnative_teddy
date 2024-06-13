import AsyncStorage from "@react-native-async-storage/async-storage";
import { OUTDATEDAPP_STORAGE } from "./storage-config";

type OutdatedAppSave = {
  currentAppVersion: string;
  date: Date;
};

export async function storageOutdatedAppSave({
  currentAppVersion,
  date,
}: OutdatedAppSave) {
  await AsyncStorage.setItem(
    OUTDATEDAPP_STORAGE,
    JSON.stringify({ currentAppVersion, date })
  );
}

export async function storageOutdatedAppGet() {
  const outdatedApp = await AsyncStorage.getItem(OUTDATEDAPP_STORAGE);

  if (!outdatedApp) return outdatedApp as undefined;

  const outdatedAppToParse = (await JSON.parse(outdatedApp)) as OutdatedAppSave;

  return outdatedAppToParse;
}

export async function storageOutdatedAppRemove() {
  await AsyncStorage.removeItem(OUTDATEDAPP_STORAGE);
}
