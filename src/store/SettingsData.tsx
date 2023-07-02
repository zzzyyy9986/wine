import {makeAutoObservable} from "mobx";
import {SettingPanel} from "../enums/SettingPanel";
import {IHistData} from "../interfaces/IHistData";

class SettingsData {
  public dateRange: any[] = [];
  public currentAreaId: string = "";
  public currentHistoryDateIndex: number = 0;
  public currentAreaTitle: string = "";
  public currentHistoryDateStart: string = "";
  public currentHistoryDateFinish: string = "";
  public currentPanel:SettingPanel = SettingPanel.current
  public showSettingPanel:boolean = false;

  public lastHistoryDate:{[id:string]:IHistData} = {}

  public showPredictionForm:boolean = false

  public showPredictionRes:boolean = false;

  public predictionRes:number = 0;



  public settingWidth:number = 40;

  constructor() {
    makeAutoObservable(this);
  }
}

export const gSettings = new SettingsData();
