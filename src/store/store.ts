import { createContext, useContext } from "react";
import { gData } from "./EnvData";
import { gSettings } from "./SettingsData";

const store = {
  globalEnvData: gData,
  globalSettings: gSettings,
};
export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
