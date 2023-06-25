import * as React from "react";
import { Range } from "react-range";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { WineCharts } from "./WineCharts";
import {NewChart} from "./NewChart";

export const RangeHistory = observer(() => {
  const [data, setData] = useState({ values: [0] });
  const { globalEnvData, globalSettings } = useStore();

  // useEffect(() => {
  //   alert(data.values[0]);
  // }, [data]);

  const onRangeChange = (values) => {
    setData({ values });
    globalSettings.currentHistoryDateIndex = values[0];
  };

  const onHistoryDateChange = (e) => {
    globalSettings.currentHistoryDateStart = e.target.value;
  };

  return (
    <div style={{height:700*globalSettings.settingWidth/100 +'px'}}>
      <select
        className="form-control"
        value={globalSettings.currentHistoryDateStart}
        onChange={(e) => {
          onHistoryDateChange(e);
        }}
      >
        {globalEnvData.ArOfHistoricalDates.map((el) => {
          return (
            <option id={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
        <select
            className="form-control"
            value={globalSettings.currentHistoryDateFinish}
            onChange={(e) => {
                onHistoryDateChange(e);
            }}
        >
            {globalEnvData.ArOfHistoricalDates.map((el) => {
                return (
                    <option id={el} value={el}>
                        {el}
                    </option>
                );
            })}
        </select>
      <NewChart />
    </div>
  );
});
