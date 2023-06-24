import { makeAutoObservable } from "mobx";

class SettingsData {
  public dateRange: any[] = [];
  public currentAreaId: string = "";
  public currentHistoryDateIndex: number = 0;
  public currentAreaTitle: string = "";
  public currentHistoryDate: string = "";

  constructor() {
    makeAutoObservable(this);
  }
}

export const gSettings = new SettingsData();
