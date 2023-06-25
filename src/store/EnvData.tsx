import { IHistData } from "../interfaces/IHistData";
import { makeAutoObservable } from "mobx";
import { IDataRow } from "../interfaces/IDataRow";
import { uuidv4 } from "../utils";
import { gSettings } from "./SettingsData";

export class EnvData {
  public data: {
    [title: string]: IDataRow;
  } = {};

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  add(title: string, row: IDataRow) {
    let hObject: {
      [id: string]: IHistData;
    } = {};
    Object.keys(row.history).forEach((date) => {
      hObject[date] = new HistData(row.history[date]);
    });

    this.data[title] = {
      id: row.id,
      coordinates: row.coordinates,
      history: hObject,
    };
  }
  get dataAr(): IDataRow[] {
    return Object.keys(this.data).map((key) => this.data[key]);
  }
  getItemByTitle(title:string){
    return this.data[title]
  }
  get currentItem() {
    return gSettings.currentAreaId
      ? this.getFullInfoById(gSettings.currentAreaId)
      : ({} as IDataRow);
  }
  get numberOfHistoricalDate() {
    if (!this.currentItem) return 1;
    return Object.keys(this.currentItem.history ?? {}).length;
  }
  get ArOfHistoricalDates() {
    return Object.keys(this.currentItem?.history ?? {});
  }
  get currentHistoryItem() {
    if (gSettings.currentHistoryDateIndex && this.currentItem) {
      return Object.keys(this.currentItem.history)[
        gSettings.currentHistoryDateIndex
      ];
    }
    return {} as HistData;
  }
  getFullInfoById(id: string) {
    return this.dataAr.filter((el) => {
      return el.id === id;
    })[0];
  }
  getLastHistoryItemyByTitle(title:string){
    return this.data[title].history[Object.keys(this.data[title].history).splice(-1)[0]]
  }
  init() {
    const data: {
      [title: string]: IDataRow;
    } = {
      "виноградник №1": {
        id: uuidv4(),
        coordinates: [
          [44.54187277556933, 38.086937359656254],
          [44.54239305248443, 38.087686833292665],
          [44.541978711140295, 38.088453945070945],
          [44.54135973451304, 38.08769955151419],
          [44.54188533930163, 38.08691634648183],
        ],
        history: {},
      },
      "виноградник №2": {
        id: uuidv4(),
        coordinates: [
          [44.541942615776144, 38.08861132315227],
          [44.541056375159314, 38.08998461416789],
          [44.54040415477389, 38.08917995146342],
          [44.54130191504547, 38.08778520277567],
          [44.54194693184983, 38.08860595873424],
        ],
        history: {},
      },
      "виноградник №3": {
        id: uuidv4(),
        coordinates: [
          [44.54178672330468, 38.086815860019264],
          [44.54128413694686, 38.0875990650516],
          [44.54062808253317, 38.08678367351108],
          [44.54111916490005, 38.08598437522463],
          [44.54178960069492, 38.08681049560126],
        ],
        history: {},
      },
      "виноградник №4": {
        id: uuidv4(),
        coordinates: [
          [44.541189282189244, 38.08769027196841],
          [44.54029919340775, 38.089052834147985],
          [44.539654637806485, 38.08821598493533],
          [44.54056775612128, 38.086799778575475],
          [44.541219974661516, 38.08766881429626],
        ],
        history: {},
      },
      "виноградник №5": {
        id: uuidv4(),
        coordinates: [
          [44.541033900466445, 38.08504736482797],
          [44.541033900466445, 38.08517611086068],
          [44.54083439846371, 38.08549797594247],
          [44.54068860810336, 38.08616316377815],
          [44.540450738831616, 38.086549401876304],
          [44.53976014507942, 38.085648179647286],
          [44.54055049058084, 38.0844250923365],
          [44.54104157360662, 38.08502590715584],
        ],
        history: {},
      },
      "виноградник №6": {
        id: uuidv4(),
        coordinates: [
          [44.5404967651518, 38.08672812932383],
          [44.53956062571199, 38.088155064519746],
          [44.53877794012259, 38.08712509625804],
          [44.539706418916104, 38.085741076406336],
          [44.5404967651518, 38.08672812932383],
        ],
        history: {},
      },
      "виноградник №7": {
        id: uuidv4(),
        coordinates: [
          [44.5404967651518, 38.08672812932383],
          [44.53956062571199, 38.088155064519746],
          [44.53877794012259, 38.08712509625804],
          [44.539706418916104, 38.085741076406336],
          [44.5404967651518, 38.08672812932383],
        ],
        history: {},
      },
    };
    Object.keys(data).forEach((key) => {
      this.add(key, data[key]);
    });
  }
}

export class HistData implements IHistData {
  public temperature: number = 0;
  public airHumidity: number = 0;
  public windSpeed: number = 0;
  //осадки
  public precipitation: number = 0;



  public alcohol: number = 0
  public chlorides: number = 0
  public citric_acid: number = 0
  public density: number = 0
  public fixed_acidity: number = 0
  public free_sulfur_dioxide: number = 0
  public pH: number = 0
  public residual_sugar: number = 0
  public sulphates: number = 0
  public total_sulfur_dioxide: number = 0
  public volatile_acidity: number = 0
  public winecolor:string = "white"
  constructor(row: IHistData) {
    this.temperature = row.temperature;
    this.airHumidity = row.airHumidity;
    this.windSpeed = row.windSpeed;
    this.precipitation = row.precipitation;
    makeAutoObservable(this);
  }
}

export const gData = new EnvData();
