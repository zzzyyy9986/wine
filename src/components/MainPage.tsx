import {observer} from "mobx-react-lite";
import {useStore} from "../store/store";
import {RangeHistory} from "./RangeHistory";
import {ListOfHistoryData} from "./ListOfHistoryData";
import React from "react";
import {FavoritesMap} from "./FavoriteMap";
import {RangeComponent} from "./RangeComponent";
import {SettingPanel} from "../enums/SettingPanel";

export const MainPage = observer(() => {
  const { globalSettings, globalEnvData } = useStore();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" style={{height:100 +'vh'}}>
          {globalSettings.showSettingPanel && globalSettings.currentPanel === SettingPanel.history && <HistorySettingPanel />}
          {globalSettings.showSettingPanel && globalSettings.currentPanel === SettingPanel.current && <CurrentSettingPanel />}


          <RangeComponent />
          <FavoritesMap />
        </div>
      </div>
    </div>
  );
});
const HistorySettingPanel = observer(() => {
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
            </div>
          )}
        </div>
      )}
    </>
  );
});
const CurrentSettingPanel = observer(() => {
  const { globalSettings, globalEnvData } = useStore();

  return (
      <>
        {globalSettings.currentAreaId && (
            <div
                className="bg-white mt-4 setting-panel"
                style={{ padding: 10 + "px", width: globalSettings.settingWidth + '%' }}
            >
              {globalSettings.currentAreaId && globalSettings.currentAreaTitle && (
                  <div style={{width:'auto',height:'auto'}}>
                    {/*{globalSettings.currentHistoryDateStart && (*/}
                        <ListOfHistoryData areaId={globalSettings.currentAreaId} />
                    {/*)}*/}
                  </div>
              )}
            </div>
        )}
      </>)

})
