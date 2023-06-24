import * as React from "react";
import { Range } from "react-range";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { WineCharts } from "./WineCharts";

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
    globalSettings.currentHistoryDate = e.target.value;
  };

  return (
    <>
      <select
        className="form-control"
        value={globalSettings.currentHistoryDate}
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
      <WineCharts />
    </>
  );
});
