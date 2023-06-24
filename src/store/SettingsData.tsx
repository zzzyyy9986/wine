import { makeAutoObservable } from "mobx";

class SettingsData {
  public dateRange: any[] = [];
  public currentAreaId: string = "";
  public currentHistoryDateIndex: number = 0;
  public currentAreaTitle: string = "";
  public currentHistoryDateStart: string = "";
  public currentHistoryDateFinish: string = "";


  public settingWidth:number = 30;

  constructor() {
    makeAutoObservable(this);
  }
}

export const gSettings = new SettingsData();
