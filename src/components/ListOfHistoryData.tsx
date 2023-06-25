import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import {NewCurrentChart} from "./NewChart";
import {WineParams} from "../enums/WineParams";


const getKey = (ob) => {
    return Object.keys(ob)[0]
}
export const ListOfHistoryData = observer(({ areaId }: { areaId: string }) => {
  const { globalEnvData, globalSettings } = useStore();

  return (
      <div>
        <div className='row' style={{height:200+ 200*globalSettings.settingWidth/200 +'px',width:100 +  '%'}}>
          <div className="col-md-4">
            <ul className="list-group mt-4">
              {/*{globalSettings.lastHistoryDate[getKey(globalSettings.lastHistoryDate)].airHumidity}*/}
              {/*  {Object.keys(WineParams).map(param => {*/}
              {/*      return  <li className='list-group-item'>{WineParams[param] +':'} {globalSettings.lastHistoryDate[getKey(globalSettings.lastHistoryDate)][param]}</li>;*/}
              {/*  })}*/}
            </ul>
          </div>
          <div className="col-md-8">
            <NewCurrentChart/>
          </div>
        </div>
      </div>
  );
});
