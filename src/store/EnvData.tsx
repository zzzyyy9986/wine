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
  init() {
    const data: {
      [title: string]: IDataRow;
    } = {
      "виноградник №1": {
        id: uuidv4(),
        coordinates: [
          [44.543011, 38.084849],
          [44.544011, 38.085849],
        ],
        history: {
          "2022-12-01": {
            temperature: 10,
            airHumidity: 20,
            windSpeed: 30,
            precipitation: 40,
          },
          "2023-01-01": {
            temperature: 30,
            airHumidity: 50,
            windSpeed: 20,
            precipitation: 11,
          },
        },
      },
      "виноградник №2": {
        id: uuidv4(),
        coordinates: [
          [44.549011, 38.083849],
          [44.5467011, 38.089649],
        ],
        history: {
          "2022-12-01": {
            temperature: 10,
            airHumidity: 20,
            windSpeed: 30,
            precipitation: 40,
          },
          "2023-01-01": {
            temperature: 30,
            airHumidity: 50,
            windSpeed: 20,
            precipitation: 11,
          },
        },
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
  constructor(row: IHistData) {
    this.temperature = row.temperature;
    this.airHumidity = row.airHumidity;
    this.windSpeed = row.windSpeed;
    this.precipitation = row.precipitation;
    makeAutoObservable(this);
  }
}

export const gData = new EnvData();
