import {makeAutoObservable} from "mobx";
import {SettingPanel} from "../enums/SettingPanel";

class SettingsData {
  public dateRange: any[] = [];
  public currentAreaId: string = "";
  public currentHistoryDateIndex: number = 0;
  public currentAreaTitle: string = "";
  public currentHistoryDateStart: string = "";
  public currentHistoryDateFinish: string = "";
  public currentPanel:SettingPanel = SettingPanel.current
  public showSettingPanel:boolean = false;


  public settingWidth:number = 40;

  constructor() {
    makeAutoObservable(this);
  }
}

export const gSettings = new SettingsData();
