import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

export const ListOfHistoryData = observer(({ areaId }: { areaId: string }) => {
  const { globalEnvData, globalSettings } = useStore();

  return (
    <div>
      <ul className="list-group mt-4">
        {globalSettings.currentHistoryDate}
        <li className="list-group-item">
          Влажность:
          {
            globalEnvData.data[globalSettings.currentAreaTitle].history[
              globalSettings.currentHistoryDate
            ].airHumidity
          }
        </li>
        <li className="list-group-item">
          Температура:
          {
            globalEnvData.data[globalSettings.currentAreaTitle].history[
              globalSettings.currentHistoryDate
            ].temperature
          }
        </li>
        <li className="list-group-item">
          Скорость ветра:
          {
            globalEnvData.data[globalSettings.currentAreaTitle].history[
              globalSettings.currentHistoryDate
            ].windSpeed
          }
        </li>
      </ul>
    </div>
  );
});
