import { Range } from "react-range";
import * as React from "react";
import { useState } from "react";
import {useStore} from "../store/store";

export const RangeComponent = () => {
    const { globalSettings, globalEnvData } = useStore();
    const [data, setData] = useState({ values: [globalSettings.settingWidth] });

  const onRangeChange = (values) => {
    setData({ values: values });
      globalSettings.settingWidth = values[0]
  };

  return (
    <div
      className="mt-3"
      style={{
        position: "absolute",
        width: "300px",
        height: "30px",
        zIndex: 999,
        right: 30 + "px",
        background: "red",
      }}
    >
      <Range
        step={1}
        min={30}
        max={100}
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
    </div>
  );
};
