import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { RangeHistory } from "./RangeHistory";
import { ListOfHistoryData } from "./ListOfHistoryData";
import React from "react";
import { FavoritesMap } from "./FavoriteMap";

export const MainPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <FavoritesMap />
          <div className="col-md-4">
            <SettingPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
const SettingPanel = observer(() => {
  const { globalSettings, globalEnvData } = useStore();

  return (
    <>
      {globalSettings.currentAreaId && globalSettings.currentAreaTitle && (
        <div>
          <RangeHistory />
          {globalSettings.currentHistoryDate && (
            <ListOfHistoryData areaId={globalSettings.currentAreaId} />
          )}
        </div>
      )}
    </>
  );
});
