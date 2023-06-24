import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

export const ListOfHistoryData = observer(({ areaId }: { areaId: string }) => {
  const { globalEnvData, globalSettings } = useStore();

  return (
    <ul className="list-group mt-4">
      <li className="list-group-item">
        Влажность:{globalEnvData.dataAr[0].history["2022-12-01"].airHumidity}
      </li>
      <li className="list-group-item">
        Температура:{globalEnvData.dataAr[0].history["2022-12-01"].temperature}
      </li>
      <li className="list-group-item">
        Скорость ветра:{globalEnvData.dataAr[0].history["2022-12-01"].windSpeed}
      </li>
    </ul>
  );
});
