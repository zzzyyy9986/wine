import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import {NewCurrentChart} from "./NewChart";

export const ListOfHistoryData = observer(({ areaId }: { areaId: string }) => {
  const { globalEnvData, globalSettings } = useStore();

  return (
      <div>
        <div className='row' style={{height:200+ 200*globalSettings.settingWidth/200 +'px',width:100 +  '%'}}>
          <div className="col-md-4">
            <ul className="list-group mt-4">
              {globalSettings.currentHistoryDateStart}
              <li className="list-group-item">
                Влажность:
                {
                  globalEnvData.getLastHistoryItemyByTitle(globalSettings.currentAreaTitle).airHumidity
                }
              </li>
              <li className="list-group-item">
                Температура:
                {
                  globalEnvData.getLastHistoryItemyByTitle(globalSettings.currentAreaTitle).temperature
                }
              </li>
              <li className="list-group-item">
                Скорость ветра:
                {
                  globalEnvData.getLastHistoryItemyByTitle(globalSettings.currentAreaTitle).windSpeed
                }
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <NewCurrentChart/>
          </div>
        </div>
      </div>
  );
});
