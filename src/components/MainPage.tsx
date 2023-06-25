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
const closeWindow = (gSet) => {
  gSet.showSettingPanel = false
}
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
              <div className='d-flex justify-content-between'>
              <h3 style={{ padding: 5 + "px" }}>Панель показателей </h3>
                <button type="button" onClick={(e) => {closeWindow(globalSettings)}} className="btn btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                       viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </button>
              </div>
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
