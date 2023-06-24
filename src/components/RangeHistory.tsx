import * as React from "react";
import { Range } from "react-range";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { values } from "mobx";

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

  return (
    <>
      <Range
        step={1}
        min={0}
        max={globalEnvData.numberOfHistoricalDate}
        values={data.values}
        onChange={(values) => {
          onRangeChange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              backgroundColor: "#999",
            }}
          />
        )}
      />
      <ul className="list-group list-group-horizontal mt-5">
        {/*{Object.keys(globalEnvData.currentItem.history).map((el) => {*/}
        {/*  return <li className="list-group-item">{el}</li>;*/}
        {/*})}*/}
        {
          // <li className="list-group-item">
          //   {Object.keys(globalEnvData.currentItem.history)[data.values[0]]}
          // </li>
        }
      </ul>
    </>
  );
});
