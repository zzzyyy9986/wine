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
          [44.54187277556933, 38.086937359656254],
          [44.54239305248443, 38.087686833292665],
          [44.541978711140295, 38.088453945070945],
          [44.54135973451304, 38.08769955151419],
          [44.54188533930163, 38.08691634648183],
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
          [44.541942615776144, 38.08861132315227],
          [44.541056375159314, 38.08998461416789],
          [44.54040415477389, 38.08917995146342],
          [44.54130191504547, 38.08778520277567],
          [44.54194693184983, 38.08860595873424],
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
      "виноградник №3": {
        id: uuidv4(),
        coordinates: [
          [44.54178672330468, 38.086815860019264],
          [44.54128413694686, 38.0875990650516],
          [44.54062808253317, 38.08678367351108],
          [44.54111916490005, 38.08598437522463],
          [44.54178960069492, 38.08681049560126],
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
      "виноградник №4": {
        id: uuidv4(),
        coordinates: [
          [44.541189282189244, 38.08769027196841],
          [44.54029919340775, 38.089052834147985],
          [44.539654637806485, 38.08821598493533],
          [44.54056775612128, 38.086799778575475],
          [44.541219974661516, 38.08766881429626],
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
      "виноградник №6": {
        id: uuidv4(),
        coordinates: [
          [44.5404967651518, 38.08672812932383],
          [44.53956062571199, 38.088155064519746],
          [44.53877794012259, 38.08712509625804],
          [44.539706418916104, 38.085741076406336],
          [44.5404967651518, 38.08672812932383],
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
      "виноградник №7": {
        id: uuidv4(),
        coordinates: [
          [44.5404967651518, 38.08672812932383],
          [44.53956062571199, 38.088155064519746],
          [44.53877794012259, 38.08712509625804],
          [44.539706418916104, 38.085741076406336],
          [44.5404967651518, 38.08672812932383],
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
          "2022-12-03": {
            temperature: 10,
            airHumidity: 20,
            windSpeed: 30,
            precipitation: 40,
          },
          "2023-01-04": {
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
