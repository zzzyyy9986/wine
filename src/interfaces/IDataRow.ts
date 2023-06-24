import { HistData } from "../store/EnvData";

export interface IDataRow {
  id: string;
  coordinates: [number, number][];
  history: {
    [date: string]: HistData;
  };
}
