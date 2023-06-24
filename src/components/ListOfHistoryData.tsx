import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

export const ListOfHistoryData = observer(({ areaId }: { areaId: string }) => {
  const { globalEnvData, globalSettings } = useStore();

  return (
    <div>
      <ul className="list-group mt-4">
        {globalSettings.currentHistoryDateStart}
        <li className="list-group-item">
          Влажность:
          {
            globalEnvData.data[globalSettings.currentAreaTitle].history[
              globalSettings.currentHistoryDateStart
            ].airHumidity
          }
        </li>
        <li className="list-group-item">
          Температура:
          {
            globalEnvData.data[globalSettings.currentAreaTitle].history[
              globalSettings.currentHistoryDateStart
            ].temperature
          }
        </li>
        <li className="list-group-item">
          Скорость ветра:
          {
            globalEnvData.data[globalSettings.currentAreaTitle].history[
              globalSettings.currentHistoryDateStart
            ].windSpeed
          }
        </li>
      </ul>
    </div>
  );
});
