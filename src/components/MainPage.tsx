import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { RangeHistory } from "./RangeHistory";
import { ListOfHistoryData } from "./ListOfHistoryData";
import React from "react";
import { FavoritesMap } from "./FavoriteMap";
import { RangeComponent } from "./RangeComponent";
import {NewChart} from "./NewChart";

export const MainPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" style={{height:100 +'vh'}}>
          <SettingPanel />
          <RangeComponent />
          <FavoritesMap />
        </div>
      </div>
    </div>
  );
};
const SettingPanel = observer(() => {
  const { globalSettings, globalEnvData } = useStore();

  return (
    <>
      {globalSettings.currentAreaId && (
        <div
          className="bg-white mt-4 setting-panel"
          style={{ padding: 10 + "px", width: globalSettings.settingWidth +  "%" }}
        >
          {globalSettings.currentAreaId && globalSettings.currentAreaTitle && (
            <div style={{width:'auto',height:'auto'}}>
              <h3 style={{ padding: 5 + "px" }}>Панель показателей</h3>


              <RangeHistory />



              {globalSettings.currentHistoryDateStart && (
                <ListOfHistoryData areaId={globalSettings.currentAreaId} />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
});
