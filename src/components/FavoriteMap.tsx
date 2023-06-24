import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Rectangle,
  useMapEvents,
  Polygon,
} from "react-leaflet";
import React from "react";
import { IChocolate } from "./Chocolate";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";
import { IDataRow } from "../interfaces/IDataRow";
import { CustomReact } from "./CustomReact";

// import * as Popup from "../../node_modules/react-leaflet-editable-popup/build/EditablePopup";

export const FavoritesMap = observer(() => {
  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [44.543011, 38.084849];
  const zoom: number = 15;
  const { globalEnvData } = useStore();
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
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
  const openAreaInfo = () => {
    globalSettings.dateRange = globalEnvData.dataAr;
    globalSettings.currentAreaId = item.id;
    globalSettings.currentAreaTitle = title;
  };
  return (
    <Polygon key={item.id} positions={item.coordinates}>
      <Popup>
        <div onClick={openAreaInfo}>
          <button type="button" className="btn btn-warning">
            История
          </button>
        </div>
        <button type="button" className="btn btn-primary mt-2">
          Текущее состояние
        </button>
      </Popup>
    </Polygon>
  );
});
