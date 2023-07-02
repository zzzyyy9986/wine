import {LatLngExpression} from "leaflet";
import "leaflet/dist/leaflet.css";
import {MapContainer, Polygon, Popup, TileLayer,} from "react-leaflet";
import React from "react";
import {useStore} from "../store/store";
import {observer} from "mobx-react-lite";
import {IDataRow} from "../interfaces/IDataRow";
import {SettingPanel} from "../enums/SettingPanel";
import axios from "axios";
import {serverUrl} from "../env";
import {getHistory, getLastHistoryItem} from "../queries";
import {MenuTabs} from "./MenuTabs";
import {PredictionForm} from "./PredictionForm";

// import * as Popup from "../../node_modules/react-leaflet-editable-popup/build/EditablePopup";

export const FavoritesMap = observer(() => {
  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [44.543011, 38.084849];
  const zoom: number = 15;
  const { globalEnvData,globalSettings } = useStore();
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <MenuTabs/>
      {globalSettings.showPredictionForm && <PredictionForm/>}
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(globalEnvData.data).map((key, index) => {
        return (
          <AreaComponent
            item={globalEnvData.data[key]}
            title={key}
            key={globalEnvData.data[key].id}
          />
        );
      })}
    </MapContainer>
  );
});

export interface IAreaComponent {
  item: IDataRow;
  title: string;
  key: any;
}

const AreaComponent = observer(({ item, title }: IAreaComponent) => {
  const { globalSettings, globalEnvData } = useStore();

  const getData = () => {
    return axios.get(serverUrl + '/history')
        .then((msg) => {
          globalEnvData.data[title].history = msg.data
        })
  }
  const openCurrentSettingPanel = async (title:string) => {
    const resp = await getLastHistoryItem({id:title})
    globalSettings.lastHistoryDate = resp.data
    globalSettings.dateRange = globalEnvData.dataAr;
    globalSettings.currentAreaId = item.id;
    globalSettings.currentAreaTitle = title;
    globalSettings.currentPanel = SettingPanel.current;
    globalSettings.showSettingPanel = true

  }
  const openAreaInfo =async (title:string) => {
    const resp = await getHistory({
      id:title
    })
    globalEnvData.data[title].history = resp.data;
    globalSettings.dateRange = globalEnvData.dataAr;
    globalSettings.currentAreaId = item.id;
    globalSettings.currentAreaTitle = title;
    globalSettings.currentPanel = SettingPanel.history;
    globalSettings.showSettingPanel = true

  };
  return (
    <Polygon key={item.id} positions={item.coordinates}>
      <Popup>
        <button type="button" onClick={() => {openCurrentSettingPanel(title)}} className="btn btn-primary">
          Текущее состояние
        </button>
        <div >
          <button onClick={() => {openAreaInfo(title)}} type="button" className="mt-2 btn btn-warning">
            История
          </button>
        </div>
      </Popup>
    </Polygon>
  );
});
