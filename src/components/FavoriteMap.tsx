import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Rectangle,
  useMapEvents,
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

  const list: IChocolate[] = [
    {
      productName: "Varm belgisk sjokolade",
      englishProductName: "Belgian hot chocolate",
      vendor: "Steam kaffebar",
      location: "Jernbanetorget 1, Østbanehallen",
      lat: 59.91088362120013,
      lon: 10.752799203777597,
    },
    {
      productName: "Varm sjokolade",
      englishProductName: "Hot chocolate",
      vendor: "Kaffebrenneriet",
      location: "Karl Johans gate 7, Arkaden",
      lat: 59.91181003626315,
      lon: 10.747782602301388,
    },
    {
      productName: "Sjokolade på pinne",
      englishProductName: "Hot chocolate on a stick",
      vendor: "Espresso House",
      location: "Jernbanetorget 1, Østbanehallen",
      lat: 59.91201090441835,
      lon: 10.751298468298101,
      description: "Seasonally available",
    },
  ];
  const icon: L.DivIcon = L.divIcon({
    className: "hot-chocolate-icon",
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
  });

  const point = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
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

      {/*59.91174337077401, 10.750425582038146*/}
      <Rectangle
        bounds={[
          [44.54234, 38.08767],
          [44.54137, 38.0876],
        ]}
      >
        <Popup>
          <strong
            onClick={() => {
              alert("dd");
            }}
          >
            hey
          </strong>
        </Popup>
      </Rectangle>
      <CustomReact />
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
    <Rectangle key={item.id} bounds={item.coordinates}>
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
    </Rectangle>
  );
});
