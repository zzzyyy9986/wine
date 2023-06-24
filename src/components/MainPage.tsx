import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { RangeHistory } from "./RangeHistory";
import { ListOfHistoryData } from "./ListOfHistoryData";
import React from "react";
import { FavoritesMap } from "./FavoriteMap";
import { RangeComponent } from "./RangeComponent";

export const MainPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
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
          style={{ padding: 10 + "px", width: "30%" }}
        >
          {globalSettings.currentAreaId && globalSettings.currentAreaTitle && (
            <div>
              <h3 style={{ padding: 5 + "px" }}>Панель показателей</h3>
              <RangeHistory />
              {globalSettings.currentHistoryDate && (
                <ListOfHistoryData areaId={globalSettings.currentAreaId} />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
});
